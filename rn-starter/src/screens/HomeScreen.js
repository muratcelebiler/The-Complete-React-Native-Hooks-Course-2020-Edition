import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button
        onPress={() => console.log("Test")}
        title="Go to Components Demo"
      />

      <TouchableOpacity onPress={() => console.log("Touchable opacity")}>
        <Text>Touchable opacity text</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
