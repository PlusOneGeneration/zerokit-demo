import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from "@angular/router";

import { ZeroKitService } from './zero-kit.service';
import {ZeroKitSdkService} from "./zero-kit-sdk.service";
import {ZeroKitRoutingModule} from "./zero-kit.routing.module";
import {ZeroKitComponent} from "./zero-kit.component";
import {EncryptComponent} from "./encrypt/encrypt.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {DecryptComponent} from "./decrypt/decrypt.component";


@NgModule({
  declarations: [
    ZeroKitComponent,
    EncryptComponent,
    DecryptComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    CommonModule,
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
