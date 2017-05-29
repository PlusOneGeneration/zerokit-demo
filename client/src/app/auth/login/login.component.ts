import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ZeroKitService} from "../../zero-kit/zero-kit.service";
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
    this.zeroKitService.getUserByName(this.user)
      .then((res) => {
        this.zkitLoginForm.login(res.zkitUserId)
          .then(() => {
          // location.href = "http://localhost:3000/api/auth/login?clientId=s7g8gjvuj7_8XWEmNCNox&reto=http://localhost:3000/auth/sign-up";
            this.zeroKitService.iFrameIdpAuth(this.zkitAuthFrameRef.nativeElement)
              .then((resp) => {
              console.log(resp);
                // this.userService.me();
                // this.router.navigate(['zero-kit']);
              })
              .catch((err) => console.log('err', err));
          });
      });
  }

}
