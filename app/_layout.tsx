import React from 'react';
import { Stack } from 'expo-router/stack';
import * as SplashScreen from 'expo-splash-screen';
import { LogBox } from 'react-native';
import {
  useFonts,
  Raleway_400Regular,
  Raleway_500Medium,
  Raleway_600SemiBold,
  Raleway_700Bold
} from '@expo-google-fonts/raleway';
import Toast from 'react-native-toast-message';

import { AuthProvider } from '../src/context/AuthProvider';
import { ThemeProvider } from '../src/context/ThemeProvider';
import { ThemeProviderStyled } from '../src/context/ThemeProviderStyled';

SplashScreen.preventAutoHideAsync();
LogBox.ignoreAllLogs();

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    Raleway_400Regular,
    Raleway_500Medium,
    Raleway_600SemiBold,
    Raleway_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
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
      <Toast />
    </>
  );
};

export default RootLayout;
