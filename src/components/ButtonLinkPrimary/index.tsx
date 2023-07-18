/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/src/link/Link';

import { Button, Loading, Text } from './styles';

type ButtonLinkPrimaryType = {
  loading?: boolean;
} & LinkProps;

const ButtonLinkPrimary = ({ children, loading, ...props }: ButtonLinkPrimaryType) => {
  return (
    <Link {...props} asChild>
      <Button disabled={props.disabled}>
        {loading && <Loading disabled={props.disabled} />}
        <Text>{children}</Text>
      </Button>
    </Link>
  );
};

export default ButtonLinkPrimary;
