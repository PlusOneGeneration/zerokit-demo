import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from "@angular/router";

import { ZeroKitService } from './zero-kit.service';


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
  ],
  providers: [ZeroKitService],
  exports: [],
  // bootstrap: [ZeroKitComponent]
})
export class ZeroKitModule { }
