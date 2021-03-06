import {
  AfterContentInit,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  forwardRef,
  Injector,
  Input,
  IterableDiffers,
  OnDestroy,
  OnInit,
  Optional,
  Output,
  QueryList,
  Renderer2,
  Self,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  NgControl
} from '@angular/forms';
import { DomHandler, ObjectUtils } from './autocomplete.helpers';
import { trigger, style, transition, animate } from '@angular/animations';
import { Template } from '../shared/template.directive';
import { FdsFormFieldControl } from '../form-field/form-field-control';

let nextUniqueId = 0;

export const AUTOCOMPLETE_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AutocompleteComponent),
  multi: true
};

@Component({
  selector: 'fds-autocomplete',
  templateUrl: './autocomplete.component.html',
  animations: [
    trigger('overlayAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scaleY(0.8)' }),
        animate('{{showTransitionParams}}')
      ]),
      transition(':leave', [
        animate('{{hideTransitionParams}}', style({ opacity: 0 }))
      ])
    ])
  ],
  host: {
    '[class.fds-inputwrapper-filled]': 'filled',
    '[class.fds-inputwrapper-focus]': 'focus && !disabled',
    '[class.w--100]': '100',
    '[class.d--block]': '200'
  },
  providers: [
    // AUTOCOMPLETE_VALUE_ACCESSOR,
    {
      provide: FdsFormFieldControl,
      useExisting: forwardRef(() => AutocompleteComponent)
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent
  implements
    AfterViewChecked,
    AfterContentInit,
    OnDestroy,
    ControlValueAccessor {
  @Input() minLength: number = 1;

  @Input() delay: number = 300;

  @Input() style: any;

  @Input() panelStyle: any;

  @Input() styleClass: string;

  @Input() showEmptyMessageClasses: string;

  @Input() btnText = 'Select a Person or Group';

  @Input() withinInput: boolean = true;

  _btnDropdown = false;

  @Input() disableBtnDropdown: boolean = false;

  @Input() get btnDropdown(): boolean {
    return this._btnDropdown;
  }

  set btnDropdown(val: boolean) {
    this._btnDropdown = val;
    this._toggleAutocomplete = !val;
  }

  _toggleAutocomplete = true;

  @Input() get toggleAutocomplete(): boolean {
    return this._toggleAutocomplete;
  }

  set toggleAutocomplete(val: boolean) {
    this._toggleAutocomplete = val;
  }

  @Input() panelStyleClass: string;

  @Input() inputStyle: any;

  @Input() inputId: string;

  @Input() id: string = 'fdsAutocomplete' + nextUniqueId;

  @Input() inputStyleClass: string;

  @Input() placeholder: string;

  @Input() readonly: boolean;

  @Input() disabled: boolean;

  @Input() maxlength: number;

  @Input() name: string;

  @Input() required: boolean;

  @Input() size: number;

  @Input() appendTo: any;

  @Input() autoHighlight: boolean;

  @Input() forceSelection: boolean;

  @Input() type: string = 'text';

  @Input() autoZIndex: boolean = true;

  @Input() baseZIndex: number = 0;

  @Input() ariaLabel: string;

  @Input() ariaLabelledBy: string;

  @Input() dropdownIcon: string = 'icon-arrow-down';

  @Input() unique: boolean = true;

  @Input() completeOnFocus: boolean = false;

  @Output() completeMethod: EventEmitter<any> = new EventEmitter();

  @Output() onSelect: EventEmitter<any> = new EventEmitter();

  @Output() onUnselect: EventEmitter<any> = new EventEmitter();

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @Output() onDropdownClick: EventEmitter<any> = new EventEmitter();

  @Output() onClear: EventEmitter<any> = new EventEmitter();

  @Output() onKeyUp: EventEmitter<any> = new EventEmitter();

  @Output() onShow: EventEmitter<any> = new EventEmitter();

  @Output() onHide: EventEmitter<any> = new EventEmitter();

  @Input() field: string;

  @Input() scrollHeight: string = '200px';

  @Input() dropdown: boolean;

  @Input() dropdownMode: string = 'blank';

  @Input() multiple: boolean;

  @Input() tabindex: number;

  @Input() dataKey: string;

  @Input() emptyMessage: string;

  @Input() showEmptyMessage: boolean;

  @Input() showTransitionOptions: string = '.12s cubic-bezier(0, 0, 0.2, 1)';

  @Input() hideTransitionOptions: string = '.1s linear';

  @Input() autofocus: boolean;

  @Input() autocomplete: string = 'off';

  @ViewChild('in') inputEL: ElementRef;

  @ViewChild('multiIn') multiInputEL: ElementRef;

  @ViewChild('multiContainer') multiContainerEL: ElementRef;

  @ViewChild('ddBtn') dropdownButton: ElementRef;

  @ContentChildren(Template) templates: QueryList<any>;

  overlay: HTMLDivElement;

  itemTemplate: TemplateRef<any>;

  emptyTemplate: TemplateRef<any>;

  selectedItemTemplate: TemplateRef<any>;

  errorState: boolean;

  ngControl: NgControl | null;

  controlType = 'fds-autocomplete';

  value: any;
  timeout: any;
  overlayVisible: boolean = false;
  documentClickListener: any;
  suggestionsUpdated: boolean;
  highlightOption: any;
  highlightOptionChanged: boolean;
  focus: boolean = false;
  filled: boolean;
  inputClick: boolean;
  inputKeyDown: boolean;
  noResults: boolean;
  differ: any;
  inputFieldValue: string = null;
  loading: boolean;
  documentResizeListener: any;
  forceSelectionUpdateModelTimeout: any;
  listId: string;
  itemClicked: boolean;

  constructor(
    /** @docs-private */
    private _injector: Injector,
    public el: ElementRef,
    public renderer: Renderer2,
    public cd: ChangeDetectorRef,
    public differs: IterableDiffers
  ) {
    this.differ = differs.find([]).create(null);
    this.listId = ++nextUniqueId + '_list';
    this.ngControl = this._injector.get(NgControl);
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  getClasses() {
    return { 'fds-autocomplete-dd': this.dropdown };
  }

  _suggestions: any[];

  @Input() get suggestions(): any[] {
    return this._suggestions;
  }

  set suggestions(val: any[]) {
    this._suggestions = val;
    this.handleSuggestionsChange();
  }

  onModelChange: Function = () => {};

  onModelTouched: Function = () => {};

  ngAfterViewChecked() {
    //Use timeouts as since Angular 4.2, AfterViewChecked is broken and not called after panel is updated
    if (this.suggestionsUpdated && this.overlay && this.overlay.offsetParent) {
      setTimeout(() => {
        if (this.overlay) {
          this.alignOverlay();
        }
      }, 1);
      this.suggestionsUpdated = false;
    }

    if (this.highlightOptionChanged) {
      setTimeout(() => {
        if (this.overlay) {
          let listItem = DomHandler.findSingle(
            this.overlay,
            'li.fds-highlight'
          );
          if (listItem) {
            DomHandler.scrollInView(this.overlay, listItem);
          }
        }
      }, 1);
      this.highlightOptionChanged = false;
    }
  }

  handleSuggestionsChange() {
    if (this._suggestions != null && this.loading) {
      this.highlightOption = null;
      if (this._suggestions.length) {
        this.noResults = false;
        this.show();
        this.suggestionsUpdated = true;

        if (this.autoHighlight) {
          this.highlightOption = this._suggestions[0];
        }
      } else {
        this.noResults = true;

        if (this.showEmptyMessage) {
          this.show();
          this.suggestionsUpdated = true;
        } else {
          this.hide();
        }
      }

      this.loading = false;
    }
  }

  ngAfterContentInit() {
    this.templates.forEach(item => {
      switch (item.getType()) {
        case 'item':
          this.itemTemplate = item.template;
          break;

        case 'selectedItem':
          this.selectedItemTemplate = item.template;
          break;

        case 'empty':
          this.emptyTemplate = item.template;
          break;

        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }

  writeValue(value: any): void {
    this.value = value;
    this.filled = this.value && this.value != '';
    this.updateInputField();
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }

  setDisabledState(val: boolean): void {
    this.disabled = val;
    this.cd.markForCheck();
  }

  onInput(event: Event) {
    // When an input element with a placeholder is clicked, the onInput event is invoked in IE.
    if (!this.inputKeyDown && DomHandler.isIE()) {
      return;
    }

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    let value = (<HTMLInputElement>event.target).value;
    if (!this.multiple && !this.forceSelection) {
      this.onModelChange(value);
    }

    if (value.length === 0 && !this.multiple) {
      this.hide();
      this.onClear.emit(event);
      this.onModelChange(value);
    }

    if (value.length >= this.minLength) {
      this.timeout = setTimeout(() => {
        this.search(event, value);
      }, this.delay);
    } else {
      this.suggestions = null;
      this.hide();
    }
    this.updateFilledState();
    this.inputKeyDown = false;
  }

  onInputClick(event: MouseEvent) {
    if (this.documentClickListener) {
      this.inputClick = true;
    }
  }

  search(event: any, query: string) {
    //allow empty string but not undefined or null
    if (query === undefined || query === null) {
      return;
    }

    this.loading = true;

    this.completeMethod.emit({
      originalEvent: event,
      query: query
    });
  }

  selectItem(option: any, focus: boolean = true) {
    if (this.forceSelectionUpdateModelTimeout) {
      clearTimeout(this.forceSelectionUpdateModelTimeout);
      this.forceSelectionUpdateModelTimeout = null;
    }

    if (this.multiple) {
      this.multiInputEL.nativeElement.value = '';
      this.value = this.value || [];
      if (!this.isSelected(option) || !this.unique) {
        this.value = [...this.value, option];
        this.onModelChange(this.value);
      }
    } else {
      this.inputEL.nativeElement.value = this.field
        ? ObjectUtils.resolveFieldData(option, this.field) || ''
        : option;
      this.value = option;
      this.onModelChange(this.value);
    }

    this.onSelect.emit(option);
    this.updateFilledState();

    if (focus) {
      this.itemClicked = true;
      this.focusInput();
    }
  }

  show() {
    if (this.multiInputEL || this.inputEL) {
      let hasFocus = this.multiple
        ? this.multiInputEL.nativeElement.ownerDocument.activeElement ==
          this.multiInputEL.nativeElement
        : this.inputEL.nativeElement.ownerDocument.activeElement ==
          this.inputEL.nativeElement;

      if (!this.overlayVisible && hasFocus) {
        this.overlayVisible = true;
      }
    }
  }

  onOverlayAnimationStart(event: any | AnimationEvent) {
    switch (event.toState) {
      case 'visible':
        this.overlay = event.element;
        this.appendOverlay();
        if (this.autoZIndex) {
          this.overlay.style.zIndex = String(
            this.baseZIndex + ++DomHandler.zindex
          );
        }
        this.alignOverlay();
        this.bindDocumentClickListener();
        this.bindDocumentResizeListener();
        this.onShow.emit(event);
        break;

      case 'void':
        this.onOverlayHide();
        break;
    }
  }

  onOverlayAnimationDone(event: any | AnimationEvent) {
    if (event.toState === 'void') {
      this._suggestions = null;
    }
  }

  appendOverlay() {
    if (this.appendTo) {
      if (this.appendTo === 'body') document.body.appendChild(this.overlay);
      else DomHandler.appendChild(this.overlay, this.appendTo);

      if (!this.overlay.style.minWidth) {
        this.overlay.style.minWidth =
          DomHandler.getWidth(this.el.nativeElement.children[0]) + 'px';
      }
    }
  }

  resolveFieldData(value) {
    return this.field ? ObjectUtils.resolveFieldData(value, this.field) : value;
  }

  restoreOverlayAppend() {
    if (this.overlay && this.appendTo) {
      this.el.nativeElement.appendChild(this.overlay);
    }
  }

  alignOverlay() {
    if (this.appendTo)
      DomHandler.absolutePosition(
        this.overlay,
        this.multiple
          ? this.multiContainerEL.nativeElement
          : this.inputEL.nativeElement
      );
    else
      DomHandler.relativePosition(
        this.overlay,
        this.multiple
          ? this.multiContainerEL.nativeElement
          : this.inputEL.nativeElement
      );
  }

  hide() {
    this.overlayVisible = false;
    this.cd.markForCheck();
  }

  handleDropdownClick(event) {
    if (!this.overlayVisible) {
      this.focusInput();
      let queryValue = this.multiple
        ? this.multiInputEL.nativeElement.value
        : this.inputEL.nativeElement.value;

      if (this.dropdownMode === 'blank') this.search(event, '');
      else if (this.dropdownMode === 'current') this.search(event, queryValue);

      this.onDropdownClick.emit({
        originalEvent: event,
        query: queryValue
      });
    } else {
      this.hide();
    }
  }

  focusInput() {
    if (this.multiple) this.multiInputEL.nativeElement.focus();
    else this.inputEL.nativeElement.focus();
  }

  get emptyMessageLabel(): string {
    return this.emptyMessage;
  }

  removeItem(item: any) {
    let itemIndex = DomHandler.index(item);
    let removedValue = this.value[itemIndex];
    this.value = this.value.filter((val, i) => i != itemIndex);
    this.onModelChange(this.value);
    this.updateFilledState();
    this.onUnselect.emit(removedValue);
  }

  onKeydown(event) {
    if (this.overlayVisible) {
      let highlightItemIndex = this.findOptionIndex(this.highlightOption);

      switch (event.which) {
        //down
        case 40:
          if (highlightItemIndex != -1) {
            var nextItemIndex = highlightItemIndex + 1;
            if (nextItemIndex != this.suggestions.length) {
              this.highlightOption = this.suggestions[nextItemIndex];
              this.highlightOptionChanged = true;
            }
          } else {
            this.highlightOption = this.suggestions[0];
          }

          event.preventDefault();
          break;

        //up
        case 38:
          if (highlightItemIndex > 0) {
            let prevItemIndex = highlightItemIndex - 1;
            this.highlightOption = this.suggestions[prevItemIndex];
            this.highlightOptionChanged = true;
          }

          event.preventDefault();
          break;

        //enter
        case 13:
          if (this.highlightOption) {
            this.selectItem(this.highlightOption);
            this.hide();
          }
          event.preventDefault();
          break;

        //escape
        case 27:
          this.hide();
          event.preventDefault();
          break;

        //tab
        case 9:
          if (this.highlightOption) {
            this.selectItem(this.highlightOption);
          }
          this.hide();
          break;
      }
    } else {
      if (event.which === 40 && this.suggestions) {
        this.search(event, event.target.value);
      }
    }

    if (this.multiple && this.withinInput) {
      switch (event.which) {
        //backspace
        case 8:
          if (
            this.value &&
            this.value.length &&
            !this.multiInputEL.nativeElement.value
          ) {
            this.value = [...this.value];
            const removedValue = this.value.pop();
            this.onModelChange(this.value);
            this.updateFilledState();
            this.onUnselect.emit(removedValue);
          }
          break;
      }
    }

    this.inputKeyDown = true;
  }

  onKeyup(event) {
    this.onKeyUp.emit(event);
  }

  onInputFocus(event) {
    if (!this.itemClicked && this.completeOnFocus) {
      let queryValue = this.multiple
        ? this.multiInputEL.nativeElement.value
        : this.inputEL.nativeElement.value;
      this.search(event, queryValue);
    }

    this.focus = true;
    this.onFocus.emit(event);
    this.itemClicked = false;
  }

  onInputBlur(event) {
    this.focus = false;
    this.onModelTouched();
    this.onBlur.emit(event);
  }

  onInputChange(event) {
    if (this.forceSelection) {
      let valid = false;
      let inputValue = event.target.value.trim();

      if (this.suggestions) {
        for (let suggestion of this.suggestions) {
          let itemValue = this.field
            ? ObjectUtils.resolveFieldData(suggestion, this.field)
            : suggestion;
          if (itemValue && inputValue === itemValue.trim()) {
            valid = true;
            this.forceSelectionUpdateModelTimeout = setTimeout(() => {
              this.selectItem(suggestion, false);
            }, 250);
            break;
          }
        }
      } else if (inputValue && this.value) {
        valid = true;
      }

      if (!valid) {
        if (this.multiple) {
          this.multiInputEL.nativeElement.value = '';
        } else {
          this.value = null;
          this.inputEL.nativeElement.value = '';
        }

        this.onClear.emit(event);
        this.onModelChange(this.value);
      }
    }
  }

  onInputPaste(event: ClipboardEvent) {
    this.onKeydown(event);
  }

  isSelected(val: any): boolean {
    let selected: boolean = false;
    if (this.value && this.value.length) {
      for (let i = 0; i < this.value.length; i++) {
        if (ObjectUtils.equals(this.value[i], val, this.dataKey)) {
          selected = true;
          break;
        }
      }
    }
    return selected;
  }

  findOptionIndex(option): number {
    let index: number = -1;
    if (this.suggestions) {
      for (let i = 0; i < this.suggestions.length; i++) {
        if (ObjectUtils.equals(option, this.suggestions[i])) {
          index = i;
          break;
        }
      }
    }

    return index;
  }

  updateFilledState() {
    if (this.multiple)
      this.filled =
        (this.value && this.value.length) ||
        (this.multiInputEL &&
          this.multiInputEL.nativeElement &&
          this.multiInputEL.nativeElement.value != '');
    else
      this.filled =
        (this.inputFieldValue && this.inputFieldValue != '') ||
        (this.inputEL &&
          this.inputEL.nativeElement &&
          this.inputEL.nativeElement.value != '');
  }

  updateInputField() {
    let formattedValue = this.value
      ? this.field
        ? ObjectUtils.resolveFieldData(this.value, this.field) || ''
        : this.value
      : '';
    this.inputFieldValue = formattedValue;

    if (this.inputEL && this.inputEL.nativeElement) {
      this.inputEL.nativeElement.value = formattedValue;
    }

    this.updateFilledState();
  }

  bindDocumentClickListener() {
    if (!this.documentClickListener) {
      const documentTarget: any = this.el
        ? this.el.nativeElement.ownerDocument
        : 'document';

      this.documentClickListener = this.renderer.listen(
        documentTarget,
        'click',
        event => {
          if (event.which === 3) {
            return;
          }

          if (!this.inputClick && !this.isDropdownClick(event)) {
            this.hide();
          }

          this.inputClick = false;
          this.cd.markForCheck();
        }
      );
    }
  }

  isDropdownClick(event) {
    if (this.dropdown) {
      let target = event.target;
      return (
        target === this.dropdownButton.nativeElement ||
        target.parentNode === this.dropdownButton.nativeElement
      );
    } else {
      return false;
    }
  }

  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }

  bindDocumentResizeListener() {
    this.documentResizeListener = this.onWindowResize.bind(this);
    window.addEventListener('resize', this.documentResizeListener);
  }

  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      window.removeEventListener('resize', this.documentResizeListener);
      this.documentResizeListener = null;
    }
  }

  onWindowResize() {
    this.hide();
  }

  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.overlay = null;
    this.onHide.emit();
  }

  ngOnDestroy() {
    if (this.forceSelectionUpdateModelTimeout) {
      clearTimeout(this.forceSelectionUpdateModelTimeout);
      this.forceSelectionUpdateModelTimeout = null;
    }
    this.restoreOverlayAppend();
    this.onOverlayHide();
  }
}
