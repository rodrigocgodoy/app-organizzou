import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '../../context/ThemeProvider';
import dark from '../../styles/dark';
import light from '../../styles/light';

export default function IconInvitation() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.icon3 : dark.colors.icon3;
  const color2 = currentTheme === 'light' ? light.colors.icon1 : dark.colors.icon1;

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M19 15.5V11.5C19 10.6716 19.6716 10 20.5 10C21.3284 10 22 10.6716 22 11.5V18.0557C22 18.6767 21.8554 19.2891 21.5777 19.8445L21 21" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M14 21V18.0866C14 17.6539 14.1404 17.2328 14.4 16.8866L16.0779 14.6494C16.3603 14.2729 16.7921 14.0375 17.2615 14.0041C17.731 13.9708 18.1917 14.1427 18.5245 14.4755V14.4755C19.0958 15.0467 19.16 15.9511 18.6753 16.5974L17.6233 18" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M5 15.5V11.5C5 10.6716 4.32843 10 3.5 10C2.67157 10 2 10.6716 2 11.5V18.0557C2 18.6767 2.14459 19.2891 2.4223 19.8445L3 21" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M9.99999 21V18.0866C9.99999 17.6539 9.85964 17.2328 9.59999 16.8866L7.92205 14.6494C7.6397 14.2729 7.20786 14.0375 6.73845 14.0041C6.26904 13.9708 5.80825 14.1427 5.47548 14.4755V14.4755C4.90424 15.0467 4.83997 15.9511 5.32469 16.5974L6.37664 18" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.555 10.356C13.1425 10.7683 12.5832 10.9999 12 11V11C11.4168 10.9999 10.8575 10.7683 10.445 10.356L7.80999 7.721C6.73 6.64101 6.73 4.88999 7.80999 3.81C8.88999 2.73001 10.641 2.73001 11.721 3.81L12 4.089L12.279 3.81C13.359 2.73001 15.11 2.73001 16.19 3.81C17.27 4.88999 17.27 6.64101 16.19 7.721L13.555 10.356Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}
