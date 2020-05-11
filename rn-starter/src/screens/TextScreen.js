import React from "react";
import { Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  return (
    /**
     * autoCapitalize: Bu property ile iOS'daki otomatik ilk harfi büyütme seçeneğini kapatıyoruz
     * autoCorrect: Bu property ile iOS'daki otomatik tamamlama özelliğini kapatıyoruz
     */
    <TextInput style={styles.input} autoCapitalize="none" autoCorrect={false} />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    margin: 15,
    borderWidth: 1,
  },
});

export default TextScreen;
