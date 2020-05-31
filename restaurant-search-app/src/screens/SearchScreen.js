import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

    const SearchApi = async () => {
        console.log("Hi There")
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: "san jose"
                }
            });
            setResults(response.data.businesses)
        } catch(err) {
            setErrorMessage("Something went wrong!")
        }
    };

    /**
     * useEffect ile fonksiyonun bir kez çalıştırılması sağlanır. İkinci parametreye([]) extra bir değer yazarsak o değer değişimce fonksiyon(useEffect) tetiklenir.
     * Şu anda bu yapıyı çalıştırdığımızda yukarıda konsola yazdığımız Hi There yazısı bir kerelik görüntülenmiş olacaktır.
     */
    useEffect(() => {
        SearchApi('pasta');
    }, []);

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={SearchApi}
             />
            <Text>We have found {results.length} results</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;