import styled from 'styled-components/native';
import { Image } from 'expo-image';

export const ContentButtons = styled.View`
  display: flex;
  gap: 8px;
  width: 100%;
  padding: 20px;
`;

export const Logo = styled(Image)`
  width: 100%;
  height: 38px;
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
