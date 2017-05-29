import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user/user.service";
import {User} from "../../user/User";
import {RoomService} from "../services/room.service";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService,
              private roomService: RoomService) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .then((users) => this.users = users)
      .catch((err) => console.log(err));
  }

  selectUser(user): void {
    this.roomService.roomWithUser$.next(user);
  }

}
