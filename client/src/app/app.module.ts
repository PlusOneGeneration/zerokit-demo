import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import {ZeroKitModule} from "./zero-kit/zero-kit.module";
import {ResourceModule} from "ngx-resource";
import {RouterModule} from "@angular/router";
import {UserModule} from "./user/user.module";
import {MessengerModule} from "./messenger/messenger.module";
import {UiModule} from "./ui/ui.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ResourceModule.forRoot(),
    RouterModule.forRoot([]),
    AuthModule,
    ZeroKitModule,
    UserModule,
    MessengerModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
