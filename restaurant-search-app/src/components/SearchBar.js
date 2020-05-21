import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" size={30} style={styles.iconStyle} />
            <TextInput
                autoCapitalize='none'
                autoCorrect={false}
                placeholder="Search" 
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 10,
        backgroundColor: "#CCC",
        height: 50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
    },
    inputStyle: {
        flex:1,
        fontSize: 18
    },
    iconStyle: {
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;