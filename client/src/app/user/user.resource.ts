import {Injectable} from "@angular/core";
import {Resource, ResourceAction, ResourceParams} from "ngx-resource";
import {RequestMethod} from "@angular/http";
import {ResourceMethod} from 'ngx-resource/src/Interfaces';

@Injectable()
@ResourceParams({
  url: '/api/user'
})
export class UserResource extends Resource {
  @ResourceAction({
    method: RequestMethod.Get,
    path: '/{!userId}',
  })
  getUserById: ResourceMethod<any, any>;

  @ResourceAction({
    method: RequestMethod.Get,
    url: '/api/auth/me',
    // path: '/me',
  })
  getMe: ResourceMethod<any, any>;
}
