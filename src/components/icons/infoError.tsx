import Svg, { Circle, Path } from 'react-native-svg';
import { useTheme } from "../../context/ThemeProvider";
import dark from "../../styles/dark";
import light from "../../styles/light";

export default function IconInfoError() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.feedbackColorError : dark.colors.feedbackColorError;

  return (
    <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <Circle cx="6.99998" cy="6.99999" r="5.54167" stroke={color} stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M7.65625 9.04167H7V6.5625H6.34375" stroke={color} stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M6.80901 4.70973L6.80926 4.70947C6.86614 4.65274 6.95822 4.65283 7.01499 4.70967C7.07175 4.7665 7.07172 4.85859 7.01492 4.91539C6.95812 4.97219 6.86604 4.97222 6.8092 4.91545C6.75236 4.85869 6.75228 4.7666 6.80901 4.70973" stroke={color} stroke-width="0.875" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  )
};
