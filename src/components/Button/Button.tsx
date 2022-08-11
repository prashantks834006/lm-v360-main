import React from 'react';

interface Props {
  children: React.ReactNode;
  primary: boolean;
  label: string;
  size: 'large' | 'small';
}

const Button: React.FC<Props> = () => {
  return <button type="submit">Click me</button>;
};

export default Button;
