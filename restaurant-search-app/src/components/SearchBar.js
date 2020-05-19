import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Text>Search bar screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: "#CCC",
        height: 50,
        borderRadius:5,
        marginHorizontal:15
    }
});

export default SearchBar;