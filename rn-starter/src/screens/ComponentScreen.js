// React ve react-native pluginlerini dahil ediyoruz
import React from 'react';
import {Text, StyleSheet} from 'react-native';

// Component oluşturma
const ComponentsScreen = () => {
    return <Text style={styles.textStyle}>Component test</Text>
};

// Stil(style) oluşturma
const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

// Component'i export etmek
export default ComponentsScreen;