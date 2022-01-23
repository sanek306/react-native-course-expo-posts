import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { Ionicons } from '@expo/vector-icons'
import { Platform } from 'react-native'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BookedStackScreen } from './BookedStackScreen';
import { PostStackScreen } from './PostStackScreen';
import { THEME } from '../theme';

const Tab = (
  Platform.OS === 'android' 
  ? createMaterialBottomTabNavigator
  : createBottomTabNavigator
)();

export const TabsNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'PostBottom') {
          iconName = 'ios-albums';
        } else if (route.name === 'BookedBottom') {
          iconName = 'ios-star';
        }
        return <Ionicons name={iconName} size={25} color={color} />;
      },
      headerShown: false,
      tabBarActiveTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
      tabBarStyle: Platform.OS === 'android' ? {
        backgroundColor: THEME.MAIN_COLOR
      } : null
    })}
  >
    <Tab.Screen
      name="PostBottom"
      options={{
        tabBarLabel: 'Все',
      }}
      component={PostStackScreen}
    />
    <Tab.Screen 
      name="BookedBottom" 
      options={{
        tabBarLabel: 'Избранное'
      }}
      component={BookedStackScreen} 
    />
  </Tab.Navigator>
)