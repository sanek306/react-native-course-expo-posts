import React from 'react'
import {View, Text, FlatList, StyleSheet } from 'react-native'
import { Post } from '../components/Post';
import { DATA } from "../data";

export const MainScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date })
    }

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

MainScreen.navigationOptions = {
    headerTitle: 'Мой блок',
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
    }
})