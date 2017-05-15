import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ZeroKitService} from "../../zero-kit/zero-kit.service";
// import { RegistrationService } from "./registration.service";
// import { Registration } from "./Registration";
// import {ActivatedRoute} from "@angular/router";

//TODO @@@dr rename registration to sign up
@Component({
  selector: 'registration',
  templateUrl: './registration.component.html'
})

export class RegistrationComponent implements OnInit {

  title = 'Registration works!';
  user: any = {login: '', password: ''};
  zkitRegisterForm: any;

  @ViewChild('registrationIframe') zkitRegistrationRef: ElementRef;

  constructor(private zeroKitService: ZeroKitService) {
  }

  ngOnInit(): void {
    this.zkitRegisterForm = this.zeroKitService.getRegistrationIframe(this.zkitRegistrationRef.nativeElement);

  }

  register() {
    console.log(this.user);
    // this.user.userName = 'test-user-' + this.user.userName;
    let user = {userName: this.user.username};

    this.zeroKitService.register(user)
      .then((response) => {

        console.log('response', response);
        this.zkitRegisterForm.register(response.userId, response.regSessionId)
          .then((succRegResp) => {
            console.log('succRegResp', succRegResp);
            this.zeroKitService.registerApprove({
              userId: response.userId,
              validationVerifier: succRegResp.RegValidationVerifier
            })
              .then((success) => {
                console.log('validated');
                console.log('success', success);
              })
              .catch((err) => {
                console.log('err +>>', err);
              })

          })


      })
  }

  validate() {
    this.zeroKitService.validate({
      validationCode: "psUFVajj6EkdoAKGZ3EfwxY3T43K4KNH",
      userId: "20170515100254.75s9zhss@s7g8gjvuj7.tresorit.io"
    })
      .then((success) => {
        console.log('validated');
        console.log('success', success);
      })
      .catch((err) => {
        console.log('err +>>', err);
      })

  }

}
