import { FontAwesome } from "@expo/vector-icons";
import firebase from "firebase";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Signup from "../../Assets/Images/SignUp.png";
import Input from "../../Components/Complex/TextInput";
import Gap from "../../Components/Simple/Gap";
import OpeningLayout from "../../Components/Simple/SignUp&In";

export default function SignUp({ navigation, username, phone }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpen, setIsOpen] = useState("");

  const Regis = () => {
    const Data = {
      email,
      password,
      name,
      phoneNumber,
    };
    console.log(Data);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
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
        console.error({ errorCode });
        console.error({ errorMessage });
      });
  };

  return (
    <View style={styles.container}>
      <OpeningLayout backgrounds={Signup} height={400} bottom={120} />
      <View style={styles.title}>
        <Text style={styles.titleText}>Lets Start</Text>
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
        <Text style={styles.txt}>Sign Up</Text>
        <Input placeholder="Name" value={name} onChangeText={setName} />
        <Gap height={34} />
        <Input placeholder="Email" value={email} onChangeText={setEmail} />
        <Gap height={34} />
        <Input
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

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
        <Gap height={20} />

        <View style={styles.bottomakses}>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={[styles.bottomTxt, { color: "#FD4D4D" }]}>
              Already have an account ?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Regis(username, phone)}>
            <Text style={styles.bottomTxt}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Gap height={20} />
      </View>
    </View>
  );
}
// <BottomAccess />;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    bottom: 620,
    paddingLeft: 30,
  },
  titleText: {
    color: "#ffffff",
    fontWeight: "400",
    fontSize: 40,
  },
  txt: {
    padding: 36,
    fontWeight: "600",
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
