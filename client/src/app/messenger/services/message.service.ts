import {Injectable} from "@angular/core";
import {MessageResource} from "../resources/message.resource";
import {Message} from "../models/Message";
import {Room} from "../models/Room";

@Injectable()
export class MessageService {
  constructor(private messageResource: MessageResource) {}

  sendMessage(message: Message): Promise<Message> {

    return this.messageResource.createMessage(message, {roomId: message.room})
      .$observable
      .toPromise();
  }

  getMessagesByRoom(room: Room): Promise<Message[]> {
    return this.messageResource.getMessagesByRoom({roomId: room._id})
      .$observable
      .toPromise();
  }
}
