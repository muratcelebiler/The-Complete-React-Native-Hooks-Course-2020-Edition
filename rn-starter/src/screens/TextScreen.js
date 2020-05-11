import React, { useState } from "react";
import { Text, StyleSheet, TextInput, View } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
    </View>
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
