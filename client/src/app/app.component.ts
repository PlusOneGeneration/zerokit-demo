import {Component, OnInit} from '@angular/core';
import {UserService} from "./user/user.service";
import {User} from "./user/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.user$
      .subscribe((user) => this.user = user);
  }
}
