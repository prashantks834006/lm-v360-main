import { useOktaAuth } from '@okta/okta-react';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: Props) => {
  const { authState, oktaAuth } = useOktaAuth();

  if (authState === null || authState === undefined) {
    return <div> Loading.... </div>;
  }

  if (process.env.NODE_ENV === 'production' && !authState.isAuthenticated) {
    oktaAuth.signInWithRedirect();
    return <div> Loading.... </div>;
  }

  return <div>{children}</div>;
};

export default AuthGuard;
