import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AngularModule} from 'fds-angular';

//importing components
import { ThemeSwitcherComponent} from './theme-switcher/theme-switcher.component';
import { ButtonSolidComponent} from './examples/button/button-solid/button-solid.component';
import { ButtonRoundedComponent} from './examples/button/button-rounded/button-rounded.component';
import { ButtonClearComponent} from './examples/button/button-clear/button-clear.component';
import { RangeSliderComponent} from './examples/range-slider/range-slider/range-slider.component';
import { ProgressWizardComponent} from './examples/progrerss/progress-wizard.component';
import { RadioBasicsComponent} from './examples/radio/radio-basic/radio-basic.component';
import { RadioInlineComponent} from './examples/radio/radio-inline/radio-inline.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicCheckboxComponent} from './examples/checkbox/basic/basic.component';
import { SimpleComponent} from './examples/card/simple/simple.component';
import { BasicAccordionComponent} from './examples/accordion/basic.component';
import { StepperBasicComponent} from './examples/stepper/stepper-basic/stepper-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitcherComponent,
    ButtonSolidComponent,
    ButtonRoundedComponent,
    ButtonClearComponent,
    RangeSliderComponent,
    ProgressWizardComponent,
    RadioInlineComponent,
    RadioBasicsComponent,
    BasicCheckboxComponent,
    SimpleComponent,
    BasicAccordionComponent,
    StepperBasicComponent
  ],
  imports: [
    BrowserModule,
    AngularModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabledBlocking' }),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
