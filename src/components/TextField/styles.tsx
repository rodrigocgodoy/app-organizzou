import styled from 'styled-components/native';

export const Content = styled.View`
  display: flex;
  gap: 13px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
`;

interface IInput {
  isFocused: boolean;
  isError: boolean;
}

export const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.textSecundary,
}))<IInput>`
  padding: 16px;
  width: 100%;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor1};
  color: ${({ theme }) => theme.colors.textSecundary};

  border-color: ${({ isFocused, isError, theme }) => {
    if (isFocused) {
      return theme.colors.borderColor2;
    }

    if (isError) {
      return theme.colors.feedbackColorError;
    }

    return theme.colors.borderColor1;
  }}
`;

export const Error = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const TextError = styled.Text`
  color: ${({ theme }) => theme.colors.feedbackColorError};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
`;