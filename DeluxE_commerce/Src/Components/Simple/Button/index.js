import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ButtonCustoms({ title, type, onPress }) {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.txt(title, type)}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === "withColor" ? "#FD4D4D" : "white",
    borderColor: "#FD4D4D",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    borderRadius: 20,
  }),
  txt: (title, type) => ({
    fontWeight: "600",
    fontSize: 18,
    color:
      (title !== "Register" || title === "Beli Sekarang") && type === "noColor"
        ? "#FD4D4D"
        : "#ffffff",
  }),
});
