import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from "@angular/router";

import { UserService } from './user.service';
import {UserResource} from "./user.resource";
import {UserResolver} from "./user.resolver";


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    UserResource,
    UserService,
    UserResolver
  ],
  exports: [],
  // bootstrap: [UserComponent]
})
export class UserModule { }
