import { Component } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isAuthenticated: boolean;

  title = 'okta-frontend-integration';

  constructor(public oktaAuth: OktaAuthService, public router: Router) {
    this.oktaAuth.$authenticationState.subscribe((isAuthenticated:boolean) => this.isAuthenticated = isAuthenticated);
  }

  async ngOnInit() {
      // Get the authentication state for immediate use
      this.isAuthenticated = await this.oktaAuth.isAuthenticated();
  }

  login() {
    this.oktaAuth.loginRedirect("/profile");
  }

  async logout() {
    await this.oktaAuth.logout();
    this.router.navigateByUrl('/');
  }
}
