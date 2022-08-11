import React from 'react';

type Props = {
  children: React.ReactNode;
};

const GuestGuard = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default GuestGuard;
