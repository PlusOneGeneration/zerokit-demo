import {User} from "../../user/User";

export class Message {
  _id?: string;
  fromUser?: User|string;
  toUser: User|string;
  text: string = '';
  decryptedText?: string;
  room?: string;
  tresorId: string;
  date?: Date;
}
