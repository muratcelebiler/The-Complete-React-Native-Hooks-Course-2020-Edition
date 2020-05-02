import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const ColorScreen = () => {
  return (
    <View>
      <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} />
    </View>
  );
};

// Rgb formatında random değerler üreten fonksiyon
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${blue}, ${green})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
