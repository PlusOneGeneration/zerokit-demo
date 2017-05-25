import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ZeroKitService} from "../../zero-kit/zero-kit.service";
import {UserService} from "../../user/user.service";

//TODO @@@dr rename registration to sign up
@Component({
  selector: 'registration',
  templateUrl: './registration.component.html'
})

export class RegistrationComponent implements OnInit {
  user: any = {login: '', password: ''};
  zkitRegisterForm: any;

  @ViewChild('registrationIframe') zkitRegistrationRef: ElementRef;

  constructor(private zeroKitService: ZeroKitService,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.zkitRegisterForm = this.zeroKitService.getRegistrationIframe(this.zkitRegistrationRef.nativeElement);
  }

  register() {
    //TODO @@@dr refact it
    console.log(this.user);
    let user = {email: this.user.username};

    this.zeroKitService.register(user)
      .then((response) => {
        this.zkitRegisterForm.register(response.zkitId, response.registrationData.sessionId)
          .then((succRegResp) => {
            this.zeroKitService.registerApprove({
              userId: response.zkitId,
              validationVerifier: succRegResp.RegValidationVerifier
            })
              .then((success) => {
                // this.userService.getUserById(response.userId)
                //   .then((res) => {
                    // this.zeroKitService.validate({
                    //   validationCode: res.registrationData.validationCode,
                    //   userId: res.zkitId
                    // })
                    //   .then((success) => {
                        console.log('validated');
                        console.log('success', success);
                      // })
                      // .catch((err) => {
                      //   console.log('err +>>', err);
                      // })
                  // })
              })
              .catch((err) => {
                console.log('err +>>', err);
              })

          })


      })
  }

}
