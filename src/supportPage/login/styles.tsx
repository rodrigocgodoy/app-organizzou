import styled from "styled-components/native";
import { Image } from 'expo-image';

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme?.colors?.background};
`;

export const Header = styled.View`
  width: 100%;
  padding: 24px 20px;
`;

export const Body = styled.View`
  display: flex;
  flex: 1;
  justify-content: space-between;
`;

export const ContentButtons = styled.View`
  display: flex;
  width: 100%;
  padding: 24px 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0%;
`;

export const Content = styled.View`
  display: flex;
  width: 100%;
  padding: 0 20px;
`;

export const Logo = styled(Image)`
  width: 30px;
  height: 30px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  margin-top: 24px;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textSecundary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  margin-top: 8px;
`;

export const Form = styled.View`
  display: flex;
  gap: 18px;
  margin-top: 24px;
`;
