import Svg, { Path, Rect } from 'react-native-svg';
import { useTheme } from "../../context/ThemeProvider";
import dark from "../../styles/dark";
import light from "../../styles/light";

export default function IconPrivacy() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.icon3 : dark.colors.icon3;
  const color2 = currentTheme === 'light' ? light.colors.icon1 : dark.colors.icon1;

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path d="M11.1248 12.005H15.3025" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M11.1248 15.9967L17.1273 16.0017" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Rect x="2.99634" y="2.99625" width="18.0075" height="18.0075" rx="2" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M11.1248 7.99333H17.1273" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M7.12201 7.74823C6.98401 7.74878 6.87254 7.861 6.87291 7.999C6.87327 8.137 6.98534 8.24862 7.12334 8.24844C7.26134 8.24825 7.37311 8.13633 7.37311 7.99833C7.37338 7.93175 7.34698 7.86782 7.2998 7.82083C7.25262 7.77384 7.1886 7.7477 7.12201 7.74823" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M7.12201 11.7499C6.98401 11.7504 6.87254 11.8627 6.87291 12.0007C6.87327 12.1387 6.98534 12.2503 7.12334 12.2501C7.26134 12.2499 7.37311 12.138 7.37311 12C7.37338 11.9334 7.34698 11.8695 7.2998 11.8225C7.25262 11.7755 7.1886 11.7494 7.12201 11.7499" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M7.12201 15.7516C6.98401 15.7521 6.87254 15.8643 6.87291 16.0023C6.87327 16.1403 6.98534 16.252 7.12334 16.2518C7.26134 16.2516 7.37311 16.1397 7.37311 16.0017C7.37338 15.9351 7.34698 15.8712 7.2998 15.8242C7.25262 15.7772 7.1886 15.751 7.12201 15.7516" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  )
};
