import {Injectable} from "@angular/core";

declare let zkit_sdk;

@Injectable()
export class ZeroKitSdkService {

  constructor() {
  }

  // setSdkIFrame(iFrame) {
  //   this.zeroKitSdk = iFrame;
  // }
  //
  // getSdkIFrame() {
  //   return this.zeroKitSdk;
  // }

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

}
