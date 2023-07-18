import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '../../context/ThemeProvider';
import dark from '../../styles/dark';
import light from '../../styles/light';

export default function IconEducation() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.icon3 : dark.colors.icon3;
  const color2 = currentTheme === 'light' ? light.colors.icon1 : dark.colors.icon1;

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M21.0038 12C21.0038 16.9726 16.9727 21.0038 12.0001 21.0038C7.02745 21.0038 2.99634 16.9726 2.99634 12C2.99634 7.02737 7.02745 2.99625 12.0001 2.99625" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M20.0034 3.99667L17.0022 6.99792" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M16.0019 2.99625L15.0015 3.99667" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M21.0038 7.99834L20.0034 8.99875" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.087 7.42499L13.9141 10.0859L16.575 10.9131C16.7961 10.9818 16.959 11.1701 16.9952 11.3988C17.0315 11.6274 16.9347 11.8568 16.7457 11.9905L14.4706 13.5995L14.5062 16.3858C14.5091 16.6173 14.3804 16.8303 14.1741 16.9354C13.9678 17.0405 13.7198 17.0194 13.5342 16.881L11.301 15.2144L8.66207 16.1093C8.44282 16.1836 8.2004 16.127 8.03671 15.9633C7.87301 15.7996 7.81643 15.5572 7.89075 15.338L8.78564 12.699L7.11905 10.4658C6.9806 10.2802 6.95949 10.0322 7.06458 9.82591C7.16968 9.61963 7.38276 9.4909 7.61425 9.49383L10.4006 9.52945L12.0095 7.25434C12.1432 7.06532 12.3726 6.96859 12.6013 7.0048C12.8299 7.04102 13.0182 7.20391 13.087 7.42499Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}
