import {Injectable} from '@angular/core';
import {RequestMethod} from '@angular/http';
import {Resource, ResourceParams, ResourceAction} from 'ngx-resource';
import {ResourceMethod} from 'ngx-resource/src/Interfaces';

@Injectable()
@ResourceParams({
  url: '/api/user/zerokit'
})
export class ZeroKitResource extends Resource {

  @ResourceAction({
    method: RequestMethod.Post,
    // url: '/api/user/init-user-registration'
    url: '/api/zerokit/init-user-registration'
  })
  register: ResourceMethod<any, any>;

  @ResourceAction({
    method: RequestMethod.Post,
    url: '/api/zerokit/finish-user-registration'
  })
  finishRegistration: ResourceMethod<any, any>;

  @ResourceAction({
    method: RequestMethod.Post,
    url: '/api/user/validate-user'
  })
  validateUser: ResourceMethod<any, any>;

  @ResourceAction({
    method: RequestMethod.Get,
    url: '/api/zerokit/get-user-id'
  })
  getUserByName: ResourceMethod<any, any>;

  @ResourceAction({
    method: RequestMethod.Post,
    url: '/api/zerokit/tresor',
  })
  createTresor: ResourceMethod<any, any>;

  @ResourceAction({
    method: RequestMethod.Get,
    url: '/api/auth/logout',
  })
  logout: ResourceMethod<any, any>;

  @ResourceAction({
    method: RequestMethod.Post,
    url: '/api/zerokit/tresor/invite/approve',
  })
  approveInviteToTresor: ResourceMethod<any, any>;
}
