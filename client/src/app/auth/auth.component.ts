import {Component} from '@angular/core';
// import { AuthService } from "./auth.service";
// import { Auth } from "./Auth";
// import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  title = 'Auth works!';
  // constructor(private authService: AuthService, private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.route.data
  //   .map((data: { auth: Auth }) => data.auth)
  //   .subscribe((auth: Auth) => console.log(auth));
  // }

}
