import React from 'react';
import {
  useFonts,
  Rajdhani_700Bold,
  Rajdhani_500Medium
} from '@expo-google-fonts/rajdhani';
import {
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter';

import AppLoading from 'expo-app-loading';

import { StatusBar } from 'react-native';
import { Signin } from './src/Screens/Signin';
import { Home } from './src/Screens/Home';
import { Background } from './src/Components/Background';
import { Routes } from './src/routes';
import { AuthContext, AuthProvider } from './src/hooks/auth';

export default function App() {
  const [isLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!isLoaded) {
    return <AppLoading />
  }

  return (
    <Background >
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Background>

  );
}
