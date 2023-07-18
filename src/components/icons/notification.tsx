import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

import { useTheme } from '../../context/ThemeProvider';
import dark from '../../styles/dark';
import light from '../../styles/light';

export default function IconNotification() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.icon3 : dark.colors.icon3;
  const color2 = currentTheme === 'light' ? light.colors.icon1 : dark.colors.icon1;

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M10.9998 18.0025H13.0006" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M15.7207 15.8766V15.8766C16.0608 15.8763 16.3869 15.741 16.6273 15.5003C16.8676 15.2596 17.0025 14.9332 17.0022 14.5931V14.5931C17.0017 14.2325 16.8577 13.887 16.602 13.6327L15.7497 12.7803V10.2493C15.7497 8.17812 14.0713 6.49881 12.0001 6.49771V6.49771C9.92898 6.49881 8.25057 8.17812 8.25057 10.2493V12.7803L7.39821 13.6327C7.14258 13.887 6.9986 14.2325 6.99805 14.5931V14.5931V14.5931C6.99831 14.9332 7.13369 15.2593 7.3744 15.4997C7.61511 15.74 7.94143 15.8749 8.28158 15.8746H15.7187" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Rect x="2.99634" y="2.99625" width="18.0075" height="18.0075" rx="5" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}
