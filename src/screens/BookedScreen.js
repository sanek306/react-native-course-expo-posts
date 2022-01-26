import React from 'react';
import { useSelector } from 'react-redux';
import { PostList } from '../components/PostList';
import { navigationOptions } from '../navigationOptions';

export const BookedScreen = ({ navigation }) => {
    const bookedPosts = useSelector(state => state.posts.bookedPosts)
    const openPostHandler = post => {
        navigation.navigate('Post', { postId: post.id, date: post.date })
    }

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Избранное',
            ...navigationOptions(navigation)
        });
    }, [navigation]);

    return (
        <PostList data={bookedPosts} onClick={openPostHandler} />
    ) 
}
