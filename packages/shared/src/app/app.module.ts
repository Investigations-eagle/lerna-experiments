import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRouterModule } from './app.routes';

// Raw local path
import { EagleControlModule } from './modules/ui-kit/eagle-control/eagle-control.module';
// Available after npm i @eagle/ui-kit
// import { EagleControlModule } from '@eagle/ui-kit';
// Available after build
// import { EagleControlModule } from '../../lib_build/@eagle-ui-kit';

// Shared login
import { LoginSharedModule } from './modules/login-shared';
import { BaseComponent } from './components/base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    LoginSharedModule,
    EagleControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
