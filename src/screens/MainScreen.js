import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { Post } from '../components/Post';
import { DATA } from "../data";

export const MainScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date })
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'Мой блог',
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="Take photo" iconName="ios-camera" onPress={() => alert('Press photo')} />
                </HeaderButtons>
            ),
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="Menu" iconName="ios-menu" onPress={() => alert('Press photo')} />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.center}>
            <FlatList 
                data={DATA}
                key={(post) => post.id.toString()}
                renderItem={({ item }) => (
                    <Post post={item} onOpen={openPostHandler} />
                )}
            />
        </View>
    ) 
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
    }
})