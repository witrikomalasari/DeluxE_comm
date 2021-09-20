import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Search({ name, placeholder }) {
  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.icon}
        name="search-outline"
        size={23}
        color={"black"}
      />
      <TextInput
        style={{ paddingLeft: 5 }}
        name={name}
        placeholder={placeholder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "65%",
    height: 35,
    backgroundColor: "#F4F4F4",
    borderRadius: 8,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 25,
    height: 20,
  },
});
