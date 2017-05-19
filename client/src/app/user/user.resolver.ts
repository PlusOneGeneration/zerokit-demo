import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable, BehaviorSubject} from "rxjs";

import {UserService} from './user.service';
import {User} from './User';

@Injectable()
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.userService.user$
        .subscribe((user) => {
          if (!user) {
            this.router.navigate(['auth', 'sign-in']);
          }
        });
  }
}
