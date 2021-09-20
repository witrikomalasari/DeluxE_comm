import React, { useEffect } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import SplashScreen from "../../Assets/Images/Splash.png";

export default function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Welcome");
    }, 2000);
  }, []);

  return <ImageBackground style={styles.image} source={SplashScreen} />;
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
