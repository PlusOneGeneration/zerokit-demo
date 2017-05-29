import { Routes, RouterModule} from "@angular/router";
import { NgModule} from "@angular/core";
import { MessengerComponent} from "./messenger.component";
import { MessengerResolver} from "./messenger.resolver";
import { MessengerCanActivate} from "./messenger.canActivate";
import {UserResolver} from "../user/user.resolver";

export const messengerRoutes: Routes = [
  {
    path: 'messenger',
    component: MessengerComponent,
    data: { title: 'Messenger' },
    canActivate: [MessengerCanActivate],
    resolve: {
      user: UserResolver
    },
    // children: [
    //   {
    //     path: '',
    //     component: MessengerComponent
    //   },
    // ]
  }
  // ,
  // { path: '',
  //   redirectTo: 'messenger',
  //   pathMatch: 'full'
  // },
  // { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forChild(messengerRoutes)
  ],
  providers: [MessengerResolver, MessengerCanActivate],
  exports: [RouterModule]
})
export class MessengerRoutingModule { }
