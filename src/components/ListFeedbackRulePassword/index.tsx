import { useMemo } from "react";

import { Container, Item, ItemText } from "./styles";
import IconFeedbackSuccess from "../icons/feedbackSuccess";
import IconFeedbackError from "../icons/feedbackError";

type ListFeedbackRulePasswordType = {
  value: string;
};

type List = {
  regex: string;
  text: string;
  isCorrect: boolean;
};

const list = [
  {
    regex: '(?=.*[^A-Za-z0-9])',
    text: 'Caractere especial',
    isCorrect: false,
  },
  {
    regex: '(?=.*[A-Z])',
    text: 'Letra maiúscula',
    isCorrect: false,
  },
  {
    regex: '(?=.*[a-z])',
    text: 'Letra minúscula',
    isCorrect: false,
  },
  {
    regex: '(?=.*[0-9])',
    text: 'Números',
    isCorrect: false,
  },
  {
    regex: '(?=.{8,})',
    text: 'Mínimo de 8 caracteres',
    isCorrect: false,
  },
] as List[];

const ListFeedbackRulePassword = ({ value }: ListFeedbackRulePasswordType) => {
  const listIsValidated = useMemo<List[]>(() => {
    const result = list?.map((item) => {
      item.isCorrect = new RegExp(item.regex).test(value);
      return item;
    });

    return result;
  }, [value]);

  return (
    <Container>
      {listIsValidated?.map((item) => (
        <Item key={item.text}>
          {item.isCorrect ? <IconFeedbackSuccess /> : <IconFeedbackError />}
          <ItemText>{item.text}</ItemText>
        </Item>
      ))}
    </Container>
  );
};

export default ListFeedbackRulePassword;
