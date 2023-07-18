import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '../../context/ThemeProvider';
import dark from '../../styles/dark';
import light from '../../styles/light';

export default function IconExit() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.icon3 : dark.colors.icon3;
  const color2 = currentTheme === 'light' ? light.colors.icon1 : dark.colors.icon1;

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M11 7.503V19.9976C10.9998 20.7245 10.6051 21.3941 9.96923 21.7464C9.33333 22.0986 8.55636 22.078 7.94 21.6926L3.94 19.1926C3.355 18.8273 2.99968 18.1862 3 17.4966V5.003C3.0001 4.27599 3.39467 3.60628 4.03054 3.25385C4.66641 2.90142 5.44345 2.92177 6.06 3.307L10.06 5.807C10.645 6.17225 11.0003 6.81334 11 7.503V7.503Z" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M18 15.25V18C18.0001 18.5305 17.7895 19.0393 17.4144 19.4144C17.0393 19.7895 16.5305 20.0001 16 20H11" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M5 3H16C16.5305 2.99985 17.0393 3.21052 17.4144 3.58563C17.7895 3.96073 18.0001 4.46952 18 5V7.25" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M8 12V14" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M13.875 11.5H19.125" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M15.75 9.625L13.875 11.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M15.75 13.375L13.875 11.5" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}
