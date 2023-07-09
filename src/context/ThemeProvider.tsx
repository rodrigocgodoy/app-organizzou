import { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import * as Device from 'expo-device';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ThemeSelected = 'dark' | 'light';

type ThemeType = 'dark' | 'light' | 'system';

type ThemeContextData = {
  currentTheme: ThemeSelected,
  typeTheme: ThemeType,
  handleChangeTheme: (theme: ThemeSelected) => void;
  handleChangeTypeTheme: (type: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState<ThemeSelected>('dark');
  const [typeTheme, setTypeTheme] = useState<ThemeType>('system');

  const colorScheme = Appearance.getColorScheme();

  useEffect(() => {
    (async () => {
      const typeThemeStorage = await AsyncStorage.getItem('typeThemeStorage');

      if (typeThemeStorage) {
        switch (typeThemeStorage) {
          case 'system':
            setSelectedTheme(colorScheme);
            setTypeTheme('system');
            break;
          case 'dark':
            setSelectedTheme('dark');
            setTypeTheme('dark');
            break;
          case 'light':
            setSelectedTheme('light');
            setTypeTheme('light');
            break;
          default:
            break;
        }
      } else {
        setSelectedTheme(colorScheme);
        setTypeTheme('system');
      }
    })();
  }, []);

  const handleChangeTheme = (theme: ThemeSelected): void => {
    setSelectedTheme(theme);
  }

  const handleChangeTypeTheme = async (type: ThemeType): Promise<void> => {
    setTypeTheme(type);
    
    switch (type) {
      case 'system':
        await AsyncStorage.setItem('typeThemeStorage', type);
        setSelectedTheme(colorScheme);
        setTypeTheme(type);
        break;
      case 'dark':
        await AsyncStorage.setItem('typeThemeStorage', type);
        setSelectedTheme('dark');
        setTypeTheme(type);
        break;
      case 'light':
        await AsyncStorage.setItem('typeThemeStorage', type);
        setSelectedTheme('light');
        setTypeTheme(type);
        break;
      default:
        break;
    }
  }

  return (
    <ThemeContext.Provider value={{
      typeTheme,
      currentTheme: selectedTheme,
      handleChangeTheme,
      handleChangeTypeTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  )
};

export const useTheme = (): ThemeContextData => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw Error('useTheme must be used within a ThemeProvider');
  }

  return context;
};
