import {Injectable} from "@angular/core";
import {RoomResource} from "../resources/room.resource";
import {Room} from "../models/Room";
import {User} from "../../user/User";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class RoomService {
  currentRoom$: BehaviorSubject<Room> = new BehaviorSubject(null);
  roomWithUser$: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private roomResource: RoomResource) {
  }

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

  openRoom(user: User): Promise<Room> {
    return new Promise((resolve, reject) => {
      this.getRoomByUser(user)
        .then((room) => {
          this.currentRoom$.next(room);
          resolve(room);
        })
        .catch((err) => {
          if (err.status === 404) {
            return resolve(null);
          }

          reject(err);
        });
    });
  }

  getUserRoom(user: User): Promise<Room> {
    return new Promise((resolve, reject) => {
      this.openRoom(user)
        .then((room) => {
          if (!room) {
            return this.createRoom(user)
              .then((createdRoom) => {
                this.currentRoom$.next(createdRoom);
                resolve(createdRoom);
              });
          }

          resolve(room);
        })
        .catch((err) => reject(err));
    });
  }

}
