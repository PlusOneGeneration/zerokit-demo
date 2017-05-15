import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ZeroKitService} from "../../zero-kit/zero-kit.service";
// import { LoginService } from "./login.service";
// import { Login } from "./Login";
// import {ActivatedRoute} from "@angular/router";

//TODO @@@dr renamge login to sign in
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
})

export class LoginComponent implements OnInit {
  title = 'Login works!';
  user: any = {username: ''};
  zkitLoginForm: any;

  @ViewChild('loginIframe') zkitLoginRef: ElementRef;

  constructor(private zeroKitService: ZeroKitService) {
  }

  ngOnInit(): void {
    this.zkitLoginForm = this.zeroKitService.getLoginIframe(this.zkitLoginRef.nativeElement);

  }

  login() {
    // console.log(this.user);
    let user = {userName: this.user.username};

    this.zeroKitService.login(user)
      .then((res) => {
        console.log('user', res);
        this.zkitLoginForm.login(res.zkitUserId)
          .then((userId) => {
            console.log('userId', userId);
          })

      });
  }

  idpLogin() {
    var iframe = document.createElement("iframe");
    iframe.className = "hidden";
    document.body.appendChild(iframe);

    iframe.onload = function () {
      var iframeLocation;
      try {
        iframeLocation = iframe.contentWindow.location;
        console.log('iframeLocation', iframeLocation);
        if (iframeLocation.origin !== window.location.origin) return false; // This will throw anyway...
      } catch (ex) {
        console.log('err', ex);
        return false;
      }
      // We got back to the backend the same origin
      if (iframeLocation.pathname === location.pathname) {
        // Got back to the callback
        document.body.removeChild(iframe);
        // If the url contains error the login was unsuccessful
        if (iframeLocation.hash && iframeLocation.hash.indexOf("error") !== -1){
          console.error(iframeLocation.search.substr(1));
          // return onError(iframeLocation.search.substr(1));
          return ;

        }

        // Success. The backend should've set a session cookie that it will use to authenticate every call
        console.log('success');
      }
    };

    // Set the iframe to the idp login url on the backend
    iframe.src =  "http://localhost:3000/api/auth/login?clientId=" + "s7g8gjvuj7_8XWEmNCNox" + "&reto=" + "http://localhost:3000/";

    console.log('iframe', iframe);
  }

}
