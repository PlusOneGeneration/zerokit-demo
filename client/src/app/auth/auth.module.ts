import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AuthRoutingModule} from "./auth.routing.module";
import {RouterModule} from "@angular/router";

import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";


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
    CommonModule
  ],
  providers: [AuthService],
  exports: [AuthComponent],
  // bootstrap: [AuthComponent]
})
export class AuthModule { }
