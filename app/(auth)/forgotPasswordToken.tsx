import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

import LinkBack from '../../src/components/LinkBack';
import ButtonPrimary from '../../src/components/ButtonPrimary';
import IconClockTime from '../../src/components/icons/clockTime';
import { api } from '../../src/config/api';
import { newToast } from '../../src/utils/toast';
import IconInfoError from '../../src/components/icons/infoError';

import {
  Body,
  Container,
  Content,
  ContentButtons,
  ContentTextTime,
  ContentTime,
  CursorCode,
  Error,
  Form,
  Header,
  ItemCode,
  ItemTextCode,
  Line,
  Subtitle,
  TextError,
  TextSeparator,
  TextTimer,
  TextTimerButton,
  Title
} from '../../src/supportPage/forgotPassword/styles';

const styles = StyleSheet.create({
  codeFieldRoot: {
    display: 'flex',
    alignItems: 'center'
  },
});

const CELL_COUNT = 6;

const formatTimer = (timer: number) => {
  const minutes = parseInt(`${timer / 60}`, 10);
  const seconds = parseInt(`${timer % 60}`, 10);

  return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
};

const TIMER = 60;

const ForgotPassword = () => {
  const [value, setValue] = useState('');
  const [timer, setTimer] = useState<number>(TIMER);
  const [startTimer, setStartTimer] = useState(false);

  const router = useRouter();
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const intervalRef: { current: NodeJS.Timeout | null } = useRef(null);
  let newTimer = TIMER;

  const decreaseNum = () => {
    if (newTimer === 0) {
      setStartTimer(false);
      clearInterval(intervalRef.current as NodeJS.Timeout);
      return;
    }

    setTimer((prev) => {
      newTimer = newTimer - 1;
      return prev - 1;
    });
  };

  const validationSchema = yup.object().shape({
    token: yup
      .string()
      .required('O campo token não pode ser vazio'),
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setValue: setValueForm
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    register('token');
    setTimer(TIMER);
    setStartTimer(true);
  }, []);

  useEffect(() => {
    setValueForm('token', value);
  }, [value]);

  useEffect(() => {
    if (startTimer && intervalRef.current) {
      intervalRef.current = setInterval(decreaseNum, 1000);
    }

    return () => clearInterval(intervalRef.current as NodeJS.Timer);
  }, [startTimer]);

  const onSubmit = async (data: {
    token: string;
  }) => {
    try {
      const email = await AsyncStorage.getItem('emailForgotPassword');
      await api.post('/verify-token/validate-token/', {
        email,
        token: Number(data.token),
      });
      
      await AsyncStorage.setItem('tokenForgotPassword', data.token);
      router.push('forgotPasswordNew');
    } catch (error) {
      newToast('Erro', 'Token inválido, tente novamente', 'error');
    }
  };

  return (
    <Container>
      <Header>
        <LinkBack>Recuperar sua senha</LinkBack>
      </Header>
      <Line width="66,66%" colors={[]} />
      <KeyboardAwareScrollView>
        <Body>
          <Content>
            <Title>Código de 6 dígitos</Title>
            <Subtitle>
              O código foi enviado por E-MAIL
            </Subtitle>
            <Form>
              <CodeField
                ref={ref}
                {...props}
                // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                value={value}
                onChangeText={setValue}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => {
                  return (
                    <React.Fragment key={index}>
                      {index === 3 && (
                        <TextSeparator>-</TextSeparator>
                      )}
                      <ItemCode
                        isFocused
                        onLayout={getCellOnLayoutHandler(index)}
                      >
                        <ItemTextCode>
                          {symbol || (isFocused ? <CursorCode /> : null)}
                        </ItemTextCode>
                      </ItemCode>
                    </React.Fragment>
                  );
                }}
              />
              {!!errors?.token?.message && (
                <Error>
                  <IconInfoError />
                  <TextError>{errors?.token?.message}</TextError>
                </Error>
              )}
              <ContentTime>
                <IconClockTime />
                <ContentTextTime>
                  <TextTimer>
                    {`Não recebi o código. ${timer > 0 ? `Aguarde ${formatTimer(timer)}` : ''}`}
                  </TextTimer>
                  {timer === 0 && (
                    <TextTimerButton>
                      Reenviar código
                    </TextTimerButton>
                  )}
                </ContentTextTime>
              </ContentTime>
            </Form>
          </Content>
          <ContentButtons>
            <ButtonPrimary
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Validar
            </ButtonPrimary>
          </ContentButtons>
        </Body>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default ForgotPassword;
