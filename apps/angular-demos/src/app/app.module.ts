import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "@nx-configuration/angular";

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ButtonComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], {initialNavigation: 'enabledBlocking'}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
