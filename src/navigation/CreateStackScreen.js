import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CreateScreen } from '../screens/CreateScreen';

const CreateStack = createNativeStackNavigator();

export const CreateStackScreen = () => (
    <CreateStack.Navigator>
        <CreateStack.Screen name="Create" component={CreateScreen} />
    </CreateStack.Navigator>
);