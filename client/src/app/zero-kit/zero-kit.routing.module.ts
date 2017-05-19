import { Routes, RouterModule} from "@angular/router";
import { NgModule} from "@angular/core";
import { ZeroKitComponent} from "./zero-kit.component";
import {UserResolver} from "../user/user.resolver";

export const zeroKitRoutes: Routes = [
  {
    path: 'zero-kit',
    component: ZeroKitComponent,
    resolve: {
      user: UserResolver
    },
    children: [
      {
        path: '',
        component: ZeroKitComponent,
        resolve: {

        }
      }
    ]
  }
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
