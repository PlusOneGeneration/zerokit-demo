import {Injectable} from "@angular/core";
import {Resource, ResourceAction, ResourceParams} from "ngx-resource";
import {RequestMethod} from "@angular/http";
import {ResourceMethod, ResourceMethodStrict} from 'ngx-resource/src/Interfaces';
import {Message} from "../models/Message";

@Injectable()
@ResourceParams({
  url: '/api/rooms/{!roomId}/messages'
})
export class MessageResource extends Resource {
  @ResourceAction({
    method: RequestMethod.Post,
    path: '/'
  })
  createMessage: ResourceMethodStrict<Message, {roomId: string}, Message>;

  @ResourceAction({
    method: RequestMethod.Get,
    isArray: true,
    path: '/'
  })
  getMessagesByRoom: ResourceMethod<any, Message[]>;
}
