import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ZeroKitService} from "../../zero-kit/zero-kit.service";
import {ZeroKitSdkService} from "../../zero-kit/zero-kit-sdk.service";
import {UserService} from "../../user/user.service";
import {Router} from "@angular/router";

//TODO @@@dr rename login to sign in
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  user: any = {userName: ''};
  zkitLoginForm: any;

  @ViewChild('loginIframe') zkitLoginRef: ElementRef;
  @ViewChild('zkitAuthFrame') zkitAuthFrameRef: ElementRef;

  constructor(private zeroKitService: ZeroKitService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.zkitLoginForm = this.zeroKitService.getLoginIframe(this.zkitLoginRef.nativeElement);
  }

  login() {
    this.zeroKitService.login(this.user)
      .then((res) => {
        console.log('user', res);
        this.zkitLoginForm.login(res.zkitUserId)
          .then(() => {
            this.zeroKitService.iFrameIdpAuth(this.zkitAuthFrameRef.nativeElement)
              .then((resp) => {
                this.userService.setUser(res);
                console.log('resp', resp);
                console.log('auth idp success');
                this.router.navigate(['zero-kit']);

              })
              .catch((err) => console.log('err', err));
          })

      });
  }

}
