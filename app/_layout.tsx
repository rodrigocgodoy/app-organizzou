import { Stack } from 'expo-router/stack';
import { AuthProvider } from '../src/context/AuthProvider';
import { ThemeProvider } from '../src/context/ThemeProvider';
import { ThemeProviderStyled } from '../src/context/ThemeProviderStyled';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ThemeProviderStyled>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </ThemeProviderStyled>
      </ThemeProvider>
    </AuthProvider>
  );
}
