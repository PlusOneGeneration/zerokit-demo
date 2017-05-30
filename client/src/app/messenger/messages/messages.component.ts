import {Component, OnInit} from '@angular/core';
import {Message} from "../models/Message";
import {MessageService} from "../services/message.service";
import {RoomService} from "../services/room.service";

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html'
})
export class MessagesComponent implements OnInit{
  message: Message = new Message();
  messages: Message[] = [];

  constructor(private messageService: MessageService,
              private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.messageService
      .getMessagesByRoom(this.roomService.currentRoom$.getValue())
        .then((messages) => this.messages = messages);
  }

  send(): void {
    this.message.toUser = this.roomService.roomWithUser$.getValue()._id;
    this.message.room = this.roomService.currentRoom$.getValue()._id;

    this.messageService.sendMessage(this.message)
      .then((message) => {
        return message;
      })
      .then((message) => this.messages.push(message as Message))
      .then(() => this.message = new Message());
  }

}
