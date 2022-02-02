import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export const PhotoPicker = ({ setImage }) => {
  const [image, setImagePhotoPicker] = useState(null);
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const takePhoto = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: false,
        aspect: [16, 9],
        quality: 0.7,
      });
  
      if (!result.cancelled) {
        setImagePhotoPicker(result.uri);
        setImage(result.uri);
      }
  };

  useEffect(() => {
    if (!status) {
      requestPermission();
    }
  }, [])
  
  return (
    <View style={styles.wrapper}>
      <Button title='Выбрать фото' onPress={takePhoto}/>
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  )
}


const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
    width: '100%'
  },
  image: {
    display: 'flex',
    width: '100%',
    height: 200
  }
})