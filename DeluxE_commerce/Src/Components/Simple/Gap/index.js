import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Gap({ height }) {
  return <View style={styles.gap(height)}></View>;
}

const styles = StyleSheet.create({
  gap: (height) => ({
    width: "100%",
    height: height,
  }),
});
