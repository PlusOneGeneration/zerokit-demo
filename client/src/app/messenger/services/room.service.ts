import {Injectable} from "@angular/core";
import {RoomResource} from "../resources/room.resource";
import {Room} from "../models/Room";
import {User} from "../../user/User";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class RoomService {
  currentRoom$: BehaviorSubject<Room> = new BehaviorSubject(null);
  roomWithUser$: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private roomResource: RoomResource) {}

  getRoomByUser(user: User): Promise<Room> {
    return this.roomResource.getRoomByUser({userId: user._id})
      .$observable
      .toPromise();
  }

  createRoom(user: User): Promise<Room> {
    return this.roomResource.createRoom({user: user._id})
      .$observable
      .toPromise();
  }
}
