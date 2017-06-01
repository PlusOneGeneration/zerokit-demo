import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ZeroKitService} from "../../zero-kit/zero-kit.service";
import {UserService} from "../../user/user.service";
import {Router} from "@angular/router";
import {ZeroKitSdkService} from "../../zero-kit/zero-kit-sdk.service";
import {User} from "../../user/User";

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
})

export class SignInComponent implements OnInit {
  user: User = new User;
  zkitLoginForm: any;
  loading: boolean = false;

  @ViewChild('loginIframe') zkitLoginRef: ElementRef;
  @ViewChild('zkitAuthFrame') zkitAuthFrameRef: ElementRef;

  constructor(private zeroKitService: ZeroKitService,
              private zeroKitSdkService: ZeroKitSdkService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.zkitLoginForm = this.zeroKitSdkService.getLoginIframe(this.zkitLoginRef.nativeElement);
  }

  signIn() {
    this.loading = true;

    this.zeroKitService.getUserByName(this.user)
      .then((response) => this.zkitLoginForm.login(response.zkitUserId))
      .then(() => this.zeroKitSdkService.iFrameIdpAuth(this.zkitAuthFrameRef.nativeElement))
      .then(() => {
        this.userService.me();
        this.loading = false;
        this.router.navigate(['app', 'messenger']);
      })
      .catch((err) => console.error(err));
  }

}
