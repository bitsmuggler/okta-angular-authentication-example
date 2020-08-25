# okta-angular-authentication-example

This example shows [Okta](https://developer.okta.com/) client authentication with Angular. It demonstrates the Authentication Code Flow.

[Using okta-angular](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-angular)


## Okta Configuration

* Signup and setup your organization
* Create an application (`Application > Add Application > Single Page App`)
    * Base URIs: `http://localhost:4200`
    * Login redirect URIs: `http://localhost:4200/implicit/callback`
    * Logout redirect URI: `http://localhost:4200`