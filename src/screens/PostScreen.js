import React from 'react'
import {View, StyleSheet, Text, Image, Button, ScrollView, Alert} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { THEME } from '../theme';
import { navigationOptions } from '../navigationOptions';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBooked } from '../store/actions/post';

export const PostScreen = ({ route, navigation }) => {
    const allPosts = useSelector(state => state.posts.allPosts);
    const { postId, date } = route.params;
    const post = allPosts.find(p => p.id === postId);
    const iconName = post.booked ? 'ios-star' : 'ios-star-outline';
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: `Пост от ${new Date(date).toLocaleDateString()}`,
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="Set Booked" iconName={iconName} onPress={() => dispatch(toggleBooked(postId))} />
                </HeaderButtons>
            ),
            ...navigationOptions(navigation)
        });
    }, [navigation, iconName]);

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