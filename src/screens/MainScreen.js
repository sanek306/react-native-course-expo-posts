import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { navigationOptions } from '../navigationOptions';
import { loadPosts } from '../store/actions/post';
import { THEME } from '../theme';

export const MainScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const allPosts = useSelector(state => state.posts.allPosts);
    const loading = useSelector(state => state.posts.loading);
    
    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);


    const openPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date })
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Мой блог',
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item title="Take photo" iconName="ios-camera" onPress={() => navigation.jumpTo('CreateDrawer')} />
                </HeaderButtons>
            ),
            ...navigationOptions(navigation)
        });
    }, [navigation]);

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color={THEME.MAIN_COLOR}/>
            </View>
        )
    }

    return (
        <PostList data={allPosts} onClick={openPostHandler} />
    ) 
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})