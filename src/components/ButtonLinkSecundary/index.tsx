/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Link } from 'expo-router';
import { LinkProps } from 'expo-router/src/link/Link';

import { Button, Loading, Text } from './styles';

type ButtonLinkSecundaryType = {
  loading?: boolean;
} & LinkProps;

const ButtonLinkSecundary = ({ children, loading, ...props }: ButtonLinkSecundaryType) => {
  return (
    <Link {...props} asChild>
      <Button disabled={props.disabled}>
        {loading && <Loading disabled={props.disabled} />}
        <Text>{children}</Text>
      </Button>
    </Link>
  );
};

export default ButtonLinkSecundary;
