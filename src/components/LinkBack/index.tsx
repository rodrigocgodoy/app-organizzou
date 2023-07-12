import IconArrowLeft from "../icons/arrowLeft";
import { Content, Text } from "./styles";

const LinkBack = ({ children, ...props }: any) => {
  return (
    <Content>
      <IconArrowLeft />
      <Text>{children}</Text>
    </Content>
  );
};

export default LinkBack;
