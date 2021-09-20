import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase/app";
import React from "react";
import { LogBox } from "react-native";
import { Provider } from "react-redux";
import store from "./Src/Redux/Store";
import Roots from "./Src/Roots";

const firebaseConfig = {
  apiKey: "AIzaSyBoeseoquyTgLiRzvMbWILXhQArUW40foM",
  authDomain: "deluxe-commerce-d80a5.firebaseapp.com",
  projectId: "deluxe-commerce-d80a5",
  storageBucket: "deluxe-commerce-d80a5.appspot.com",
  messagingSenderId: "371095075709",
  appId: "1:371095075709:web:2c3895f3c0c9f08f59ea14",
  measurementId: "G-V0YVLCKHLK",
};

//initialize firebase
if (!firebase.apps.length) {
  console.log(firebase);
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  // LogBox.ignoreLogs(["Warning: "]); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Roots />
      </NavigationContainer>
    </Provider>
  );
}
