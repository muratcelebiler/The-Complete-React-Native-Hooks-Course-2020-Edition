import React from "react";
import { View, Text, StyleSheet } from "react-native";

// ImageDetail componentini import ediyoruz
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        title="Image 1"
        imageSource={require("../../assets/beach.jpg")}
      />
      <ImageDetail
        title="Image 2"
        imageSource={require("../../assets/forest.jpg")}
      />
      <ImageDetail
        title="Image 3"
        imageSource={require("../../assets/mountain.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
