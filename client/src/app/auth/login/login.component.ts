import {Component} from '@angular/core';
// import { LoginService } from "./login.service";
// import { Login } from "./Login";
// import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'Login works!';
  // constructor(private loginService: LoginService, private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.route.data
  //   .map((data: { login: Login }) => data.login)
  //   .subscribe((login: Login) => console.log(login));
  // }

}
