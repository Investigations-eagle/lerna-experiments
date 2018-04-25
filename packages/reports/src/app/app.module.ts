import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { sharedLib, sharedLib2, sharedLib3 } from 'eagle-lib-ui';

console.log(sharedLib());
console.log(sharedLib2());
console.log(sharedLib3());

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
