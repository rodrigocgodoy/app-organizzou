
import styled, { css } from 'styled-components/native';
import { Image } from 'expo-image';

export const ContentButtons = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
`;

export const ContentStep = styled.View`
  display: flex;
  flex-direction: row;
  gap: 5px;
  margin-top: 12px;
`;

interface IStep {
  active?: boolean;
}

export const Step = styled.View<IStep>`
  width: 9px;
  height: 9px;
  background-color: ${({ theme }) => theme.colors.buttonDisabled};
  border-radius: 100%;
  border: 2px solid ${({ theme }) => theme.colors.buttonDisabled};

  ${({ active }) => active && css`
    background-color: ${({ theme }) => theme.colors.buttonPrimary};
    border-color: ${({ theme }) => theme.colors.background3};
  `}
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 24px;
  text-align: center;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textSecundary};
  font-size: 16px;
  text-align: center;
`;

export const Info = styled.View`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 75%;
`;

export const ImageStyled = styled(Image)`
  width: 100%;
  height: 45%;
`;

export const Container = styled.SafeAreaView`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme?.colors?.background};
`;