import {AuthComponent} from "./auth.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";

export const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'sign-in',
        component: LoginComponent,
      },
      {
        path: 'sign-up',
        component: RegistrationComponent
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
