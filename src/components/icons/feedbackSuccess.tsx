import Svg, { Path } from 'react-native-svg';
import { useTheme } from "../../context/ThemeProvider";
import dark from "../../styles/dark";
import light from "../../styles/light";

export default function IconFeedbackSuccess() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.feedbackColorSuccess : dark.colors.feedbackColorSuccess;

  return (
    <Svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <Path d="M14.6651 8.25L10.0857 12.8333L7.33337 10.079" stroke={color} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  )
};
