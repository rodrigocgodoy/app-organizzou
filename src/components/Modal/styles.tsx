import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled(Animated.View)`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(50, 50, 50, 0.80);
`;

export const Content = styled(Animated.View)`
  display: flex;
  align-items: center;
  position: absolute;
  min-height: 50%;
  bottom: 0;
  left: 0;
  right: 0%;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  padding: 45px 20px;
  background: ${({ theme }) => theme?.colors?.background};
`;
