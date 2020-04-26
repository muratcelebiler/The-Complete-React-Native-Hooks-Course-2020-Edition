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
        { name: "Friend 5" },
        { name: "Friend 6" },
        { name: "Friend 7" },
        { name: "Friend 8" },
        { name: "Friend 9" }
    ];

    return (
        /**
         * FlatList'de iki field yardımı ile datayı listeleyebiliriz. Bunlar data ve renderItem
         * data: Listelenecek array'i alır
         * renderItem: data field'ine gelen datayı listelemek için kullanılır. Php'de yer akan array_map olayı gibi
         * keyExtractor: Biz bu tanımlamayı yapmazsak friends array içerisinde herhangi bir data güncellenir veya silinerse react-native her defasında datayı tekrar build eder. keyExtractor ile her bir dataya unique bir key ataması yapıyoruz(Mysql'deki id kolonu gibi) Bu key sayesinde biz friends içerisinde herhangi bir datayı değişince react-native o item'e ait datayı key üzerinden tanıdığı için sadece o datayı günceller. Gelen datayı tekrar baştan buil etmez. Bu da performans açısından bizim için tercih edilmesi gereken yöntemdir!
         */
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={friend => friend.name}
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