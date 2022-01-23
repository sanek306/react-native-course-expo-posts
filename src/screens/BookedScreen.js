import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { DATA } from "../data";
import { navigationOptions } from '../navigationOptions';

export const BookedScreen = ({ navigation }) => {
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
        <PostList data={DATA.filter(post => post.booked)} onClick={openPostHandler} />
    ) 
}
