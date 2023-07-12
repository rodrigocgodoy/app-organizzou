import Svg, { Path } from 'react-native-svg';
import { useTheme } from "../../context/ThemeProvider";
import dark from "../../styles/dark";
import light from "../../styles/light";

export default function IconChecked() {
  const { currentTheme } = useTheme();

  const color = currentTheme === 'light' ? light.colors.icon3 : dark.colors.icon3;
  const color2 = currentTheme === 'light' ? light.colors.icon1 : dark.colors.icon1;

  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M12.2859 3.62601L14.4549 2.92401C15.3229 2.64301 16.2669 3.03401 16.6819 3.84601L17.7189 5.87601C17.8079 6.05001 17.9499 6.19201 18.1239 6.28101L20.1539 7.31801C20.9669 7.73301 21.3569 8.67701 21.0759 9.54501L20.3739 11.714C20.3139 11.9 20.3139 12.1 20.3739 12.286L21.0759 14.455C21.3569 15.323 20.9659 16.267 20.1539 16.682L18.1239 17.719C17.9499 17.808 17.8079 17.95 17.7189 18.124L16.6819 20.154C16.2669 20.967 15.3229 21.357 14.4549 21.076L12.2859 20.374C12.0999 20.314 11.8999 20.314 11.7139 20.374L9.54493 21.076C8.67693 21.357 7.73293 20.966 7.31793 20.154L6.28093 18.124C6.19193 17.95 6.04993 17.808 5.87593 17.719L3.84593 16.682C3.03293 16.267 2.64293 15.323 2.92393 14.455L3.62593 12.286C3.68593 12.1 3.68593 11.9 3.62593 11.714L2.92393 9.54501C2.64293 8.67701 3.03393 7.73301 3.84593 7.31801L5.87593 6.28101C6.04993 6.19201 6.19193 6.05001 6.28093 5.87601L7.31793 3.84601C7.73293 3.03301 8.67693 2.64301 9.54493 2.92401L11.7139 3.62601C11.8999 3.68601 12.0999 3.68601 12.2859 3.62601Z" stroke={color2} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967C15.2374 9.17678 14.7626 9.17678 14.4697 9.46967L11.25 12.6893L9.53033 10.9697C9.23744 10.6768 8.76256 10.6768 8.46967 10.9697C8.17678 11.2626 8.17678 11.7374 8.46967 12.0303L10.7197 14.2803C11.0126 14.5732 11.4874 14.5732 11.7803 14.2803L15.5303 10.5303Z" fill={color}/>
    </Svg>
  )
};
