import {Component} from '@angular/core';
import {ZeroKitService} from "../../zero-kit/zero-kit.service";
import {Router} from "@angular/router";
import {ZeroKitSdkService} from "../../zero-kit/zero-kit-sdk.service";
import {UserService} from "../../user/user.service";

@Component({
  selector: 'sign-out',
  templateUrl: './sign-out.component.html'
})
export class SignOutComponent {
  constructor(private zeroKitService: ZeroKitService,
              private zeroKitSdkService: ZeroKitSdkService,
              private userService: UserService,
              private router: Router) {
  }

  // ngOnInit(): void {
  //   this.zeroKitService.logout()
  //     .then(() => this.router.navigate(['auth', 'sign-in']))
  //     .catch((err) => console.log(err))
  // }

  logout(){
    this.zeroKitService.logout()
      .then(() => this.zeroKitSdkService.logout())
      .then(() => this.userService.user$.next(null))
      .then(() => this.router.navigate(['auth', 'sign-in']))
      .catch((err) => console.log(err))
  }

}
