//TODO: Remove this file because we are coverting everything to an module


import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// Accordion

// Button Component
import {ButtonComponent} from './button_old/button.component';

// CheckBox
import {CheckboxComponent} from './checkbox/checkbox.component';

// Card
// import {CardComponent} from './card/card.component';

// Popover
import {PopoverDirective} from "./popover/popover.directive";

// Progress Component
// import {ProgressComponent} from './progress/progress.component';

// Range Slider
import {RangeSliderComponent} from './range-slider/range-slider.component';
// Tabs
import {TabView, TabPanel} from './tabs/tabs';

/***** Table Components & Directive *********/
import {
    Table,
    TableBody,
    ScrollableView,
    SortableColumn,
    SortIcon,
    TableCheckbox,
    TableHeaderCheckbox
} from "./table/table";

/**** Shared Components & Directive *********/
import {Template, HeaderComponent, FooterComponent} from './shared/shared';


import {FdsRadioButton, FdsRadioGroup} from './radio/radio.component';

import {FdsHorizontalStepper, FdsStep, FdsStepper} from './stepper/stepper';
import {FdsStepHeader} from './stepper/step-header';
import {FdsStepLabel} from './stepper/step-label';
import {FdsStepperNext, FdsStepperPrevious} from './stepper/stepper-button';
import {LabelDirective} from './label/label.directive';
import {ErrorDirective} from './form-field/error';
import {FormFieldComponent} from './form-field/form-field.component';
import {InputDirective} from './input/input.directive';
import {AutocompleteComponent} from './autocomplete/autocomplete.component';
import {FocusableDirective} from "./shared/directives/focusable.directive";

@NgModule({
    imports: [CommonModule],
    declarations: [
        AutocompleteComponent,
        // ButtonComponent,
        // Shared
        Template,
        HeaderComponent,
        FooterComponent,
        FocusableDirective,

        ErrorDirective,
        // CardComponent,
        CheckboxComponent,
        FormFieldComponent,
        LabelDirective,
        PopoverDirective,
        // ProgressComponent,
        RangeSliderComponent,
        FdsStep,
        FdsStepper,
        FdsStepHeader,
        FdsHorizontalStepper,
        FdsStepLabel,
        FdsStepper,
        FdsStepperNext,
        FdsStepperPrevious,
        FdsRadioButton,
        FdsRadioGroup,
        InputDirective,
        // Tabs
        TabView,
        TabPanel,
        // Table
        Table,
        TableBody,
        ScrollableView,
        SortableColumn,
        SortIcon,
        TableCheckbox,
        TableHeaderCheckbox,
        ButtonComponent
    ],
    exports: [
        AutocompleteComponent,
        // ButtonComponent,
        // Shared
        Template,
        HeaderComponent,
        FooterComponent,

        ErrorDirective,
        // CardComponent,
        CheckboxComponent,
        FormFieldComponent,
        InputDirective,
        LabelDirective,
        // ProgressComponent,
        RangeSliderComponent,
        FdsStep,
        FdsStepper,
        FdsHorizontalStepper,
        FdsStepHeader,
        FdsStepLabel,
        FdsStepper,
        FdsStepperNext,
        FdsStepperPrevious,
        FdsRadioButton,
        FdsRadioGroup,
        PopoverDirective,
        // Tabs
        TabView,
        TabPanel,

        // Table
        Table,
        TableBody,
        ScrollableView,
        SortableColumn,
        SortIcon,
        TableHeaderCheckbox,
        TableCheckbox,
        ButtonComponent
    ]
})
export class AngularModule {
}
