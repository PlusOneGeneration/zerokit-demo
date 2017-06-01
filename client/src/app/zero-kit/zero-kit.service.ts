import {Injectable} from "@angular/core";
import {ZeroKitResource} from "./zero-kit.resource";
import {User} from "../user/User";

@Injectable()
export class ZeroKitService {
  constructor(private zeroKitResource: ZeroKitResource) {
  }

  register(user: User): Promise<any> {
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




}
