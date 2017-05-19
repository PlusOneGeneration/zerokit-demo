import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ZeroKitService} from "../../zero-kit/zero-kit.service";
import {ZeroKitSdkService} from "../../zero-kit/zero-kit-sdk.service";

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

  constructor(private zeroKitService: ZeroKitService) {
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
              console.log('resp', resp);
              console.log('auth idp success');
            })
              .catch((err) => console.log('err', err));
          })

      });
  }

}
