import React from 'react'
import { THEME } from "./theme";
import { Platform } from 'react-native'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "./components/AppHeaderIcon";

export const navigationOptions = (navigation) => ({
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item title="Menu" iconName="ios-menu" onPress={() => navigation.openDrawer()} />
        </HeaderButtons>
    ),
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
    },
    headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
})