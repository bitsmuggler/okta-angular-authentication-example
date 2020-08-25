# okta-angular-authentication-example

[![Netlify Status](https://api.netlify.com/api/v1/badges/d93c0877-214a-4470-b5dd-3742bf79bcbe/deploy-status)](https://app.netlify.com/sites/priceless-jackson-30eb73/deploys)

This example shows [okta](https://developer.okta.com/) client authentication with Angular using [okta-angular](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-angular). It demonstrates the OAuth 2.0 Authentication Code Flow.

* [Live Demo](https://okta-angular-authentication-example.netlify.app)

## Okta Configuration

* Signup and setup your organization
* Create an application (`Application > Add Application > Single Page App`)
    * Base URIs: `http://localhost:4200`
    * Login redirect URIs: `http://localhost:4200/implicit/callback`
    * Logout redirect URI: `http://localhost:4200`
* Add an authorization server (or use the default) (`API > Authorization Servers > Add Authorization Server`)
    * Create an access policy (`<<your created or default authorization server>> > Access Policies >> Add Policy``)
      *  Create a rule that allows you to login to the authorization server using the authorization code grant
* Enabling Self-Registration
    * Go to the classic modem (click top right on `Developer Console` select `classic ui`)
    * Go to `Directory > Self Registration`
      * Enable Self-Service Registration
      * Check Add to Sign-In widget
      
## Start your app

* Install all dependencies
  * `npm install`
* Start the application
  * `ng serve`
