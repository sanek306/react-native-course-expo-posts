import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from './src/screens/MainScreen';
import { PostScreen } from './src/screens/PostScreen';
import { BookedScreen } from './src/screens/BookedScreen';
import { THEME } from './src/theme';
import { OverflowMenuProvider } from 'react-navigation-header-buttons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();


const PostStack = createNativeStackNavigator();

function PostStackScreen() {
  return (
    <PostStack.Navigator
      initialRouteName='Main'
      screenOptions={{
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
        headerBackTitleVisible: false,
      }}
    >
      <PostStack.Screen name="Main" component={MainScreen} />
      <PostStack.Screen 
        name="Post"
        component={PostScreen}
      />
    </PostStack.Navigator>
  );
}

const BookedStack = createNativeStackNavigator();

function BookedStackScreen() {
  return (
    <BookedStack.Navigator
      initialRouteName='Booked'
      screenOptions={{
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
        headerBackTitleVisible: false,
      }}
    >
      <BookedStack.Screen name="Booked" component={BookedScreen} />
      <BookedStack.Screen name="Post" component={PostScreen} />
    </BookedStack.Navigator>
  );
}

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
            tabBarActiveTintColor: THEME.MAIN_COLOR,
          })}
        >
          <Tab.Screen
            name="PostBottom"
            component={PostStackScreen}
          />
          <Tab.Screen 
            name="BookedBottom" 
            component={BookedStackScreen} 
          />
        </Tab.Navigator>
      </OverflowMenuProvider>
    </NavigationContainer>
  );
}