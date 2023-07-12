import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
`;

export const Item = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const ItemText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textSecundary};
`;
