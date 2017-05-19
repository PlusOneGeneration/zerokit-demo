import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from "@angular/router";

import { ZeroKitService } from './zero-kit.service';
import {ZeroKitSdkService} from "./zero-kit-sdk.service";
import {ZeroKitRoutingModule} from "./zero-kit.routing.module";
import {ZeroKitComponent} from "./zero-kit.component";


@NgModule({
  declarations: [
    ZeroKitComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    ZeroKitRoutingModule
  ],
  providers: [
    ZeroKitService,
    ZeroKitSdkService
  ],
  exports: [],
  // bootstrap: [ZeroKitComponent]
})
export class ZeroKitModule { }
