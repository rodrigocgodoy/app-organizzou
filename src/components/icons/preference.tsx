import React from 'react';
import Svg, { Path } from 'react-native-svg';

import { useTheme } from '../../context/ThemeProvider';
import dark from '../../styles/dark';
import light from '../../styles/light';

export default function IconPreference() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.icon3 : dark.colors.icon3;
  const color2 = currentTheme === 'light' ? light.colors.icon1 : dark.colors.icon1;

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M15 7V8V7Z" fill={color}/>
      <Path d="M15 7V8" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 9.75C13.0858 9.75 12.75 10.0858 12.75 10.5C12.75 10.9142 13.0858 11.25 13.5 11.25H14.25V17C14.25 17.4142 14.5858 17.75 15 17.75C15.4142 17.75 15.75 17.4142 15.75 17V11.25H16.5C16.9142 11.25 17.25 10.9142 17.25 10.5C17.25 10.0858 16.9142 9.75 16.5 9.75H15H13.5Z" fill={color}/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M9 17V16V17Z" fill={color}/>
      <Path d="M9 17V16" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M9.75 7C9.75 6.58579 9.41421 6.25 9 6.25C8.58579 6.25 8.25 6.58579 8.25 7V12.75H7.5C7.08579 12.75 6.75 13.0858 6.75 13.5C6.75 13.9142 7.08579 14.25 7.5 14.25H9H10.5C10.9142 14.25 11.25 13.9142 11.25 13.5C11.25 13.0858 10.9142 12.75 10.5 12.75H9.75V7Z" fill={color}/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M8 21C5.23858 21 3 18.7614 3 16L3 8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8Z" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  );
}
