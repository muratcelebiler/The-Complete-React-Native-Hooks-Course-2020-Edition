// state kullanabilmek için useState yapısını dahil ediyoruz
import React, { useReducer } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// reducer fonksiyonu useReducer yapısı için oluşturulmuştur
const reducer = (state, action) => {
  // action içerisinden gelen type field'ini kontrol ediyoruz
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    default:
      return state.count;
  }
};

const CounterScreen = () => {
  /**
   * useReducer ile reducer yapısını dahil ediyoruz
   * state: json içerisindeki field'ları bir veritabanı gibi tutar
   * dispatch: reducer fonksiyonuna action olduğunu bildirerek action fieldını gönderir
   */
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      />
      <Text>Counter Default: {state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
