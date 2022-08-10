import React from 'react';

type Props = {
  children: React.ReactNode;
};

function AuthGuard({ children }: Props) {
  return <div>{children}</div>;
}

export default AuthGuard;
