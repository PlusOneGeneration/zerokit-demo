import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from "rxjs";

import {UserService} from './user.service';
import {User} from './User';

@Injectable()
export class UserResolver implements Resolve<User> {

  constructor(private userService: UserService,
              private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    //TODO @@@dr rethink it
    return this.userService.me()
      .then((user) => {
        if (!user) {
          this.router.navigate(['auth', 'sign-in']);
        }
      })
      .catch((err) => {
        console.error('err', err);
        this.router.navigate(['auth', 'sign-in'])
      });
  }
}
