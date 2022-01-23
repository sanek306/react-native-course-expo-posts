import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";

const PostStack = createNativeStackNavigator();

export const PostStackScreen = () => (
    <PostStack.Navigator>
        <PostStack.Screen name="Main" component={MainScreen} />
        <PostStack.Screen 
            name="Post"
            component={PostScreen}
        />
    </PostStack.Navigator>
);