import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '../../context/ThemeProvider';
import dark from '../../styles/dark';
import light from '../../styles/light';

export default function IconSecurity() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.icon3 : dark.colors.icon3;
  const color2 = currentTheme === 'light' ? light.colors.icon1 : dark.colors.icon1;

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M10 12L11.5 13.5L14.5 10.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 10.767C3.5 15.1925 6.2472 19.1532 10.3923 20.7036L10.4223 20.7148C11.4399 21.0954 12.5607 21.095 13.578 20.7138L13.6024 20.7047C17.7512 19.1499 20.5 15.1842 20.5 10.7536V7.03023C20.5 6.15536 19.9314 5.38202 19.0963 5.12118L12.5963 3.09095C12.208 2.96968 11.792 2.96968 11.4037 3.09095L4.90374 5.12112C4.06864 5.38195 3.5 6.15529 3.5 7.03017V10.767Z" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}
