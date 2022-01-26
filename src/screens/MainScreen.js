import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { AppHeaderIcon } from '../components/AppHeaderIcon';
import { PostList } from '../components/PostList';
import { DATA } from "../data";
import { navigationOptions } from '../navigationOptions';

export const MainScreen = ({ navigation }) => {
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
        <PostList data={DATA} onClick={openPostHandler} />
    ) 
}
