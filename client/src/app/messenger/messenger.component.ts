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
  loading: boolean = false;

  constructor(private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.roomService.roomWithUser$
      .subscribe((user) => {
        if (user) {
          this.roomService.getUserRoom(user)
            .then((room) => {
              this.room = room;
              this.loading = false;
            })
            .catch((err) => this.loading = false)
        }

        this.loading = false;
      });
  }
}
