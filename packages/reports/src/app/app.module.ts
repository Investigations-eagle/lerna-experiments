import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

// Shared lib after install
import { EagleControlModule } from '@eagle/ui-kit';
import { BaseComponent } from "./components/base";
import { AppRouterModule } from "./app.routes";
// import { EagleControlModule } from '../../../shared/lib_build/@eagle-ui-kit';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    EagleControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
