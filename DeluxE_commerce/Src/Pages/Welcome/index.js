import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundOpening from "../../Assets/Images/background.png";
import ButtonCustoms from "../../Components/Simple/Button";
import Gap from "../../Components/Simple/Gap";
import OpeningLayout from "../../Components/Simple/SignUp&In";

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <OpeningLayout backgrounds={BackgroundOpening} height={667} />
      <View>
        <Text style={styles.txt}>Welcome</Text>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          borderTopStartRadius: 30,
          borderTopEndRadius: 30,
          position: "absolute",
          bottom: 0,
        }}
      >
        <View style={{ padding: 25 }}>
          <ButtonCustoms
            title="Register"
            type="withColor"
            onPress={() => navigation.navigate("SignUp")}
          />
          <Gap height={10} />

          <ButtonCustoms
            title="Log In"
            type="noColor"
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txt: {
    fontSize: 48,
    color: "#ffffff",
    bottom: 520,
    paddingLeft: 40,
    fontWeight: "400",
  },
});
