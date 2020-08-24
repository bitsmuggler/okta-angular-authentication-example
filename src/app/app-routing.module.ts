import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { LoginComponent } from './login/login.component';
import { ProtectedComponent } from './protected/protected.component';

const routes: Routes = [{
  path: 'implicit/callback',
  component: OktaCallbackComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'protected',
  component: ProtectedComponent,
  canActivate: [ OktaAuthGuard ],
  data: {
    onAuthRequired
  }
}];

export function onAuthRequired({ oktaAuth, router }) {
  router.navigate(['/login']);
}


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
