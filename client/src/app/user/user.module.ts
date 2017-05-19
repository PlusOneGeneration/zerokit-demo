import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { UserRoutingModule} from "./user.routing.module";
import {RouterModule} from "@angular/router";

import { UserComponent } from './user.component';
import { UserService } from './user.service';
import {UserResource} from "./user.resource";


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    UserRoutingModule
  ],
  providers: [
    UserResource,
    UserService
  ],
  exports: [UserComponent],
  // bootstrap: [UserComponent]
})
export class UserModule { }
