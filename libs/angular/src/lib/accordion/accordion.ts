import {
    Component,
    ChangeDetectionStrategy,
    ViewEncapsulation,
    AfterContentInit,
    OnDestroy,
    Input,
    EventEmitter,
    Output,
    ContentChildren,
    QueryList,
    TemplateRef,
    Inject,
    forwardRef,
    ChangeDetectorRef,
    ElementRef,
    NgModule,
} from "@angular/core";
import {CommonModule} from "@angular/common";
import {
    trigger,
    state,
    style,
    transition,
    animate,
} from "@angular/animations";
import {Subscription} from "rxjs";
import {BlockableUI} from "../shared/utils/blockableui";

//@TODO: make this dependency of shared modules

import {
    HeaderComponent,
    Template,
} from "../shared-new/shared.module";
import {FocusableModule} from "../directive/focusable/focusable";


let idx = 0;

@Component({
    selector: "fds-accordion-tab",
    templateUrl: "./accordion.html",
    animations: [
        trigger("tabContent", [
            state(
                "hidden",
                style({
                    height: "0",
                    overflow: "hidden",
                })
            ),
            state(
                "visible",
                style({
                    height: "*",
                })
            ),
            transition("visible <=> hidden", [
                style({overflow: "hidden"}),
                animate("{{transitionParams}}"),
            ]),
            transition("void => *", animate(0)),
        ]),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class AccordionTabComponent implements AfterContentInit, OnDestroy {
    @Input() header: string;

    @Input() accordionTabClass: string;

    @Input() disabled: boolean;

    @Input() cache = true;

    @Output() selectedChange = new EventEmitter();

    @Input() transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";

    @ContentChildren(HeaderComponent) headerFacet: QueryList<HeaderComponent>;

    @ContentChildren(Template) templates: QueryList<any>;

    private _selected: boolean;

    private _focused: boolean;

    @Input() get focused(): any {
        return this._focused;
    }

    set focused(val: any) {
        this._focused = val;
        this.changeDetector.markForCheck();
    }

    @Input() get selected(): any {
        return this._selected;
    }

    set selected(val: any) {
        this._selected = val;

        if (!this.loaded) {
            if (this._selected && this.cache) {
                this.loaded = true;
            }

            this.changeDetector.markForCheck();
        }
    }

    contentTemplate: TemplateRef<any>;

    headerTemplate: TemplateRef<any>;

    id = `fds-accordiontab-${idx++}`;

    loaded: boolean;

    accordion: AccordionComponent;

    constructor(
        @Inject(forwardRef(() => AccordionComponent)) accordion: any,
        public changeDetector: ChangeDetectorRef
    ) {
        this.accordion = accordion as AccordionComponent;
    }

    ngAfterContentInit() {
        this.templates.forEach((item) => {
            switch (item.getType()) {
                case "content":
                    this.contentTemplate = item.template;
                    break;

                case "header":
                    this.headerTemplate = item.template;
                    break;

                default:
                    this.contentTemplate = item.template;
                    break;
            }
        });
    }

    toggle(event: any): any {
        if (this.disabled) {
            return false;
        }

        const index = this.findTabIndex();

        if (this.selected) {
            this.selected = false;
            this.accordion.onClose.emit({originalEvent: event, index: index});
        } else {
            if (!this.accordion.multiple) {
                for (let i = 0; i < this.accordion.tabs.length; i++) {
                    this.accordion.tabs[i].selected = false;
                    this.accordion.tabs[i].selectedChange.emit(false);
                    this.accordion.tabs[i].changeDetector.markForCheck();
                }
            }

            this.selected = true;
            this.loaded = true;
            this.accordion.onOpen.emit({originalEvent: event, index: index});
        }

        this.selectedChange.emit(this.selected);
        this.accordion.updateActiveIndex();
        this.changeDetector.markForCheck();

        event.preventDefault();
    }

    findTabIndex() {
        let index = -1;
        for (let i = 0; i < this.accordion.tabs.length; i++) {
            if (this.accordion.tabs[i] == this) {
                index = i;
                break;
            }
        }
        return index;
    }

    get hasHeaderFacet(): boolean {
        return this.headerFacet && this.headerFacet.length > 0;
    }

    onKeydown(event: KeyboardEvent) {
        if (event.code === "Space" || event.key === "Enter") {
            this.toggle(event);
            event.preventDefault();
        }
    }

    ngOnDestroy() {
        this.accordion.tabs.splice(this.findTabIndex(), 1);
    }
}

@Component({
    selector: "fds-accordion",
    template: `
        <div
                [ngClass]="'fds-accordion fds-component'"
                [ngStyle]="style"
                [class]="fdsAccordionClass"
                role="tablist"
                (keydown)="handleKeyDown($event)"
        >
            <ng-content></ng-content>
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent
    implements BlockableUI, AfterContentInit, OnDestroy {
    currentlyFocused = 0;

    panelQuantity: number;

    @Input() multiple: boolean;

    @Output() onClose = new EventEmitter();

    @Output() onOpen = new EventEmitter();

    @Input() style: any;

    @Input() fdsAccordionClass: string;

    @Input() expandIcon = "icon-arrowdown";

    @Input() collapseIcon = "icon-arrowdown";

    @Output() activeIndexChange: EventEmitter<any> = new EventEmitter();

    @ContentChildren(AccordionTabComponent)
    tabList: QueryList<AccordionTabComponent>;

    tabListSubscription: Subscription;

    private _activeIndex: any;

    preventActiveIndexPropagation: boolean;

    public tabs: AccordionTabComponent[] = [];

    constructor(
        public el: ElementRef,
        public changeDetector: ChangeDetectorRef
    ) {
    }

    ngAfterContentInit() {
        this.initTabs();

        this.tabListSubscription = this.tabList.changes.subscribe(() => {
            this.initTabs();
        });

        this.panelQuantity = this.tabList.length;
    }

    initTabs(): any {
        this.tabs = this.tabList.toArray();
        this.updateSelectionState();
        this.changeDetector.markForCheck();
    }

    getBlockableElement(): HTMLElement {
        return this.el.nativeElement.children[0];
    }

    @Input() get activeIndex(): any {
        return this._activeIndex;
    }

    set activeIndex(val: any) {
        this._activeIndex = val;
        if (this.preventActiveIndexPropagation) {
            this.preventActiveIndexPropagation = false;
            return;
        }

        this.updateSelectionState();
    }

    updateSelectionState() {
        if (this.tabs && this.tabs.length && this._activeIndex != null) {
            for (let i = 0; i < this.tabs.length; i++) {
                const selected = this.multiple
                    ? this._activeIndex.includes(i)
                    : i === this._activeIndex;
                const changed = selected !== this.tabs[i].selected;

                if (changed) {
                    this.tabs[i].selected = selected;
                    this.tabs[i].selectedChange.emit(selected);
                    this.tabs[i].changeDetector.markForCheck();
                }
            }
        }
        this.tabs[0].focused = true;
    }

    updateActiveIndex() {
        let index: any = this.multiple ? [] : null;
        this.tabs.forEach((tab, i) => {
            if (tab.selected) {
                if (this.multiple) {
                    index.push(i);
                } else {
                    index = i;
                    return;
                }
            }
        });

        this.preventActiveIndexPropagation = true;
        this.activeIndexChange.emit(index);
    }

    handleKeyDown(event: KeyboardEvent) {
        console.log(event);
    }

    ngOnDestroy() {
        if (this.tabListSubscription) {
            this.tabListSubscription.unsubscribe();
        }
    }
}

@NgModule({
    declarations: [AccordionTabComponent, AccordionComponent],
    imports: [CommonModule, FocusableModule],
    exports: [AccordionTabComponent, AccordionComponent],
})
export class AccordionModule {
}
