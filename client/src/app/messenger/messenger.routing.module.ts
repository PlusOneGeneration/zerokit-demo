import { Routes, RouterModule} from "@angular/router";
import { NgModule} from "@angular/core";
import { MessengerComponent} from "./messenger.component";
import {UserResolver} from "../user/user.resolver";

export const messengerRoutes: Routes = [
  {
    path: 'messenger',
    component: MessengerComponent,
    canActivate: [],
    resolve: {
      user: UserResolver
    },
  },
];

@NgModule({
  imports: [],
  providers: [],
  exports: [RouterModule]
})
export class MessengerRoutingModule { }
