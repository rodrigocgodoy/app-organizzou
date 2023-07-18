import { styled } from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  background-color: transparent;
  border: 1px solid;
  border-color: ${({ theme, disabled }) => theme.colors[!disabled ? 'buttonSecundary' : 'buttonDisabled']};
  border-radius: 4px;
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

type LoadingType = {
  disabled?: boolean;
};

export const Loading = styled.ActivityIndicator<LoadingType>`
  color: ${({ theme }) => theme.colors.textButtonSecundary};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textButtonPrimary};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`;
