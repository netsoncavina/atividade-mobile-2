import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Aleatorio = ({ min, max }) => {
  let numeros = [];
  for (let i = 0; i < 5; i++) {
    let numero = Math.floor(Math.random() * (max - min + 1)) + min;
    numeros.push(numero);
  }

  return (
    <View>
      <Text>Lista de números sorteados </Text>
      <View style={styles.numeros}>
        {numeros.map((numero) => (
          <Text>{numero} </Text>
        ))}
      </View>
      <Text>Menor número: {Math.min(...numeros)}</Text>
      <Text>Maior número: {Math.max(...numeros)}</Text>
    </View>
  );
};

export default Aleatorio;

const styles = StyleSheet.create({
  numeros: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 200,
    height: 50,
    marginTop: 15,
  },
});
