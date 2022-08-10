import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Button = (): React.ReactElement<Props> => {
  return <button type="submit">Click me</button>;
};

export default Button;
