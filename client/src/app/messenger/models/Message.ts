import {User} from "../../user/User";

export class Message {
  _id?: string;
  fromUser?: User|string;
  toUser: User|string;
  text: string = '';
  room?: string;
  date?: Date;
}
