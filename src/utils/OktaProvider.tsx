import React, { FC } from 'react';
import { Security } from '@okta/okta-react'; // SecureRoute
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

type Props = {
  children: React.ReactNode;
};

const CLIENT_ID = process.env.REACT_APP_OKTA_CLIENT_ID;
const ISSUER = process.env.REACT_APP_OKTA_ISSUER;
const BASE_URL = process.env.REACT_APP_OKTA_BASE_URL;
const LOGOUT_URL = process.env.REACT_APP_OKTA_LOGOUT_URL;

const oktaAuth = new OktaAuth({
  issuer: ISSUER,
  clientId: CLIENT_ID,
  redirectUri: BASE_URL,
  logoutUrl: LOGOUT_URL,
});

const restoreOriginalUri = async (_oktaAuth: OktaAuth, originalUri: string) => {
  window.location.href = toRelativeUrl(originalUri || '/', window.location.origin);
};

const OktaProvider: FC<Props> = ({ children }) => {
  return (
    <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
      {children}
    </Security>
  );
};

export default OktaProvider;
