import {Injectable} from "@angular/core";
import {UserResource} from "./user.resource";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {User} from "./User";
import {ZeroKitSdkService} from "../zero-kit/zero-kit-sdk.service";

@Injectable()
export class UserService {
  user$: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor(private userResource: UserResource,
              private zeroKitSdkService: ZeroKitSdkService) {
  }

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
            return this.zeroKitSdkService.getCurrentUserInSession()
              .then((zkitUserId) => {
                if (user.zkitId == zkitUserId) {
                  this.user$.next(user);
                  resolve(user);
                }
                reject();
              })
              .catch((err) => reject(err));
          },
          (err) => reject(err)
        );
      } else {
        return this.zeroKitSdkService.getCurrentUserInSession()
          .then((zkitUserId) => {
            const user = this.user$.getValue();

            if (user.zkitId == zkitUserId) {
              this.user$.next(user);
              resolve(user);
            }

            reject();
          })
          .catch((err) => reject(err));
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
