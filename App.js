import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';
import { DrawerNavigator } from './src/navigation/Drawer';
import { Provider } from 'react-redux';
import store from './src/store';
import { DB } from './src/db';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  useEffect(async () => {
    await Font.loadAsync({
      'open-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    })
    
    try {
      await DB.init()
      setIsReady(true)
    }
    catch (e) {
      console.log(e);
    }
  }, [])

  if (!isReady) {
    return (
      <AppLoading />
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <OverflowMenuProvider>
          <DrawerNavigator/>
        </OverflowMenuProvider>
      </NavigationContainer>
    </Provider>
  );
}