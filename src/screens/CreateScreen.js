import React, { useState } from 'react'
import {View, Text, StyleSheet, TextInput, Image, Button, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useDispatch } from 'react-redux';
import { PhotoPicker } from '../components/PhotoPicker';
import { navigationOptions } from '../navigationOptions';
import { addPost } from '../store/actions/post';
import { THEME } from '../theme';

export const CreateScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const [img, setImage] = useState(null);
    const dispatch = useDispatch();

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Создать пост',
            ...navigationOptions(navigation)
        });
    }, [navigation]);

    const saveHandler = () => {  
        dispatch(addPost({ 
            img,
            date: new Date().toJSON(),
            text,
            booked: false
        }))

        navigation.navigate('Main');
    }

    return (
        <ScrollView >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>
                        Создай новый пост
                    </Text>
                    <TextInput 
                        style={styles.textArea}
                        placeholder='Введите текст поста'
                        value={text}
                        onChangeText={setText}
                        multiline
                    />
                    <PhotoPicker setImage={setImage} />
                    <Button 
                        title='Создать пост' 
                        color={THEME.MAIN_COLOR} 
                        onPress={saveHandler}
                        disabled={!img || !text}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
    },
    title: {
        fontSize: 20,
        fontFamily: 'open-regular',
        marginVertical: 10
    },
    textArea: {
        width: '100%',
        paddingVertical: 10
    },
    img: { 
        width: '100%',
        height: 200,
        marginBottom: 10
    }
})