import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ZeroKitService} from "../../zero-kit/zero-kit.service";
// import { LoginService } from "./login.service";
// import { Login } from "./Login";
// import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  title = 'Login works!';
  user: any = {login: '', password: ''};
  zkitLoginForm: any;

  @ViewChild('loginIframe') zkitLoginRef: ElementRef;

  constructor(private zeroKitService: ZeroKitService) {
  }

  ngOnInit(): void {
    this.zkitLoginForm = this.zeroKitService.getLoginIframe(this.zkitLoginRef.nativeElement);

  }

  login() {
    console.log(this.user);
    this.zeroKitService.login(this.user)
      .then((res) => {
        console.log('user', res);
        this.zkitLoginForm.login(res.zkitUserId)
          .then((userId) => {
            console.log('userId', userId);
          })

      });

    // this.zeroKitService.register(this.user)
    //   .then((response) => {
    //
    //     console.log('response', response);
    //     this.zkitLoginForm.register(response.userId, response.regSessionId)
    //       .then((succRegResp) => {
    //         console.log('succRegResp', succRegResp);
    //         this.zeroKitService.registerApprove({
    //           userId: response.userId,
    //           validationVerifier: succRegResp.RegValidationVerifier
    //         })
    //           .then((success) => {
    //             console.log('success', success);
    //           })
    //           .catch((err) => {
    //             console.log('err +>>', err);
    //           })
    //
    //       })
    //   })
  }

}
