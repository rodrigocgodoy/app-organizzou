import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '../../context/ThemeProvider';
import dark from '../../styles/dark';
import light from '../../styles/light';

export default function IconChat() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.icon3 : dark.colors.icon3;
  const color2 = currentTheme === 'light' ? light.colors.icon1 : dark.colors.icon1;

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M12 21L8 17.001V17H5C3.895 17 3 16.105 3 15V5C3 3.895 3.895 3 5 3H19C20.105 3 21 3.895 21 5V15C21 16.105 20.105 17 19 17H16L12 20.999" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M16 12H8" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M8 8H16" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}
