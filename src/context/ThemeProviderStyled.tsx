import { ThemeProvider } from 'styled-components';
import { useTheme } from './ThemeProvider';
import theme from '../styles';
import { StatusBar } from 'expo-status-bar';

export const ThemeProviderStyled = ({ children }: any) => {
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <StatusBar style={currentTheme === 'dark' ? 'light' : 'dark'} />
      {children}
    </ThemeProvider>
  )
};