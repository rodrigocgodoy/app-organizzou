import React, { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

import LinkBack from '../../src/components/LinkBack';
import TextField from '../../src/components/TextField';
import ButtonPrimary from '../../src/components/ButtonPrimary';
import { api } from '../../src/config/api';
import { newToast } from '../../src/utils/toast';

import {
  Body,
  Container,
  Content,
  ContentButtons,
  Form,
  Header,
  Line,
  Subtitle,
  Title
} from '../../src/supportPage/forgotPassword/styles';

const ForgotPassword = () => {
  const router = useRouter();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('O email não pode ser vazio')
      .email('Digite um email válido'),
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    register('email');
  }, []);

  const onSubmit = async (data: {
    email: string;
  }) => {
    try {
      await api.post('/verify-token/send-email/', data);
      await AsyncStorage.setItem('emailForgotPassword', data.email);
      router.push('forgotPasswordToken');
    } catch (error) {
      newToast('Erro', 'Endereço de e-mail inválido, tente outro.', 'error');
    }
  };

  return (
    <Container>
      <Header>
        <LinkBack>Recuperar sua senha</LinkBack>
      </Header>
      <Line width="33,33%" colors={[]} />
      <KeyboardAwareScrollView>
        <Body>
          <Content>
            <Title>Esqueceu a senha?</Title>
            <Subtitle>
              Digite seu e-mail para que possamos recuperá-la para você
            </Subtitle>
            <Form>
              <TextField
                name="email"
                label="E-mail"
                placeholder="Digite seu e-mail"
                autoCorrect={false}
                autoCapitalize="none"
                returnKeyType="next"
                keyboardType="email-address"
                errorMessage={errors?.email?.message}
                control={control}
                editable={!isSubmitting}
              />
            </Form>

          </Content>
          <ContentButtons>
            <ButtonPrimary
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Enviar
            </ButtonPrimary>
          </ContentButtons>
        </Body>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default ForgotPassword;
