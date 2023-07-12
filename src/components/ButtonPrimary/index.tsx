import { Button, Text } from "./styles";

const ButtonPrimary = ({ children, ...props }: any) => {
  return (
    <Button {...props}>
      <Text>{children}</Text>
    </Button>
  );
};

export default ButtonPrimary;
