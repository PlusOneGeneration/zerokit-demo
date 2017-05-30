import {Injectable} from "@angular/core";
import {MessageResource} from "../resources/message.resource";
import {Message} from "../models/Message";
import {Room} from "../models/Room";
import {ZeroKitService} from "../../zero-kit/zero-kit.service";
import {ZeroKitSdkService} from "../../zero-kit/zero-kit-sdk.service";
import {UserService} from "../../user/user.service";

@Injectable()
export class MessageService {
  constructor(private messageResource: MessageResource,
              private zeroKitService: ZeroKitService,
              private zeroKitSdkService: ZeroKitSdkService,
              private userService: UserService) {
  }

  sendMessage(message: Message): Promise<Message> {
    return this.shareMessageAccess(message)
      .then((message) => this.zeroKitSdkService.encrypt(message.tresorId, message.text))
      .then((encryptedText) => {
        message.text = encryptedText as string;
        return message;
      })
      .then((message) => this.createMessage(message));
  }

  createMessage(message: Message): Promise<Message> {
    return this.messageResource.createMessage(message, {roomId: message.room})
      .$observable
      .toPromise();
  }

  getMessagesByRoom(room: Room): Promise<Message[]> {
    return this.messageResource.getMessagesByRoom({roomId: room._id})
      .$observable
      .toPromise();
  }

  shareMessageAccess(message: Message): Promise<any> {
    return this.zeroKitSdkService.createTresor()
      .then((tresorId) => {
        return this.zeroKitService.createTresor(tresorId)

          .then(() => this.userService.getUserById(message.toUser))
          .then((recipientUser) => this.zeroKitSdkService.shareTresor(tresorId, recipientUser.zkitId))
          .then((operationId) => this.zeroKitService.approveInviteToTresor(operationId))
          .then(() => message.tresorId = tresorId)
          .then(() => message)
      });
  }

  readMessages(room: Room): Promise<Message[]> {
    return this.getMessagesByRoom(room)
      .then((messages) => {
        let promises = [];
        promises = messages.map((message) => this.readMessage(message));

        return Promise.all(promises);
      });
  }

  readMessage(message: Message): Promise<Message> {
    return this.zeroKitSdkService.decrypt(message.text)
      .then((decryptedText) => message.decryptedText = decryptedText)
      .then(() => message);
  }
}
