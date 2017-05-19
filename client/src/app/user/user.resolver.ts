import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, BehaviorSubject} from "rxjs";

import { UserService } from './user.service';
import { User } from './User';

@Injectable()
export class UserResolver implements Resolve<User> {

  // constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User>|Promise<User>|User {
    // return this.userService.getById(route.params['userId']);
    // return new BehaviorSubject<User>(new User);
    return Promise.resolve(new User());
  }
}
