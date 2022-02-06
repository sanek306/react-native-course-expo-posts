import React from "react";
import { View, StyleSheet, FlatList, Text} from "react-native";
import { Post } from "./Post";

export const PostList = ({ data, onClick }) => {

    if (!data.length) {
        return (
            <View>
                <Text style={styles.noItems}>Постов пока нет...</Text>
            </View>
        )
    } 

    return (
        <View style={styles.center}>
            <FlatList 
                data={data}
                key={(post) => post.id.toString()}
                renderItem={({ item }) => (
                    <Post post={item} onOpen={onClick} />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center'
    },
    noItems: {
        fontFamily: 'open-regular',
        fontSize: 18,
        textAlign: 'center',
        padding: 10
    }
})