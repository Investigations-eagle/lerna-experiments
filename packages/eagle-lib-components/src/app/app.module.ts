import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { EagleControlModule } from 'back-index.ts';

declare const System: any;

export function loadLoginModule() {
  return System
    .import('@eagle/lib-components')
    .then(function(module) {
      return module.LoginModule;
    });
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EagleControlModule,
    RouterModule.forRoot([{
      path: 'login', pathMatch: 'full', loadChildren: loadLoginModule
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
