import { Ref, useCallback, useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { Controller } from "react-hook-form";

import {
  Content,
  Input,
  Label,
  Error,
  TextError,
} from "./styles";
import ListFeedbackRulePassword from "../ListFeedbackRulePassword";
import IconInfoError from "../icons/infoError";

type ITextField = {
  label?: string,
  errorMessage?: string,
  name: string,
  control: any,
  ref?: Ref<TextInput>,
  showUpdatedRulesPassword?: boolean,
} & TextInputProps;

const TextField = ({
  name,
  label,
  errorMessage,
  control,
  ref,
  showUpdatedRulesPassword,
  ...props 
}: ITextField) => {
  const [isFocused, setIsFocused] = useState(false);
  const [valueText, setValueText] = useState('');

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, [isFocused]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
  }, [isFocused]);

  return (
    <Content>
      <Label>{label}</Label>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            {...props}
            value={value}
            onChangeText={(e: any) => {
              setValueText(e);
              onChange(e);
            }}
            onBlur={() => {
              onBlur();
              handleBlur();
            }}
            onFocus={handleFocus}
            isFocused={isFocused}
            isError={!!errorMessage}
            ref={ref}
          />
        )}
      />
      {errorMessage && (
        <Error>
          <IconInfoError />
          <TextError>{errorMessage}</TextError>
        </Error>
      )}
      {showUpdatedRulesPassword && isFocused && (
        <ListFeedbackRulePassword value={valueText} />
      )}
    </Content>
  )
};

export default TextField;
