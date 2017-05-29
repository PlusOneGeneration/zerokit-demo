import {Injectable} from "@angular/core";
import {Resource, ResourceAction, ResourceParams} from "ngx-resource";
import {RequestMethod} from "@angular/http";
import {ResourceMethod} from 'ngx-resource/src/Interfaces';

@Injectable()
@ResourceParams({
  url: '/api/users'
})
export class UserResource extends Resource {

  @ResourceAction({
    method: RequestMethod.Get,
    path: '/me'
  })
  getMe: ResourceMethod<any, any>;

  @ResourceAction({
    method: RequestMethod.Get,
    isArray: true,
    path: '/'
  })
  getUsers: ResourceMethod<any, any>;

  @ResourceAction({
    method: RequestMethod.Get,
    path: '/{!userId}',
  })
  getUserById: ResourceMethod<any, any>;
}
