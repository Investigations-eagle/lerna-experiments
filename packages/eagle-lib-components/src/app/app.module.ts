import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EagleControlModule, LoginModule } from 'eagle-lib-components';
import { BaseComponent } from './base/base.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: '', component: BaseComponent
    }]),
    EagleControlModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
