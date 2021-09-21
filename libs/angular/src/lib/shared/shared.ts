import {Directive, Input, TemplateRef, Component, NgModule} from '@angular/core';

@Component({
    selector: 'fds-header',
    template: '<ng-content></ng-content>'
})
export class HeaderComponent {
}

@Component({
    selector: 'fds-footer',
    template: '<ng-content></ng-content>'
})
export class FooterComponent {
}

@Directive({
    selector: '[fdsTemplate]'
})
export class Template {
    @Input() type: string;

    @Input('fdsTemplate') name: string;

    constructor(public template: TemplateRef<any>) {
    }

    getType(): string {
        return this.name;
    }
}

@NgModule({
    declarations: [],
    imports: [],
    exports: []
})
class Shared {

}
