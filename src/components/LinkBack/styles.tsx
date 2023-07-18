import { styled } from 'styled-components/native';

export const Content = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  padding: 9px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
`;
