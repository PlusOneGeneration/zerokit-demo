import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from "@angular/router";

import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AuthRoutingModule} from "./auth.routing.module";

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FormsModule,
    CommonModule,
    RouterModule.forRoot([]),
    AuthRoutingModule
  ],
  providers: [AuthService],
  exports: [AuthComponent],
})
export class AuthModule { }
