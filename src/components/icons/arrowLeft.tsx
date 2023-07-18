import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '../../context/ThemeProvider';
import dark from '../../styles/dark';
import light from '../../styles/light';

export default function IconArrowLeft() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.icon1 : dark.colors.icon1;

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M14 8L10 12L14 16" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}
