import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ZeroKitService} from "../../zero-kit/zero-kit.service";
import {UserService} from "../../user/user.service";
import {Router} from "@angular/router";
import {ZeroKitSdkService} from "../../zero-kit/zero-kit-sdk.service";

//TODO @@@dr rename login to sign in
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  user: any = {userName: ''};
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

  login() {
    this.loading = true;

    this.zeroKitService.getUserByName(this.user)
      .then((res) => {
        this.zkitLoginForm.login(res.zkitUserId)
          .then(() => {
            this.zeroKitSdkService.iFrameIdpAuth(this.zkitAuthFrameRef.nativeElement)
              .then((resp) => {
                this.userService.me();
                this.loading = false;
                this.router.navigate(['app', 'messenger']);
              })
              .catch((err) => console.log('err', err));
          });
      });
  }

}
