import React from "react";
import { View, StyleSheet, FlatList} from "react-native";
import { Post } from "./Post";

export const PostList = ({ data, onClick }) => {

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
        justifyContent: 'center',
    }
})