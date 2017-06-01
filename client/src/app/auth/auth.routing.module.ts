import {AuthComponent} from "./auth.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./registration/sign-up.component";

export const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        component: SignInComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      }
    ]
  }
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
