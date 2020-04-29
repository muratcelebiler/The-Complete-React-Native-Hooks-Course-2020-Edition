import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// ImageDetail componentini import ediyoruz
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return <View>
        <ImageDetail />
        <ImageDetail />
        <ImageDetail />
        <ImageDetail />
    </View>;
};

const styles = StyleSheet.create({});

export default ImageScreen;