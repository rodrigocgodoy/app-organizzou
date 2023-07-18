/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { Button, Text } from './styles';

const Link = ({ children, ...props }: any) => {
  return (
    <Button {...props} asChild>
      <Text>{children}</Text>
    </Button>
  );
};

export default Link;
