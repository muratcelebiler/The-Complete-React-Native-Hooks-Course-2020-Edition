import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
    return (
        <View>
            <SearchBar />
            <Text>Search screen test</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;