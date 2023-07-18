/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import IconArrowLeft from '../icons/arrowLeft';
import { Content, Text } from './styles';

const LinkBack = ({ children }: any) => {
  return (
    <Content>
      <IconArrowLeft />
      <Text>{children}</Text>
    </Content>
  );
};

export default LinkBack;
