import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title="Increase" onPress={() => onIncrease()} />
      <Button title="Decrease" onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
