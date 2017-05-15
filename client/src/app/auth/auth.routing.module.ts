import {AuthComponent} from "./auth.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";

export const authRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    data: {title: 'Auth'},
    // canActivate: [AuthCanActivate],
    children: [
      {
        path: 'sign-in',
        component: LoginComponent,
        resolve: {
          // auth: AuthResolver
        }
      },
      {
        path: 'sign-up',
        component: RegistrationComponent,
        resolve: {
          // auth: AuthResolver
        }
      }
    ]
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  // providers: [AuthResolver, AuthCanActivate],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
