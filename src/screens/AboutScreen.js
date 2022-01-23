import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { navigationOptions } from '../navigationOptions';

export const AboutScreen = ({ navigation }) => {

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'О приложении',
            ...navigationOptions(navigation)
        });
    }, [navigation]);

    return (
        <View style={styles.center}>
            <Text>
                AboutScreen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})