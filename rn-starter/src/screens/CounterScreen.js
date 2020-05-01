// state kullanabilmek için useState yapısını dahil ediyoruz
import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  /**
   * counter değişkenini değiştirmek için bir fonksiyon(setCounter) oluşturmamız gerekiyor.
   * Oluşturduğumuz fonksiyonun adı set kelimesi ile başlamak zorunda değil! Herhangi bir isim yazabiliriz! Burada önemli olan ikinci parametrenin bir fonksiyon olduğunu anlamak.
   * Set ettiğimiz fonksiyonda(setCounter) tanımladığımız değişkenin(counter) değerini değiştirebiliyoruz.
   */
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button title="Increase" onPress={() => setCounter(counter + 1)} />
      <Button title="Decrease" onPress={() => setCounter(counter - 1)} />
      <Text>Counter Default: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
