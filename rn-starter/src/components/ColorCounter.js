import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const ColorCounter = () => {
  return (
    <View>
      <Text>Red</Text>
      <Button title="Increase" />
      <Button title="Decrease" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
