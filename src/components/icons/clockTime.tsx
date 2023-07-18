import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '../../context/ThemeProvider';
import dark from '../../styles/dark';
import light from '../../styles/light';

export default function IconClockTime() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.icon3 : dark.colors.icon3;
  const color2 = currentTheme === 'light' ? light.colors.icon1 : dark.colors.icon1;

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M3 18H9" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M6.5 20.5L9 18L6.5 15.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M16 12.5H11.5V7" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}
