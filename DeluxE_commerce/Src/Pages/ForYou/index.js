import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ForYou() {
  return (
    <View style={styles.container}>
      <Text>For you</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
