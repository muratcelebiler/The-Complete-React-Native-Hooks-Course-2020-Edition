import React from 'react';
// FlatList dahil ediyoruz
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    // Sabit bir array listesi oluşturuyoruz
    const friends = [
        { name: "Friend 1" },
        { name: "Friend 2" },
        { name: "Friend 3" },
        { name: "Friend 4" },
        { name: "Friend 5" }
    ];

    return (
        /**
         * FlatList'de iki field yardımı ile datayı listeleyebiliriz. Bunlar data ve renderItem
         * data: Listelenecek array'i alır
         * renderItem: data field'ine gelen datayı listelemek için kullanılır. Php'de yer akan array_map olayı gibi
         */
        <FlatList 
            data={friends}
            renderItem={({item}) => {
                return <Text>{item.name}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create({
    
});

export default ListScreen;