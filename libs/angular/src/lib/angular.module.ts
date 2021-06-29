import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { Template, Header, Footer } from  './shared/template.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [
    ButtonComponent,
    CardComponent,
    Template,
    Header, Footer
  ],
  exports: [ ButtonComponent, CardComponent, Template, Header, Footer]
})
export class AngularModule {}
