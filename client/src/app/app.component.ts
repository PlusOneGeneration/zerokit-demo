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
    this.userService.user$
      .subscribe((user) => this.user = user);
  }
}
