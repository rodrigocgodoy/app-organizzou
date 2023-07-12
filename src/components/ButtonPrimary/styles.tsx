import { styled } from "styled-components/native";

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  border-radius: 4px;
  padding: 9px 24px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textInverted};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`;
