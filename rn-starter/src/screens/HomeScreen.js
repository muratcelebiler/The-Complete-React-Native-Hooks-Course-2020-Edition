import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components Screen"
      />

      <Button
        onPress={() => navigation.navigate("List")}
        title="Go to List Screen"
      />

      <Button
        onPress={() => navigation.navigate("Image")}
        title="Go to Image Screen"
      />

      <Button
        onPress={() => navigation.navigate("Counter")}
        title="Go to Counter Screen"
      />

      <Button
        onPress={() => navigation.navigate("Color")}
        title="Go to Color Screen"
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
