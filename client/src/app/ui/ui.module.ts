import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {RouterModule} from "@angular/router";
import {LoaderComponent} from "./loader/loader.component";

@NgModule({
  declarations: [
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  exports: [
    LoaderComponent
  ],
  // bootstrap: [UiComponent]
})
export class UiModule {
}
