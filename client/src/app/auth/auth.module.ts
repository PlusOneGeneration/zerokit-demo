import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from "@angular/router";

import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./registration/sign-up.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth.routing.module";
import {SignOutComponent} from "./sign-out/sign-out.component";
import {UiModule} from "../ui/ui.module";

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    SignOutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    CommonModule,
    RouterModule.forRoot([]),
    AuthRoutingModule,
    UiModule
  ],
  providers: [AuthService],
  exports: [
    AuthComponent,
    SignOutComponent
  ],
})
export class AuthModule { }
