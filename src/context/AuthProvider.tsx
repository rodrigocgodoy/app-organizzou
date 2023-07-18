import React, { createContext, useContext, useEffect, useState } from 'react';
import { useSegments, useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../config/api';
import * as SplashScreen from 'expo-splash-screen';
import { User } from '../types/types';

type AuthType = {
  user: User | null;
  setUser: (user: User | null) => void;
  isReady: boolean;
}

const AuthContext = createContext<AuthType>({
  user: null,
  setUser: () => {},
  isReady: false,
});

export const useAuth = () => useContext(AuthContext);

function useProtectedRoute(user: User) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    if (
      !user &&
      !inAuthGroup
    ) {
      router.replace('/onboarding');
    } else if (user && inAuthGroup) {
      router.replace('/(tabs)/settingsHome');
    }
  }, [user, segments]);
}

export function AuthProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchUser = async () => {
      try {
        const accessToken = await AsyncStorage.getItem('accessToken');
        const refreshToken = await AsyncStorage.getItem('refreshToken');
  
        if (accessToken && refreshToken) {
          api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
  
          // TODO: Validar access token
          const { data: result } = await api.get('/users/me', {
            signal: abortController.signal,
          });
  
          setUser(result.user);
        }
  
        setIsReady(true);
        await SplashScreen.hideAsync();
      } catch (error: unknown) {
        if (abortController.signal.aborted) {
          console.error('Data fetching cancelled');
        } else {
          console.error('🚀 ~ file: AuthProvider.tsx:72 ~ error:', error);
        }
      }
    };
    
    fetchUser();

    return; 
  }, []);

  useProtectedRoute(user);

  const authContext: AuthType = {
    user,
    setUser,
    isReady,
  };

  return (
    <AuthContext.Provider value={authContext}>
      {children}
    </AuthContext.Provider>
  );
}
