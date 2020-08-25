import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessagelistComponent } from './messagelist/messagelist.component';
import { ProtectedComponent } from './protected/protected.component';
import { LoginComponent } from './login/login.component';
import { OktaAuthModule, OKTA_CONFIG } from '@okta/okta-angular';

const config = {
  issuer: "https://dev-301706.okta.com/oauth2/ausr5mf82ovfbtxo74x6",
  redirectUri: `${window.location.origin}/implicit/callback`,
  clientId: "0oar4tk4jmAdbbpXD4x6",
  pkce: true,
  testing: {
    disableHttpsCheck: true
  }
}

@NgModule({
  declarations: [
    AppComponent,
    MessagelistComponent,
    ProtectedComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OktaAuthModule
  ],
  providers: [{provide: OKTA_CONFIG, useValue: config }],
  bootstrap: [AppComponent]
})
export class AppModule { }
