import { useSegments, useRouter } from "expo-router";
import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from "../config/api";
import * as SplashScreen from 'expo-splash-screen';

type User = {
  name: string;
  email: string;
}

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

function useProtectedRoute(user: any) {
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/onboarding");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/(tabs)/home");
    }
  }, [user, segments]);
}

export function AuthProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // lógica para saber se o usuário está logado ou não
    (async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      // console.log("🚀 ~ file: AuthProvider.tsx:50 ~ accessToken:", accessToken)
      // console.log("🚀 ~ file: AuthProvider.tsx:51 ~ refreshToken:", refreshToken)

      if (accessToken && refreshToken) {
        api.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        // Lógica para validar accessToken e se preciso atualiza-lo com o refreshToken
      }

      await new Promise(resolve => setTimeout(resolve, 5000));

      // console.warn('está feito');

      setIsReady(true);
      await SplashScreen.hideAsync();
    })();
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
  )
}
