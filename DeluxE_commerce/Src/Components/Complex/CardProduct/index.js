import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function CardProduct({ source, productName, price }) {
  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <Image style={styles.image} source={source} />
      </View>
      <View>
        <Text style={styles.txt}>{productName}</Text>

        <Text
          style={[
            styles.txt,
            { paddingTop: 10, paddingBottom: 5, fontWeight: "700" },
          ]}
        >
          $ {price}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 130,
    height: "100%",
    borderWidth: 1.5,
    alignItems: "center",
    marginLeft: 10,
    borderRadius: 10,
    borderColor: "#F2F2F2",
  },
  wrap: {
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F2F2F2",
    borderRadius: 10,
    paddingTop: 10,
  },
  image: {
    width: "95%",
    height: 100,
    resizeMode: "center",
  },
  txt: {
    paddingHorizontal: 10,
    paddingTop: 5,
    fontWeight: "600",
  },
});
