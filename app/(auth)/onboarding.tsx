import { Link } from 'expo-router';
import styled from 'styled-components/native';
import RadioGroup from 'react-native-radio-buttons-group';
import { useMemo, useState } from 'react';
import { useTheme } from '../../src/context/ThemeProvider';

export default function Onboarding() {
  const { handleChangeTypeTheme, typeTheme } = useTheme();

  const radioButtons = useMemo(() => ([
    {
        id: 'system', // acts as primary key, should be unique and non-empty string
        label: 'System',
        value: 'system'
    },
    {
        id: 'dark',
        label: 'Dark',
        value: 'dark'
    },
    {
        id: 'light',
        label: 'Light',
        value: 'light'
    }
  ]), []);

  const onSelectRadioGroup = (value: 'dark' | 'light' | 'system'): void => {
    handleChangeTypeTheme(value);
  };

  return (
    <Container>
      <Link href="/login" asChild>
        <Text>Login</Text>
      </Link>
      <RadioGroup 
        radioButtons={radioButtons} 
        onPress={onSelectRadioGroup}
        selectedId={typeTheme}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme?.colors?.background};
`;

const Text = styled.Text`
  color: ${({ theme }) => theme?.colors?.text};
`;
