import {Injectable} from "@angular/core";

@Injectable()
export class ZeroKitSdkService {
  zeroKitSdk: any;

  constructor() {}

  setSdkIFrame(iFrame) {
    this.zeroKitSdk = iFrame;
  }

  getSdkIFrame() {
    return this.zeroKitSdk;
  }

  login(zeroKitUserId){
    console.log(this.zeroKitSdk);
    return this.zeroKitSdk.login(zeroKitUserId);

    // return new Promise((resolve, reject) => {
    //   this.zeroKitSdk.login(zeroKitUserId)
    //     .then((response) => resolve(response))
    //     .catch((err) => reject(err));
    // });
  }

}
