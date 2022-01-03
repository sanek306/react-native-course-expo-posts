import React from 'react'
import {View, Text, FlatList, StyleSheet } from 'react-native'
import { Post } from '../components/Post';
import { DATA } from "../data";

export const MainScreen = ({ navigation }) => {

    const goToPost = () => {
        navigation.navigate('Post')
    }

    return (
        <View style={styles.center}>
            <FlatList 
                data={DATA}
                key={(post) => post.id.toString()}
                renderItem={({ item }) => (
                    <Post post={item} />
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