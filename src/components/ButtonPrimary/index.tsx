/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Button, Loading, Text } from './styles';

type ButtonPrimaryType = {
  loading?: boolean;
} & TouchableOpacityProps;

const ButtonPrimary = ({ children, loading, ...props }: ButtonPrimaryType) => {
  return (
    <Button {...props}>
      {loading && <Loading disabled={props.disabled} />}
      <Text>{children}</Text>
    </Button>
  );
};

export default ButtonPrimary;
