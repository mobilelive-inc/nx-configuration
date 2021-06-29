import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { Template, Header, Footer } from  './shared/template.directive';
import {Accordion, AccordionComponent } from './accordion/accordion.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { LabelDirective } from './label/label.component';
import { ProgressComponent } from './progress/progress.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { InputDirective } from './input/input.directive';
import { ErrorDirective } from './form-field/error';
import { TooltipDirective } from './tooltip/fdsTooltip.directive';
import { PopoverDirective } from './popover/fdsPopover.directive';
import {FdsHorizontalStepper, FdsStep, FdsStepper } from './stepper/stepper';
import { FdsStepLabel } from './stepper/step-label';
import { FdsStepHeader } from './stepper/stepper-header';
import { FdsStepperNext, FdsStepperPrevious } from './stepper/stepper-button';
import { FdsRadioGroup } from './radio/radio.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    CardComponent,
    Template,
    Header,
    Footer,
    InputDirective,
    AccordionComponent,
    AutocompleteComponent,
    FormFieldComponent,
    CheckboxComponent,
    InputMaskComponent,
    InputNumberComponent,
    LabelDirective,
    ProgressComponent,
    RangeSliderComponent,
    ErrorDirective,
    TooltipDirective,
    PopoverDirective,
    FdsStep,
    FdsStepper,
    FdsHorizontalStepper,
    FdsStepLabel,
    FdsStepHeader,
    FdsStepperNext,
    FdsStepperPrevious,
    FdsRadioGroup,
    InputMaskComponent,
    AccordionComponent,
    Accordion
  ],
  exports: [
      ButtonComponent,
      AutocompleteComponent,
      Template,
      Header,
      Footer,
      InputDirective,
      FormFieldComponent,
      LabelDirective,
      ErrorDirective,
      RangeSliderComponent,
      ProgressComponent,
      TooltipDirective,
      PopoverDirective,
      FdsStep,
      FdsStepper,
      FdsHorizontalStepper,
      FdsStepLabel,
      FdsStepHeader,
      FdsStepperNext,
      FdsStepperPrevious,
      FdsRadioGroup,
      InputMaskComponent,
      InputNumberComponent,
      CardComponent,
      CheckboxComponent,
      AccordionComponent,
      Accordion

      ]
})
export class AngularModule {}
