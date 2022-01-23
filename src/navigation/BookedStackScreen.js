import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BookedScreen } from "../screens/BookedScreen";
import { PostScreen } from "../screens/PostScreen";

const BookedStack = createNativeStackNavigator();

export const BookedStackScreen = () => {
  return (
    <BookedStack.Navigator
      initialRouteName='Booked'
    >
      <BookedStack.Screen name="Booked" component={BookedScreen} />
      <BookedStack.Screen name="Post" component={PostScreen} />
    </BookedStack.Navigator>
  );
}