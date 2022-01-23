import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AboutScreen } from '../screens/AboutScreen';

const AboutStack = createNativeStackNavigator();

export const AboutStackScreen = () => (
    <AboutStack.Navigator>
        <AboutStack.Screen name="About" component={AboutScreen} />
    </AboutStack.Navigator>
);