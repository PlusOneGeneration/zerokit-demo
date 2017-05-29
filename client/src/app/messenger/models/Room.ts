import {User} from "../../user/User";
import {Message} from "./Message";
export class Room {
  _id?: string;
  users: User[];
  messages?: Message[];
}
