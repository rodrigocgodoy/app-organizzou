import { styled } from 'styled-components/native';
import { Link as LinkExpo } from 'expo-router';

export const Button = styled(LinkExpo)`
  background-color: transparent;
  padding: 16px 24px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.buttonPrimary};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`;
