import {Injectable} from "@angular/core";
import {UserResource} from "./user.resource";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UserService {
  user$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private userResource: UserResource){
    //TODO @@@dr remove it
    const user = {zkitUserId: "20170519093331.lbekfoxt@s7g8gjvuj7.tresorit.io"};
    this.user$.next(user);
  }

  getUserById(userId: any): Promise<any> {
      return this.userResource.getUserById({userId: userId})
        .$observable
        .toPromise();
  }

  setUser(user: any) {
    this.user$.next(user);
  }

}
