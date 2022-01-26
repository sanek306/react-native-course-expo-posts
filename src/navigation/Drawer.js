import React from 'react';
import { Platform } from 'react-native'
import { AboutStackScreen } from './AboutStackScreen';
import { CreateStackScreen } from './CreateStackScreen';
import { TabsNavigator } from './Tabs';
import { THEME } from '../theme';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
  <Drawer.Navigator
    screenOptions={() => ({
      headerShown: false,
      drawerActiveTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
      drawerLabelStyle: {
        fontFamily: 'open-bold'
      }
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
        drawerLabel: 'О приложении'
      }}
    />
    <Drawer.Screen
      name="CreateDrawer"
      component={CreateStackScreen}
      options={{
        drawerLabel: 'Новый пост'
      }}
    />
  </Drawer.Navigator>
)