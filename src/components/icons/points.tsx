import Svg, { Path } from 'react-native-svg';
import { useTheme } from "../../context/ThemeProvider";
import dark from "../../styles/dark";
import light from "../../styles/light";

export default function IconPoints() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.icon3 : dark.colors.icon3;
  const color2 = currentTheme === 'light' ? light.colors.icon1 : dark.colors.icon1;

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M5.99759 21.0038H3.99675C3.44432 21.0036 2.99654 20.5558 2.99634 20.0033V14.0008C2.99654 13.4484 3.44432 13.0006 3.99675 13.0004H5.99759C6.55002 13.0006 6.99781 13.4484 6.998 14.0008V20.0033C6.99781 20.5558 6.55002 21.0036 5.99759 21.0038V21.0038Z" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M13.0005 17.0021H14.9614C15.3943 17.0023 15.8156 16.8619 16.1619 16.6019L18.5789 14.7892C19.1823 14.3369 20.0264 14.3971 20.5597 14.9302V14.9302C20.8441 15.2143 21.0039 15.5997 21.0039 16.0017C21.0039 16.4036 20.8441 16.7891 20.5597 17.0731L18.4858 19.147C17.9271 19.7055 17.2156 20.0863 16.441 20.2414L13.5098 20.8277C12.9286 20.9439 12.3289 20.9296 11.754 20.7857L9.10292 20.1234C8.78598 20.0435 8.46037 20.0032 8.13352 20.0033H6.99805" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M13.0005 17.0021H14.4862C14.8882 17.0022 15.2737 16.8425 15.558 16.5583C15.8422 16.274 16.0019 15.8885 16.0018 15.4865V15.1833C16.002 14.4881 15.5288 13.8821 14.8543 13.7137L12.5614 13.1405C12.1887 13.0475 11.806 13.0004 11.4219 13.0004V13.0004C10.4943 13.0001 9.58738 13.2748 8.8158 13.7897L6.99805 15.0013" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path d="M19.271 6.73008C20.2477 7.7068 20.2477 9.29037 19.271 10.2671C18.2943 11.2438 16.7107 11.2438 15.734 10.2671C14.7573 9.29037 14.7573 7.7068 15.734 6.73008C16.203 6.26104 16.8392 5.99754 17.5025 5.99754C18.1658 5.99754 18.802 6.26104 19.271 6.73008" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M6.93153 6.04459C6.35302 5.46607 6.35302 4.5281 6.93153 3.94958L8.45165 2.42947C9.03017 1.85095 9.96813 1.85095 10.5467 2.42947L12.0668 3.94958C12.6453 4.5281 12.6453 5.46607 12.0668 6.04459L10.5467 7.5647C9.96813 8.14322 9.03017 8.14322 8.45165 7.5647L6.93153 6.04459Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </Svg>
  )
};
