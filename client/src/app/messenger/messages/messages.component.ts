import {Component, OnInit} from '@angular/core';
import {Message} from "../models/Message";
import {MessageService} from "../services/message.service";
import {RoomService} from "../services/room.service";
import {Room} from "../models/Room";
import {UserService} from "../../user/user.service";

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
              private roomService: RoomService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.loading = true;

    this.roomService.currentRoom$
      .subscribe((room) => {
        if (room) {
          this.room = room;
          this.decryptMessages(room);
        }
      });
  }

  send(): void {
    this.loading = true;

    if (this.room) {
      this.message.room = this.room._id;
      this.message.toUser = this.roomService.roomWithUser$.getValue()._id;

      this.messageService.sendMessage(this.message)
        .then((message) => this.messageService.decryptMessage(message))
        .then((message) => {
          message.fromUser = this.userService.user$.getValue();
          this.messages.push(message as Message)
        })
        .then(() => this.message = new Message())
        .then(() => this.loading = false);
    }
  }

  decryptMessages(room: Room): void {
    this.loading = true;

    this.messageService.decryptMessagesByRoom(room)
      .then((messages) => this.messages = messages)
      .then(() => this.loading = false);
  }

}
