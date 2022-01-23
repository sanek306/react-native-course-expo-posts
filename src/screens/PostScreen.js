import React from 'react'
import {View, StyleSheet, Text, Image, Button, ScrollView, Alert} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { DATA } from '../data'
import { THEME } from '../theme';

export const PostScreen = ({ route, navigation }) => {
    const { postId, date } = route.params;
    const post = DATA.find(p => p.id === postId)
    const iconName = post.booked ? 'ios-star' : 'ios-star-outline';

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: `Пост от ${new Date(date).toLocaleDateString()}`,
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
            },
            headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="Take photo" iconName={iconName} onPress={() => alert('Press photo')} />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

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