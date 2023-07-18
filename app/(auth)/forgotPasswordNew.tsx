import React, { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LinkBack from '../../src/components/LinkBack';
import TextField from '../../src/components/TextField';
import ButtonPrimary from '../../src/components/ButtonPrimary';
import ButtonLinkPrimary from '../../src/components/ButtonLinkPrimary';
import { regexPassword } from '../../src/utils/regex';
import Modal from '../../src/components/Modal';
import { api } from '../../src/config/api';
import { newToast } from '../../src/utils/toast';
import Img from '../../assets/forgotPassword.png';

import {
  Body,
  Container,
  Content,
  ContentButtons,
  Form,
  Header,
  ImageStyled,
  Line,
  Subtitle,
  SubtitleModal,
  Title,
  TitleModal,
} from '../../src/supportPage/forgotPassword/styles';

const ForgotPasswordNew = () => {
  const [showModal, setShowModal] = useState(false);
  
  const validationSchema = yup.object().shape({
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
    register('password');
    register('passwordRepeat');
  }, []);

  const onSubmit = async (data: {
    password?: string;
    passwordRepeat?: string;
    email?: string;
    token?: string;
  }) => {
    try {
      delete data.passwordRepeat;
      data.email = await AsyncStorage.getItem('emailForgotPassword') as string;
      data.token = await AsyncStorage.getItem('tokenForgotPassword') as string;
      await api.put('/verify-token/verified-and-new-password/', data);
      setShowModal(true);
    } catch (error) {
      newToast('Erro', 'Ops, algo deu errado', 'error');
    }
  };

  return (
    <Container>
      <Header>
        <LinkBack>Recuperar sua senha</LinkBack>
      </Header>
      <Line width="100%" colors={[]} />
      <KeyboardAwareScrollView>
        <Body>
          <Content>
            <Title>Digite sua nova senha</Title>
            <Subtitle>Crie uma senha segura</Subtitle>
            <Form>
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
          </Content>
          <ContentButtons>
            <ButtonPrimary
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              loading={isSubmitting}
            >
              Confirmar
            </ButtonPrimary>
          </ContentButtons>
        </Body>
      </KeyboardAwareScrollView>
      <Modal show={showModal}>
        <ImageStyled source={Img} contentFit="contain" />
        <TitleModal>
          Sua senha foi alterada com sucesso!
        </TitleModal>
        <SubtitleModal>
          Agora você pode acessar sua conta normalmente
        </SubtitleModal>
        <ContentButtons>
          <ButtonLinkPrimary href="login">
            Concluido
          </ButtonLinkPrimary>
        </ContentButtons>
      </Modal>
    </Container>
  );
};

export default ForgotPasswordNew;
