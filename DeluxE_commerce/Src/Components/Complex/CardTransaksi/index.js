import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CardTransaksi({ titleTransaksi, source }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={{
          marginBottom: 3,
          width: 45,
          height: 45,
        }}
        source={source}
      />
      <View
        style={{
          width: 80,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.txt}>{titleTransaksi}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "14%",
    height: "90%",
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 8,
    alignItems: "center",
    backgroundColor: "#F4F4F4",
  },
  txt: {
    width: "85%",
    fontSize: 13,
    color: "black",
    fontWeight: "600",
    textAlign: "center",
  },
});
