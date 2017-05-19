import {Injectable} from "@angular/core";
import {UserResource} from "./user.resource";

@Injectable()
export class UserService {
  constructor(private userResource: UserResource){}

  getUserById(userId: any): Promise<any> {
      return this.userResource.getUserById({userId: userId})
        .$observable
        .toPromise();
  }

}
