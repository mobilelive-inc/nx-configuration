import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Button Component
import { ButtonComponent } from './button/button.component';

// CheckBox
import { CheckboxComponent} from './checkbox/checkbox.component';

// Card
import { CardComponent} from './card/card.component';

// Popover
import { PopoverDirective} from './popover/fdsPopover.directive';

// Progress Component
import { ProgressComponent} from './progress/progress.component';

// Range Slider
import { RangeSliderComponent} from './range-slider/range-slider.component';
// Tabs
import { TabView, TabPanel} from './tabs/tabs';
// Table
import {
  Table,
  TableBody,
  ScrollableView,
  SortableColumn,
  SortIcon,
  TableCheckbox,
  TableHeaderCheckbox
} from './table/table';


import { FdsRadioButton, FdsRadioGroup} from './radio/radio.component';
import { Template, Header, Footer} from './shared/template.directive';
import { Accordion, AccordionTabComponent} from './accordion/accordion.component';
import { FdsHorizontalStepper, FdsStep, FdsStepper } from './stepper/stepper';
import { FdsStepHeader } from './stepper/step-header';
import { FdsStepLabel } from './stepper/step-label';
import { FdsStepperNext, FdsStepperPrevious } from './stepper/stepper-button';
import { LabelDirective } from './label/label.directive';
import { ErrorDirective} from './form-field/error';
import { FormFieldComponent } from './form-field/form-field.component';
import { InputDirective} from './input/input.directive';
import { AutocompleteComponent} from './autocomplete/autocomplete.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    AccordionTabComponent,
    Accordion,
    Template,
    Header,
    Footer,
    AutocompleteComponent,
    ErrorDirective,
    CardComponent,
    CheckboxComponent,
    FormFieldComponent,
    LabelDirective,
    PopoverDirective,
    ProgressComponent,
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
  ],
  exports: [
    ButtonComponent,
    AccordionTabComponent,
    Accordion,
    Template,
    Header,
    Footer,
    AutocompleteComponent,
    ErrorDirective,
    CardComponent,
    CheckboxComponent,
    FormFieldComponent,
    InputDirective,
    LabelDirective,
    ProgressComponent,
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
    TableCheckbox,
    TableHeaderCheckbox,
  ]
})
export class AngularModule {}
