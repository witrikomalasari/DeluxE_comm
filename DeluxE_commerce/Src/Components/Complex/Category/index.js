import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Category({ titleCategory, source }) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={{
          marginBottom: 15,
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
        <Text style={styles.txt}>{titleCategory}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "14%",
    height: "78%",
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginHorizontal: 8,
    alignItems: "center",
  },
  txt: {
    width: "85%",
    fontSize: 13,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
