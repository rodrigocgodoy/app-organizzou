import { Link } from "expo-router";

import { Button, Text } from "./styles";

const ButtonLinkSecundary = ({ children, ...props }: any) => {
  return (
    <Link {...props} asChild>
      <Button>
        <Text>{children}</Text>
      </Button>
    </Link>
  );
};

export default ButtonLinkSecundary;
