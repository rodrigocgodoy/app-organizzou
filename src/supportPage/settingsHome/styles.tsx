import styled from 'styled-components/native';
import { Link } from 'expo-router';

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
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkContent = styled.View`
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 18px;
  text-align: center;
`;

export const Body = styled.ScrollView`
  display: flex;
  flex: 1;
  width: 100%;
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textSecundary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  padding: 10px 20px;
`;

export const ItemMenuLink = styled(Link)``;

type ItemMenuProps = {
  isBorder?: boolean;
};

export const ItemMenu = styled.TouchableOpacity<ItemMenuProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  width: 100%;
  border: 1px solid;
  border-top-color: ${({ isBorder, theme }) => isBorder ? theme.colors.borderColor1 : 'transparent'};
  border-bottom-color: ${({ isBorder, theme }) => isBorder ? theme.colors.borderColor1 : 'transparent'};
`;

export const ItemContentMenu = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 21px;
  padding: 16px 20px;
`;

export const ItemMenuText = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
`;

export const Avaliation = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundCard1};
  padding: 20px;
  display: flex;
  align-items: center;
`;

export const AvaliationTitle = styled.Text`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 16px;
  text-align: center;
`;

export const AvaliationSubtitle = styled.Text`
  color: ${({ theme }) => theme.colors.textSecundary};
  font-family: ${({ theme }) => theme.fonts.regular};
  width: 80%;
  font-size: 14px;
  text-align: center;
  margin: 8px 0 24px;
`;

export const BadgePremium = styled.View`
  padding: 6px 8px;
  background-color: ${({ theme }) => theme.colors.buttonPrimary};
  border: 2px solid ${({ theme }) => theme.colors.backgroundColor3};
  border-radius: 39px;
`;

export const BadgePremiumText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.textInverted};
  font-size: 10px;
`;
