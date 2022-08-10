import React from 'react';
import { FCC } from '../types/react';

type Props = {};

const GuestGuard: FCC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default GuestGuard;
