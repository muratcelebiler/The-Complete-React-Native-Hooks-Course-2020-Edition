import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Screen"
      />

      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Screen"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
