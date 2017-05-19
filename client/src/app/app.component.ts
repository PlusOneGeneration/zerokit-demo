import {Component, OnInit} from '@angular/core';
import {UserService} from "./user/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  user: any;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.me()
      .then((user) => {
        console.log('user', user);
        this.user = user;
      });
  }
}
