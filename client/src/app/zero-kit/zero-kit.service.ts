import {Injectable} from "@angular/core";
import {ZeroKitResource} from "./zero-kit.resource";

declare let zkit_sdk;

@Injectable()
export class ZeroKitService {
  constructor(private zeroKitResource: ZeroKitResource) {}

  getRegistrationIframe(el: any): void {
    return zkit_sdk.getRegistrationIframe(el);
  }

  getLoginIframe(el: any): void {
    return zkit_sdk.getLoginIframe(el);
  }

  register(user: any): Promise <any> {
    return this.zeroKitResource.register(user)
      .$observable
      .toPromise();
  }

  registerApprove(data: any): Promise <any> {
    return this.zeroKitResource.finishRegistration(data)
      .$observable
      .toPromise();
  }

  login(user: any): Promise <any> {
    return this.zeroKitResource.login(user)
      .$observable
      .toPromise();
  }


}
