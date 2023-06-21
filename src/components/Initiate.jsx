import React, { } from 'react';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: process.env.REACT_APP_OKTA_ISSUER,
  clientId: process.env.REACT_APP_OKTA_CLIENT_ID,
  redirectUri:
    process.env.REACT_APP_OKTA_BASE_REDIRECT_URI + "/callback"
});


async function Initiate() {
  await oktaAuth.signInWithRedirect();
}

export default Initiate;