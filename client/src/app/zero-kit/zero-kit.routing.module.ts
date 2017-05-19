import { Routes, RouterModule} from "@angular/router";
import { NgModule} from "@angular/core";
import { ZeroKitComponent} from "./zero-kit.component";
import {UserResolver} from "../user/user.resolver";
import {EncryptComponent} from "./encrypt/encrypt.component";

export const zeroKitRoutes: Routes = [
  {
    path: 'zero-kit',
    component: ZeroKitComponent,
    resolve: {
      //TODO @@@dr return resolver
      user: UserResolver
    },
    children: [
      {
        path: 'encrypt',
        component: EncryptComponent,
        resolve: {
        }
      },
      {
        path: '',
        component: ZeroKitComponent,
        resolve: {
        }
      },

    ]
  }
  //http://localhost:3000/zero-kit/encrypt
  // ,
  // { path: '',
  //   redirectTo: 'zero-kit',
  //   pathMatch: 'full'
  // },
  // { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forChild(zeroKitRoutes)
  ],
  exports: [RouterModule]
})
export class ZeroKitRoutingModule { }
