import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import LinkBack from '../../src/components/LinkBack';
import LogoImage from '../../assets/logo.svg';
import ButtonPrimary from '../../src/components/ButtonPrimary';
import TextField from '../../src/components/TextField';
import { api } from '../../src/config/api';
import { useAuth } from '../../src/context/AuthProvider';
import { newToast } from '../../src/utils/toast';

import {
  Body,
  Container,
  Content,
  ContentButtons,
  Form,
  Header,
  Logo,
  Subtitle,
  Title,
} from '../../src/supportPage/login/styles';

const Login = () => {
  const { setUser } = useAuth();

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .required('O email não pode ser vazio')
      .email('Digite um email válido'),
    password: yup
      .string()
      .required('A senha não pode ser vazia')
      .min(8, 'A senha deve conter pelo menos 8 dígitos')
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
    register('password');
  }, []);

  const onSubmit = async (data: {
    email: string;
    password: string;
  }) => {
    try {
      const { data: result } = await api.post('/auth/login/', data);
      
      await AsyncStorage.setItem('accessToken', result?.accessToken);
      await AsyncStorage.setItem('refreshToken', result?.refreshToken);

      setUser(result.user);
    } catch (error) {
      newToast('Erro', 'E-mail ou senha incorretos', 'error');
    }
  };

  return (
    <Container>
      <Header>
        <LinkBack>Voltar</LinkBack>
      </Header>
      <KeyboardAwareScrollView>
        <Body>
          <Content>
            <Logo source={LogoImage} contentFit="contain" />
            <Title>
              Bem vindo de volta!
            </Title>
            <Subtitle>
              Digite seu e-mail e senha para fazer login
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
              <TextField
                name="password"
                label="Senha"
                placeholder="Digite sua senha"
                secureTextEntry
                textContentType="password"
                errorMessage={errors?.password?.message}
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
              Entrar
            </ButtonPrimary>
          </ContentButtons>
        </Body>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default Login;
