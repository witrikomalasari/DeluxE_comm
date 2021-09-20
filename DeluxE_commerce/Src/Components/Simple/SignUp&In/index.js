import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function OpeningLayout({ backgrounds, height, bottom }) {
  // console.log(backgrounds);
  return (
    <View style={styles.container}>
      <Image style={styles.image(height, bottom)} source={backgrounds} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  image: (height, bottom) => ({
    width: "100%",
    height: height,
    bottom: bottom,
  }),
});
