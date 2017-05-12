import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {ZeroKitModule} from "./zero-kit/zero-kit.module";
import {ResourceModule} from "ngx-resource";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ResourceModule.forRoot(),
    AuthModule,
    ZeroKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
