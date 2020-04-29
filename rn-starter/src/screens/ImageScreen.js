import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// ImageDetail componentini import ediyoruz
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail title="Image 1" />
        <ImageDetail title="Image 2" />
        <ImageDetail title="Image 3" />
    </View>;
};

const styles = StyleSheet.create({});

export default ImageScreen;