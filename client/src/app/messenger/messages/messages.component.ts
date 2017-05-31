import {Component, OnInit} from '@angular/core';
import {Message} from "../models/Message";
import {MessageService} from "../services/message.service";
import {RoomService} from "../services/room.service";
import {Room} from "../models/Room";

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit {
  message: Message = new Message();
  messages: Message[] = [];
  room: Room;
  loading: boolean = false;

  constructor(private messageService: MessageService,
              private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.roomService.currentRoom$
      .subscribe((room) => {
        if (room) {
          this.room = room;
          this.readMessages(room);
        }
      });
  }

  send(): void {
    this.loading = true;

    if (this.room) {
      this.message.room = this.room._id;
      this.message.toUser = this.roomService.roomWithUser$.getValue()._id;

      this.messageService.sendMessage(this.message)
        .then((message) => this.messageService.readMessage(message))
        .then((message) => this.messages.push(message as Message))
        .then(() => this.message = new Message())
        .then(() => this.loading = false);
    }
  }

  readMessages(room: Room): void {
    this.loading = true;

    this.messageService.readMessages(room)
      .then((messages) => this.messages = messages)
      .then(() => this.loading = false);
  }

}
