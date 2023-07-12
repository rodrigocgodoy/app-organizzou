import Svg, { Path } from 'react-native-svg';
import { useTheme } from "../../context/ThemeProvider";
import dark from "../../styles/dark";
import light from "../../styles/light";

export default function IconFeedbackError() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.feedbackColorError : dark.colors.feedbackColorError;

  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path d="M14.6668 7.33333L7.33337 14.6667" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M7.33337 7.33333L14.6668 14.6667" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  )
};
