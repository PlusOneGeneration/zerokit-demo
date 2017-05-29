import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MessengerRoutingModule} from "./messenger.routing.module";
import {RouterModule} from "@angular/router";

import { MessengerComponent } from './messenger.component';
import { MessengerService } from './messenger.service';
import {UserListComponent} from "./user-list/user-list.component";


@NgModule({
  declarations: [
    MessengerComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    MessengerRoutingModule
  ],
  providers: [MessengerService],
  exports: [MessengerComponent],
  // bootstrap: [MessengerComponent]
})
export class MessengerModule { }
