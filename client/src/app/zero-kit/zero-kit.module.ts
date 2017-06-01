import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ZeroKitService } from './zero-kit.service';
import {ZeroKitSdkService} from "./zero-kit-sdk.service";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
  ],
  providers: [
    ZeroKitService,
    ZeroKitSdkService
  ],
  exports: [],
  // bootstrap: [ZeroKitComponent]
})
export class ZeroKitModule { }
