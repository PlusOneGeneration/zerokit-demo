import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {authRoutes} from "./auth/auth.routing.module";
import {messengerRoutes} from "./messenger/messenger.routing.module";

const routes: Routes = [
  {path: '', redirectTo: 'app/messenger', pathMatch: 'full'},
  {path: 'app', redirectTo: 'app/messenger', pathMatch: 'full'},
  ...authRoutes,
  {
    path: 'app',
    children: [
      ...messengerRoutes
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
