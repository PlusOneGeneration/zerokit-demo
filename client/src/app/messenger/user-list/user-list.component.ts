import {Component, OnInit} from '@angular/core';
import {UserService} from "../../user/user.service";
import {User} from "../../user/User";

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers()
      .then((users) => this.users = users)
      .catch((err) => console.log(err));
  }

}
