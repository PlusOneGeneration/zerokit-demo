import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {authRoutes} from "./auth/auth.routing.module";
import {zeroKitRoutes} from "./zero-kit/zero-kit.routing.module";
// import {inviteRoutes} from "./invite/invite-routing.module";

const routes: Routes = [
  {path: '', redirectTo: 'app', pathMatch: 'full'},
  ...authRoutes,
  ...zeroKitRoutes,
  {
    path: 'app',
    children: [
      // ...applicationRoutes
    ]
  },
  {path: '**', redirectTo: 'app', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
