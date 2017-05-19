import {Injectable} from "@angular/core";
import {UserResource} from "./user.resource";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class UserService {
  user$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private userResource: UserResource){}

  getUserById(userId: any): Promise<any> {
      return this.userResource.getUserById({userId: userId})
        .$observable
        .toPromise();
  }

  setUser(user: any) {
    this.user$.next(user);
  }

}
