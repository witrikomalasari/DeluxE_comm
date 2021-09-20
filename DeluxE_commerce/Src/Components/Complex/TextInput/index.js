import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Input({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        style={styles.txtInput}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 33,
  },
  txtInput: {
    height: 35,
    borderBottomWidth: 1,
    fontSize: 18,
  },
});
