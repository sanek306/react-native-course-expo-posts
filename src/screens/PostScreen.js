import React from 'react'
import {View, StyleSheet, Text, Image, Button, ScrollView, Alert} from 'react-native'
import { DATA } from '../data'
import { THEME } from '../theme';

export const PostScreen = ({ navigation }) => {
    const postId = navigation.getParam('postId');

    const post = DATA.find(p => p.id === postId)

    const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            "Вы уверены?",
            [
                {
                    text: "Отменить",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { 
                    text: "Да", 
                    style: "destructive",
                    onPress: () => console.log("OK Pressed") 
                }
            ]
        );
    }

    return (
        <ScrollView>
            <Image 
                source={{ uri: post.img }}
                style={styles.image}
            />
            <View style={styles.textWrap}>
                <Text style={styles.title}>
                    {post.text}
                </Text>
            </View>
            <Button title='Удалить' onPress={removeHandler} color={THEME.DANGER_COLOR} />
        </ScrollView>
    )
}

PostScreen.navigationOptions = ({ navigation }) => {
    const date = navigation.getParam('date');

    return {
        headerTitle: `Пост от ${new Date(date).toLocaleDateString()}`,
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        fontFamily: 'open-regular'
    }
})