import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { EagleControlModule } from './modules/eagle-control/eagle-control.module';

// Available after npm i @eagle/ui-kit
// import { EagleControlModule } from '@eagle/ui-kit';

// Available after build
// import { EagleControlModule } from '../../lib_build/@eagle-ui-kit';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EagleControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
