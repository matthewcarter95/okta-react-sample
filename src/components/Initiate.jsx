import React, { } from 'react';
import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth(config.oidc);


async function Initiate() {
  await oktaAuth.signInWithRedirect();
}

export default Initiate;