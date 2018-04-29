import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { EagleControlModule } from 'eagle-lib-components';
import { EGLogger } from 'eagle-lib-scripts';

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
export class AppModule {
  constructor() {
    const log = EGLogger.getLogger('Insights AppModule');
    log((this.constructor as any).__annotations__);
  }
}
