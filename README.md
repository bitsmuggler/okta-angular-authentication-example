# okta-angular-authentication-example

[![Netlify Status](https://api.netlify.com/api/v1/badges/d93c0877-214a-4470-b5dd-3742bf79bcbe/deploy-status)](https://app.netlify.com/sites/priceless-jackson-30eb73/deploys)

This example shows [Okta](https://developer.okta.com/) client authentication with Angular using [okta-angular](https://github.com/okta/okta-oidc-js/tree/master/packages/okta-angular).
. It demonstrates the Authentication Code Flow.

* [Live Demo](https://okta-angular-authentication-example.netlify.app)

## Okta Configuration

* Signup and setup your organization
* Create an application (`Application > Add Application > Single Page App`)
    * Base URIs: `http://localhost:4200`
    * Login redirect URIs: `http://localhost:4200/implicit/callback`
    * Logout redirect URI: `http://localhost:4200`

