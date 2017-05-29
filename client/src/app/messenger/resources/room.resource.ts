import {Injectable} from "@angular/core";
import {Resource, ResourceAction, ResourceParams} from "ngx-resource";
import {RequestMethod} from "@angular/http";
import {ResourceMethod} from 'ngx-resource/src/Interfaces';

@Injectable()
@ResourceParams({
  url: '/api/rooms'
})
export class RoomResource extends Resource {

  @ResourceAction({
    method: RequestMethod.Get,
    path: '/users/{!userId}'
  })
  getRoomByUser: ResourceMethod<any, any>;

  @ResourceAction({
    method: RequestMethod.Post,
    path: '/'
  })
  createRoom: ResourceMethod<any, any>;
}
