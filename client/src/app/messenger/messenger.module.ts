import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MessengerRoutingModule} from "./messenger.routing.module";
import {RouterModule} from "@angular/router";

import { MessengerComponent } from './messenger.component';
import {MessageService} from './services/message.service';
import {UserListComponent} from "./user-list/user-list.component";
import {MessageResource} from "./resources/message.resource";
import {RoomService} from "./services/room.service";
import {RoomResource} from "./resources/room.resource";


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
  providers: [
    MessageService,
    MessageResource,
    RoomService,
    RoomResource
  ],
  exports: [MessengerComponent],
  // bootstrap: [MessengerComponent]
})
export class MessengerModule { }
