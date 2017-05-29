import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable, BehaviorSubject} from "rxjs";

import { MessengerService } from './messenger.service';
import { Messenger } from './Messenger';

@Injectable()
export class MessengerResolver implements Resolve<Messenger> {

  // constructor(private messengerService: MessengerService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Messenger>|Promise<Messenger>|Messenger {
    // return this.messengerService.getById(route.params['messengerId']);
    // return new BehaviorSubject<Messenger>(new Messenger);
    return Promise.resolve(new Messenger());
  }
}
