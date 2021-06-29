import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { Template, Header, Footer } from  './shared/template.directive';
import { AccordionComponent } from './accordion/accordion.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputMaskComponent } from './input-mask/input-mask.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { LabelDirective } from './label/label.component';
import { ModalComponent } from './modal/modal.component';
import { ProgressComponent } from './progress/progress.component';
// import { RadioComponent } from './radio/radio.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    CardComponent,
    Template,
    Header,
    Footer,
    AccordionComponent,
    AutocompleteComponent,
    FormFieldComponent,
    CheckboxComponent,
    InputMaskComponent,
    InputNumberComponent,
    LabelDirective,
    ModalComponent,
    ProgressComponent,
    // RadioComponent,
    RangeSliderComponent,
    StepperComponent,
  ],
  exports: [ ButtonComponent, CardComponent, Template, Header, Footer]
})
export class AngularModule {}
