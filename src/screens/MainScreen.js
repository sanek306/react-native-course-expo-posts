import React, { useEffect } from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { navigationOptions } from '../navigationOptions';
import { loadPosts } from '../store/actions/post';

export const MainScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const allPosts = useSelector(state => state.posts.allPosts);
    
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

    return (
        <PostList data={allPosts} onClick={openPostHandler} />
    ) 
}
