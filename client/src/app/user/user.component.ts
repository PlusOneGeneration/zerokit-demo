import {Component} from '@angular/core';
// import { UserService } from "./user.service";
// import { User } from "./User";
// import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  title = 'User works!';
  // constructor(private userService: UserService, private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.route.data
  //   .map((data: { user: User }) => data.user)
  //   .subscribe((user: User) => console.log(user));
  // }

}
