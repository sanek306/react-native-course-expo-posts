import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabsNavigator } from './src/navigation/Tabs';
import { AboutStackScreen } from './src/navigation/AboutStackScreen';
import { CreateStackScreen } from './src/navigation/CreateStackScreen';

const Drawer = createDrawerNavigator();

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
        <Drawer.Navigator
          screenOptions={() => ({
            headerShown: false,
          })}
        >
          <Drawer.Screen 
            name="TabsDrawer" 
            component={TabsNavigator}
            options={{
              drawerLabel: 'Главная'
            }}
          />
          <Drawer.Screen
            name="AboutDrawer"
            component={AboutStackScreen}
            options={{
              drawerLabel: 'Информация'
            }}
          />
          <Drawer.Screen
            name="CreateDrawer"
            component={CreateStackScreen}
            options={{
              drawerLabel: 'Создать пост'
            }}
          />
        </Drawer.Navigator>
      </OverflowMenuProvider>
    </NavigationContainer>
  );
}