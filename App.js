import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from './src/screens/MainScreen';
import { PostScreen } from './src/screens/PostScreen';
import { THEME } from './src/theme';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';

const Stack = createNativeStackNavigator()

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
    <NavigationContainer>
      <OverflowMenuProvider>
        <Stack.Navigator 
          initialRouteName='Main'
          screenOptions={ {
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
            },
            headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen 
            name="Post"
            component={PostScreen}
          />
        </Stack.Navigator>
      </OverflowMenuProvider>
    </NavigationContainer>
  );
}