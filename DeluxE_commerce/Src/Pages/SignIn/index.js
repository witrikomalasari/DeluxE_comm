import { FontAwesome } from "@expo/vector-icons";
import firebase from "firebase";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Signin from "../../Assets/Images/SignIn.png";
import Input from "../../Components/Complex/TextInput";
import Gap from "../../Components/Simple/Gap";
import OpeningLayout from "../../Components/Simple/SignUp&In";

export default function SignIn({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOpen, setIsOpen] = useState("");

  const submitLogin = () => {
    const Data = {
      email,
      password,
    };
    console.log(Data);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.info({ user });
        navigation.replace("BottomBar", {
          username: user.email,
        });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error(errorCode);
        error(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <OpeningLayout backgrounds={Signin} height={470} bottom={120} />
      <View style={styles.title}>
        <Text style={styles.titleText}>Welcome Back</Text>
      </View>

      <View
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          borderTopStartRadius: 50,
          borderTopEndRadius: 50,
          position: "absolute",
          bottom: 0,
        }}
      >
        <Text style={styles.txt}>Sign In</Text>
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Gap height={34} />

        <View>
          <Input
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={isOpen ? false : true}
          />
          <FontAwesome
            onPress={() => setIsOpen(!isOpen)}
            name={isOpen ? "eye" : "eye-slash"}
            size={25}
            color="black"
            style={{
              position: "absolute",
              right: 40,
              bottom: 20,
            }}
          />
        </View>
        <Gap height={70} />

        <View style={styles.bottomakses}>
          <TouchableOpacity>
            <Text style={[styles.bottomTxt, { color: "#FD4D4D" }]}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              await submitLogin();
            }}
          >
            <Text style={styles.bottomTxt}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <Gap height={40} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    width: 258,
    height: 96,
    bottom: 550,
    paddingLeft: 30,
  },
  titleText: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 40,
  },
  txt: {
    padding: 36,
    fontWeight: "700",
    fontSize: 36,
  },
  bottomakses: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 0,
  },
  bottomTxt: {
    fontSize: 15,
    fontWeight: "700",
  },
});
