import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { navigationOptions } from '../navigationOptions';

export const CreateScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Создать пост',
            ...navigationOptions(navigation)
        });
    }, [navigation]);


    return (
        <View style={styles.center}>
            <Text>
                CreateScreen
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