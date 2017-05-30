import {Injectable} from "@angular/core";
import {UserResource} from "./user.resource";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {User} from "./User";

@Injectable()
export class UserService {
  user$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private userResource: UserResource) {}

  getUserById(userId: any): Promise<User> {
    return this.userResource.getUserById({userId: userId})
      .$observable
      .toPromise();
  }

  getUsers(): Promise<User[]> {
    return this.userResource.getUsers()
      .$observable
      .toPromise();
  }

  me(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.user$.getValue()) {
        this.getMe().subscribe(
          (user) => {
            this.user$.next(user);
            resolve(user);
          },
          (err) => reject(err)
        );
      } else {
        resolve(this.user$.getValue());
      }
    });
  }

  getMe(): Observable<any> {
    return this.userResource.getMe()
      .$observable
  }

  setUser(user: any) {
    this.user$.next(user);
  }

}
