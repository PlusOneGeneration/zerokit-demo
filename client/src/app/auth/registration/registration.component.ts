import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ZeroKitService} from "../../zero-kit/zero-kit.service";
import {UserService} from "../../user/user.service";
import {Router} from "@angular/router";

//TODO @@@dr rename registration to sign up
@Component({
  selector: 'registration',
  templateUrl: './registration.component.html'
})

export class RegistrationComponent implements OnInit {
  user: any = {login: '', password: ''};
  zkitRegisterForm: any;
  loading: boolean = false;

  @ViewChild('registrationIframe') zkitRegistrationRef: ElementRef;

  constructor(private zeroKitService: ZeroKitService,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.zkitRegisterForm = this.zeroKitService.getRegistrationIframe(this.zkitRegistrationRef.nativeElement);
  }

  register() {
    this.loading = true;
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
                console.log('validated');
                console.log('success', success);
                this.loading = false;

                this.router.navigate(['auth', 'sign-in']);
              })
              .catch((err) => {
                console.log('err +>>', err);
                this.loading = false;
              })

          })


      })
  }

}
