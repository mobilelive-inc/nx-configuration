import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { RangeSliderComponent} from './range-slider/range-slider.component';
import { ProgressComponent} from './progress/progress.component';
import { FdsRadioButton, FdsRadioGroup} from './radio/radio.component';
import { CheckboxComponent} from './checkbox/checkbox.component';
import { CardComponent} from './card/card.component';
import { Template, Header, Footer} from './shared/template.directive';
import { Accordion, AccordionTabComponent} from './accordion/accordion.component';
import { FdsHorizontalStepper, FdsStep, FdsStepper } from './stepper/stepper';
import { FdsStepHeader } from './stepper/step-header';
import { FdsStepLabel } from './stepper/step-label';
import { FdsStepperNext, FdsStepperPrevious } from './stepper/stepper-button';
import { LabelDirective } from './label/label.directive';
import { ErrorDirective} from './form-field/error';
import { FormFieldComponent } from './form-field/form-field.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    AccordionTabComponent,
    Accordion,
    Template,
    Header,
    Footer,
    // AutocompleteComponent,
    ErrorDirective,
    CardComponent,
    CheckboxComponent,
    FormFieldComponent,
    // InputMaskComponent,
    // InputNumberComponent,
    // InputDirective,
    LabelDirective,
    // PopoverDirective,
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
    // TooltipDirective,
    FdsRadioButton,
    FdsRadioGroup
  ],
  exports: [
    ButtonComponent,
    AccordionTabComponent,
    Accordion,
    Template,
    Header,
    Footer,
    // AutocompleteComponent,
    ErrorDirective,
    CardComponent,
    CheckboxComponent,
    FormFieldComponent,
    // InputMaskComponent,
    // InputNumberComponent,
    // InputDirective,
    LabelDirective,
    // PopoverDirective,
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
    // TooltipDirective,
    FdsRadioButton,
    FdsRadioGroup
  ]
})
export class AngularModule {}
