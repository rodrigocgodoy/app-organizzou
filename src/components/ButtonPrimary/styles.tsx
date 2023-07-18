import { styled } from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme, disabled }) => theme.colors[!disabled ? 'buttonPrimary' : 'buttonDisabled']};
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
  color: ${({ theme, disabled }) => theme.colors[!disabled ? 'buttonPrimary' : 'buttonDisabled']};
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textInverted};
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 14px;
  line-height: 22px;
  text-align: center;
`;
