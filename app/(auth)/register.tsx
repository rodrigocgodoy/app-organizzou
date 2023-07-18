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
import { regexPassword } from '../../src/utils/regex';

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
  TextTerms,
} from '../../src/supportPage/register/styles';

const Register = () => {
  const { setUser } = useAuth();

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required('O nome não pode ser vazio'),
    email: yup
      .string()
      .required('O email não pode ser vazio')
      .email('Digite um email válido'),
    password: yup
      .string()
      .required('A senha não pode ser vazia')
      .matches(
        regexPassword,
        'Use dez ou mais caracteres com uma combinação de letras, números e símbolos'
      ),
    passwordRepeat: yup
      .string()
      .required('A senha não pode ser vazia')
      .min(8, 'A senha deve conter pelo menos 8 dígitos')
      .oneOf([yup.ref('password')], 'As senhas não combinam'),
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
    register('name');
    register('email');
    register('password');
    register('passwordRepeat');
  }, []);

  const onSubmit = async (data: {
    name: string;
    email: string;
    password: string;
    passwordRepeat?: string;
  }) => {
    try {
      delete data.passwordRepeat;
      const { data: result } = await api.post('/auth/register/', data);
      
      await AsyncStorage.setItem('accessToken', result?.accessToken);
      await AsyncStorage.setItem('refreshToken', result?.refreshToken);

      setUser(result.user);
    } catch (error) {
      console.error('🚀 ~ file: login.tsx:59 ~ onSubmit ~ error:', error);
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
            <Title>Criar uma conta!</Title>
            <Subtitle>Seja bem vindo!!</Subtitle>
            <Form>
              <TextField
                name="name"
                label="Nome"
                placeholder="Digite seu nome"
                autoCorrect={false}
                returnKeyType="next"
                errorMessage={errors?.name?.message}
                control={control}
                editable={!isSubmitting}
              />
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
                showUpdatedRulesPassword
              />
              <TextField
                name="passwordRepeat"
                label="Repitir Senha"
                placeholder="Repita sua senha"
                secureTextEntry
                textContentType="password"
                errorMessage={errors?.passwordRepeat?.message}
                control={control}
                editable={!isSubmitting}
              />
            </Form>
            <TextTerms>
              Ao continuar, estou de acordo com os termos de uso e com o aviso de privacidade do organizzou.
            </TextTerms>
          </Content>
          <ContentButtons>
            <ButtonPrimary
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Cadastrar-se
            </ButtonPrimary>
          </ContentButtons>
        </Body>
      </KeyboardAwareScrollView>
    </Container>
  );
};

export default Register;
