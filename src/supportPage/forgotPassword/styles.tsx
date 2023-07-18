import styled from 'styled-components/native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Cursor } from 'react-native-confirmation-code-field';

export const Container = styled.SafeAreaView`
  display: flex;
  justify-content: space-between;
  flex: 1;
  background: ${({ theme }) => theme?.colors?.background};
`;

export const ContainerModal = styled.SafeAreaView`
  height: 30%;
  background: ${({ theme }) => theme?.colors?.background};
`;

export const Header = styled.View`
  width: 100%;
  padding: 24px 20px;
`;

interface ILine {
  width: string;
}

export const Line = styled(LinearGradient).attrs({
  colors: ['#21892B', 'rgba(75, 204, 88, 0.40)'],
  start: [0, 0],
  end: [1, 0],
})<ILine>`
  width: ${({ width }) => width};
  height: 5px;
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
`;

export const Content = styled.View`
  display: flex;
  width: 100%;
  padding: 0 20px;
  flex: 1;
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

interface ITextCode {
  isFocused: boolean;
}

export const ItemCode = styled.View<ITextCode>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60px;
  min-width: 45px;
  border: 1px solid ${({ theme }) => theme.colors.borderColor1};
  border-radius: 12px;
`;

export const ItemTextCode = styled.Text`
  color: ${({ theme }) => theme.colors.textSecundary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`;

export const TextSeparator = styled.Text`
  color: ${({ theme }) => theme.colors.textSecundary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`;

export const CursorCode = styled(Cursor)`
  color: ${({ theme }) => theme.colors.textSecundary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
`;

export const ContentTime = styled.View`
  display: flex;
  gap: 8px;
  flex-direction: row;
  align-items: center;
`;

export const ContentTextTime = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextTimer = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const TextTimerButton = styled(TextTimer)`
  color: ${({ theme }) => theme.colors.textButtonPrimary};
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

export const ImageStyled = styled(Image)`
  width: 100%;
  height: 45%;
`;

export const TitleModal = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 24px;
  margin-top: 24px;
  text-align: center;
  margin-top: 18px;
`;

export const SubtitleModal = styled.Text`
  color: ${({ theme }) => theme.colors.textSecundary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
  margin-top: 8px;
  text-align: center;
  width: 70%;
  margin-bottom: 24px;
`;
