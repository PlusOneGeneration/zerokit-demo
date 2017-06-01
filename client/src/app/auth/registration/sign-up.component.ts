import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ZeroKitService} from "../../zero-kit/zero-kit.service";
import {Router} from "@angular/router";
import {ZeroKitSdkService} from "../../zero-kit/zero-kit-sdk.service";
import {User} from "../../user/User";

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html'
})

export class SignUpComponent implements OnInit {
  user: User = new User;
  zkitRegisterForm: any;
  loading: boolean = false;

  @ViewChild('registrationIframe') zkitRegistrationRef: ElementRef;

  constructor(private zeroKitService: ZeroKitService,
              private zeroKitSdkService: ZeroKitSdkService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.zkitRegisterForm = this.zeroKitSdkService.getRegistrationIframe(this.zkitRegistrationRef.nativeElement);
  }

  signUp(): void {
    this.loading = true;

    this.zeroKitService.register(this.user)
      .then((user) => {
        return this.zkitRegisterForm.register(user.zkitId, user.registrationData.sessionId)
          .then((succRegResp) => ({zkitId: user.zkitId, validationVerifier: succRegResp.RegValidationVerifier}))
          .then((zkitData) => this.zeroKitService.registerApprove(zkitData))
          .then(() => this.loading = false)
          .then(() => this.router.navigate(['auth', 'sign-in']))
      })
      .catch((err) => {
        console.error('err +>>', err);
        this.loading = false;
      })
  }

}
