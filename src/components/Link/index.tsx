import { Button, Text } from "./styles";

const Link = ({ children, ...props }: any) => {
  return (
    <Button {...props} asChild>
      <Text>{children}</Text>
    </Button>
  );
};

export default Link;
