import {Injectable} from "@angular/core";

declare let zkit_sdk;

@Injectable()
export class ZeroKitSdkService {

  constructor() {
  }

  getRegistrationIframe(el: any): void {
    return zkit_sdk.getRegistrationIframe(el);
  }

  getLoginIframe(el: any): void {
    return zkit_sdk.getLoginIframe(el);
  }

  createTresor(): Promise<string> {
    return new Promise((resolve, reject) => {
      zkit_sdk.createTresor()
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    });
  }

  encrypt(tresorId: string, text: string): Promise<string> {
    return new Promise((resolve, reject) => {
      zkit_sdk.encrypt(tresorId, text)
        .then((encryptedText) => resolve(encryptedText))
        .catch((err) => reject(err));
    });
  }

  decrypt(encryptedText: string): Promise<string> {
    return new Promise((resolve, reject) => {
      zkit_sdk.decrypt(encryptedText)
        .then((decryptedText) => resolve(decryptedText))
        .catch((err) => reject(err));
    });
  }

  shareTresor(tresorId: string, zeroKitUserId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      zkit_sdk.shareTresor(tresorId, zeroKitUserId)
        .then((operationId) => resolve(operationId))
        .catch((err) => reject(err));
    });
  }

  getCurrentUserInSession(): Promise<any> {
    return new Promise((resolve, reject) => {
      zkit_sdk.whoAmI()
        .then((zkitUserId) => resolve(zkitUserId))
        .catch((err) => reject(err));
    });
  }

  logout(): Promise<any> {
    return new Promise((resolve, reject) => {
      zkit_sdk.logout()
        .then(() => resolve())
        .catch((err) => reject(err));
    })
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
