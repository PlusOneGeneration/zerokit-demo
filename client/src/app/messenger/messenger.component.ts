import {Component} from '@angular/core';
import {RoomService} from "./services/room.service";
import {User} from "../user/User";
import {Room} from "./models/Room";
// import { MessengerService } from "./messenger.service";
// import { Messenger } from "./Messenger";
// import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'messenger',
  templateUrl: './messenger.component.html'
})
export class MessengerComponent {
  room: Room;

  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.roomService.roomWithUser$
      .subscribe((user) => {
        console.log('user with =>>', user);

        if (user) {
          this.openRoom(user)
            .then((room) => {
              if (!room) {
                return this.roomService.createRoom(user)
                  .then((createdRoom) => {
                    this.room = createdRoom;
                  });
              }

              this.room = room;
              console.log('room', this.room);
            });
        }
      });
  }

  openRoom(user: User): Promise<Room> {
    return new Promise((resolve, reject) => {
      this.roomService.getRoomByUser(user)
        .then((room) => {
          console.log('open room', room);
          this.room = room;
          this.roomService.currentRoom$.next(room);
          resolve(room);
        })
        .catch((err) => {
          console.log('err', err);
          if (err.status === 404) {
            return resolve(null);
          }

          reject(err);
        });
    })

  }
}
