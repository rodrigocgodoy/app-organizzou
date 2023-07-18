/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Button, Text } from './styles';

const ButtonSecundary = ({ children, ...props }: any) => {
  return (
    <Button {...props}>
      <Text>{children}</Text>
    </Button>
  );
};

export default ButtonSecundary;
