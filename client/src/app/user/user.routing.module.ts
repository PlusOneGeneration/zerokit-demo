import { Routes, RouterModule} from "@angular/router";
import { NgModule} from "@angular/core";
import { UserComponent} from "./user.component";
import { UserResolver} from "./user.resolver";
import { UserCanActivate} from "./user.canActivate";

export const userRoutes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    data: { title: 'User' },
    canActivate: [UserCanActivate],
    children: [
      // {
      //   path: ':userId',
      //   component: UserComponent,
      //   resolve: {
      //     user: UserResolver
      //   }
      // }
    ]
  }
  // ,
  // { path: '',
  //   redirectTo: 'user',
  //   pathMatch: 'full'
  // },
  // { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  providers: [UserResolver, UserCanActivate],
  exports: [RouterModule]
})
export class UserRoutingModule { }
