import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import {
  AccordionComponentModule,
  ButtonModule, 
  CardModule, 
  ProgressModule, 
  SharedModule
} from "@friday-design-systems/angular-v2";

// Buttons
import { ButtonClearComponent} from './examples/button/button-clear/button-clear.component';
import { ButtonCurvedComponent} from './examples/button/button-curved/button-curved.component';
import { ButtonCurvedOutlineComponent} from './examples/button/button-curved-outline/button-curved-outline.component';
import { ButtonOutlineComponent } from './examples/button/button-outline/button-outline.component';
import { ButtonRoundedComponent} from './examples/button/button-rounded/button-rounded.component';
import { ButtonRoundedOutlineComponent} from './examples/button/button-rounded-outline/button-rounded-outline.component';
import { ButtonSolidComponent} from './examples/button/button-solid/button-solid.component';

// Progress Bar
import { ProgressWizardComponent } from './examples/progress/progress-wizard.component';

// Card Component
import { BoxShadowComponent} from './examples/card/box-shadow/box-shadow.component';
import { IconFixedHeightComponent} from './examples/card/icon-fixed-height/icon-fixed-height.component';
import { ImageWithSolidShadowComponent} from './examples/card/image-with-solid-shadow/image-with-solid-shadow.component';
import { NoIconComponent} from './examples/card/no-icon/no-icon.component';
import { SimpleComponent} from './examples/card/simple/simple.component';
import { SolidShadowComponent} from './examples/card/solid-shadow/solid-shadow.component';
import { WithImageComponent} from './examples/card/with-image/with-image.component';
// Accordion
import { BasicComponent } from "./examples/accordion/basic/basic.component";
import { MultipleComponent } from "./examples/accordion/multiple/multiple.component";
@NgModule({
  declarations: [
    AppComponent, 
    SimpleComponent,
    BoxShadowComponent,
    IconFixedHeightComponent,
    ImageWithSolidShadowComponent,
    NoIconComponent,
    SolidShadowComponent,
    WithImageComponent,
    ButtonClearComponent,
    ButtonCurvedComponent,
    ButtonCurvedOutlineComponent,
    ButtonOutlineComponent,
    ButtonRoundedComponent,
    ButtonRoundedOutlineComponent,
    ButtonSolidComponent,
    ProgressWizardComponent,
    // Accordion
    BasicComponent,
    MultipleComponent,
  ],
  imports: [
    BrowserModule, 
    ButtonModule, 
    CardModule, 
    SharedModule,
    ProgressModule,
    AccordionComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
