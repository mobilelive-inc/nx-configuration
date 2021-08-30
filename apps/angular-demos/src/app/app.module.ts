import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CurrencyPipe} from '@angular/common';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
// importing library
import { AngularModule, FdsModalModule} from 'fds-angular';
// Theme Switcher Component
import { ThemeSwitcherComponent} from './theme-switcher/theme-switcher.component';

// Accordion
import { BasicComponent} from './examples/accordion/basic/basic.component';
import { MultipleComponent} from './examples/accordion/multiple/multiple.component';

// Auto Complete Components
import { AutocompleteBasicComponent} from './examples/autocomplete/autocomplete-basic/autocomplete-basic.component';
import { AutocompleteWithTemplateComponent} from './examples/autocomplete/autocomplete-with-template/autocomplete-with-template.component';

// Buttons
import { ButtonClearComponent} from './examples/button/button-clear/button-clear.component';
import { ButtonCurvedComponent} from './examples/button/button-curved/button-curved.component';
import { ButtonCurvedOutlineComponent} from './examples/button/button-curved-outline/button-curved-outline.component';
import { ButtonOutlineComponent } from './examples/button/button-outline/button-outline.component';
import { ButtonRoundedComponent} from './examples/button/button-rounded/button-rounded.component';
import { ButtonRoundedOutlineComponent} from './examples/button/button-rounded-outline/button-rounded-outline.component';
import { ButtonSolidComponent} from './examples/button/button-solid/button-solid.component';

// Card Component
import { BoxShadowComponent} from './examples/card/box-shadow/box-shadow.component';
import { IconFixedHeightComponent} from './examples/card/icon-fixed-height/icon-fixed-height.component';
import { ImageWithSolidShadowComponent} from './examples/card/image-with-solid-shadow/image-with-solid-shadow.component';
import { NoIconComponent} from './examples/card/no-icon/no-icon.component';
import { SimpleComponent} from './examples/card/simple/simple.component';
import { SolidShadowComponent} from './examples/card/solid-shadow/solid-shadow.component';
import { WithImageComponent} from './examples/card/with-image/with-image.component';


// CheckBox
import { BasicCheckboxComponent} from './examples/checkbox/basic/basic.component';
import { InlineCheckboxComponent} from './examples/checkbox/inline/inline.component';
import { MultiCheckboxComponent} from './examples/checkbox/multi/multi.component';

// Modal
import { ModalBasicComponent} from './examples/modal/modal-basic/modal-basic.component';
import { ModalAdvancedComponent} from './examples/modal/modal-advanced/modal-advanced.component';
import { ModalBasicExampleComponent} from './examples/modal/modal-basic/modal-basic-example.component';
import { ModalAdvancedExampleComponent} from './examples/modal/modal-advanced/modal-advanced-example.component';

// Popover
import { PopoverBasicComponent} from './examples/popover/popover-basic/popover-basic.component';

// Progress Bar
import { ProgressWizardComponent} from './examples/progress/progress/progress-wizard.component';

// Radio Button
import { RadioBasicsComponent} from './examples/radio/radio-basics/radio-basics.component';
import { RadioInlineComponent} from './examples/radio/radio-inline/radio-inline.component';

// Range Slider
import { RangeSliderComponent} from './examples/range-slider/range-slider/range-slider.component';
import { RangeSliderCurrencyComponent} from './examples/range-slider/range-slider-currancy/range-slider-currency.component';

// Select Component
import { SelectBasicComponent} from './examples/select/select-basic/select-basic.component';

// Stepper
import { StepperBasicComponent} from './examples/stepper/stepper-basic/stepper-basic.component';
import { AdvanceStepperComponent} from './examples/stepper/advance-stepper/advance-stepper.component';

// Tabs
import { FullFeaturedComponent} from './examples/tabs/full-featured/full-featured.component';


// Table
import { BorderedTableComponent} from './examples/table/bordered-table/bordered-table.component';
import { DarkTableHeadComponent} from './examples/table/dark-table-head/dark-table-head.component';
import { HoverableDarkTableComponent} from './examples/table/hoverable-dark-table/hoverable-dark-table.component';
import { HoverableTableComponent} from './examples/table/hoverable-table/hoverable-table.component';
import { LightTableHeadComponent} from './examples/table/light-table-head/light-table-head.component';
import { StripedRowTableComponent} from './examples/table/striped-row-table/striped-row-table.component';
import { StripedRowEvenTableComponent} from './examples/table/striped-row-even-table/striped-row-even-table.component';
import { TableDarkComponent} from './examples/table/table-dark/table-dark.component';
import { TableSingleSortComponent} from './examples/table/table-single-sort/table-single-sort.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeSwitcherComponent,

    // Accordion
    BasicComponent,
    MultipleComponent,

    // Auto Complete
    AutocompleteBasicComponent,
    AutocompleteWithTemplateComponent,

    // Buttons
    ButtonClearComponent,
    ButtonCurvedComponent,
    ButtonCurvedOutlineComponent,
    ButtonOutlineComponent,
    ButtonRoundedComponent,
    ButtonRoundedOutlineComponent,
    ButtonSolidComponent,

    // Card
    BoxShadowComponent,
    IconFixedHeightComponent,
    ImageWithSolidShadowComponent,
    NoIconComponent,
    SimpleComponent,
    SolidShadowComponent,
    WithImageComponent,

    // CheckBox
    BasicCheckboxComponent,
    InlineCheckboxComponent,
    MultiCheckboxComponent,

    // Modal
    ModalBasicComponent,
    ModalAdvancedComponent,
    ModalBasicExampleComponent,
    ModalAdvancedExampleComponent,

    // Popover
    PopoverBasicComponent,

    // Progress Bar
    ProgressWizardComponent,

    // Radio Button
    RadioBasicsComponent,
    RadioInlineComponent,

    // Range Slider
    RangeSliderComponent,
    RangeSliderCurrencyComponent,


    // Select
    SelectBasicComponent,

    // Stepper
    StepperBasicComponent,
    AdvanceStepperComponent,

    // Tabs
    FullFeaturedComponent,

    // Table
    BorderedTableComponent,
    DarkTableHeadComponent,
    HoverableTableComponent,
    HoverableDarkTableComponent,
    LightTableHeadComponent,
    StripedRowEvenTableComponent,
    StripedRowTableComponent,
    TableDarkComponent,
    TableSingleSortComponent
  ],
  imports: [
    AngularModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FdsModalModule
  ],
  providers: [ CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
