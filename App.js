import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { AppNavigation } from './src/navigation/AppNavigation';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(async () => {
    await Font.loadAsync({
      'open-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    })
    setIsReady(true)
  }, [])

  if (!isReady) {
    return (
      <AppLoading />
    )
  }

  return (
    <AppNavigation />
  );
}
