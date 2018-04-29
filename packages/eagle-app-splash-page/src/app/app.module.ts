import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppsListComponent } from './apps-list/apps-list.component';
import { SplashScreenComponent } from './splash-screen/splash-screen.component';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.routes';
import { LoginModule } from 'eagle-lib-components';

@NgModule({
  declarations: [
    AppComponent, AppsListComponent, SplashScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
