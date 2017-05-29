import {Injectable} from "@angular/core";
import {ZeroKitResource} from "./zero-kit.resource";

declare let zkit_sdk;

@Injectable()
export class ZeroKitService {
  constructor(private zeroKitResource: ZeroKitResource) {
  }

  getRegistrationIframe(el: any): void {
    return zkit_sdk.getRegistrationIframe(el);
  }

  getLoginIframe(el: any): void {
    return zkit_sdk.getLoginIframe(el);
  }

  register(user: any): Promise<any> {
    return this.zeroKitResource.register(user)
      .$observable
      .toPromise();
  }

  validate(user: any): Promise<any> {
    return this.zeroKitResource.validateUser(user)
      .$observable
      .toPromise();
  }

  registerApprove(data: any): Promise<any> {
    return this.zeroKitResource.finishRegistration(data)
      .$observable
      .toPromise();
  }

  getUserByName(user: any): Promise<any> {
    return this.zeroKitResource.getUserByName(user)
      .$observable
      .toPromise();
  }

  createTresor(tresorId: string): Promise<any> {
    return this.zeroKitResource.createTresor({tresorId: tresorId})
      .$observable
      .toPromise();
  }

  approveInviteToTresor(operationId: string): Promise<any> {
    return this.zeroKitResource.approveInviteToTresor({operationId: operationId})
      .$observable
      .toPromise();
  }

  logout(): Promise<any> {
    return this.zeroKitResource.logout()
      .$observable
      .toPromise();
  }

  iFrameIdpAuth(element, path = ''): Promise<any> {
    return new Promise((resolve, reject) => {
      let iframe = document.createElement("iframe");
      iframe.className = "hidden";
      element.appendChild(iframe);

      iframe.onload = function () {
        try {
          if (iframe.contentWindow
            && iframe.contentWindow.location
            && iframe.contentWindow.location.origin == window.location.origin) {
            resolve(iframe.contentWindow.location.href);
          }
        } catch (ex) {
        }
      };
      //TODO @@@dr add config
      // Set the iframe to the idp login url on the backend
      iframe.src = window.location.origin + "/api/auth/login";

      console.log('iframe', iframe);
    });
  }


}
