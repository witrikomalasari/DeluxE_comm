import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { TouchableOpacity } from "react-native";
import Detail from "../Pages/Detail";
import Feed from "../Pages/Feed";
import ForYou from "../Pages/ForYou";
import Home from "../Pages/Home";
import Notification from "../Pages/Notification";
import Profile from "../Pages/Profile";
import SignIn from "../Pages/SignIn";
import SignUp from "../Pages/SignUp";
import Splash from "../Pages/Splash";
import Welcome from "../Pages/Welcome";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Roots() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          title: null,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                style={{
                  paddingLeft: 18,
                }}
                name="arrowleft"
                size={25}
                color={"#ffffff"}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              style={{
                paddingRight: 18,
              }}
              name="dots-vertical"
              size={25}
              color={"#ffffff"}
            />
          ),
          headerBackground: () => {
            color: "#FD4D4D";
          },
        }}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: null,
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                style={{
                  paddingLeft: 18,
                }}
                name="arrowleft"
                size={25}
                color={"#ffffff"}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              style={{
                paddingRight: 18,
              }}
              name="dots-vertical"
              size={25}
              color={"#ffffff"}
            />
          ),
          headerBackground: () => {
            color: "#FD4D4D";
          },
        }}
      />

      <Stack.Screen
        name="BottomBar"
        component={BottomBar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: null,
          headerShown: true,
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                style={{
                  paddingLeft: 18,
                }}
                name="arrowleft"
                size={25}
                color={"#000000"}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <MaterialCommunityIcons
                style={{
                  paddingRight: 18,
                }}
                name="dots-vertical"
                size={25}
                color={"#000000"}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const BottomBar = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: "Discover",
        tabBarColor: "#ffffff",
        tabBarStyle: { paddingBottom: 3 },
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name="home-outline"
            size={28}
            style={{
              color: focused ? "#FD4D4D" : "#949494",
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Feed"
      component={Feed}
      options={{
        tabBarLabel: "Feed",
        tabBarColor: "#ffffff",
        tabBarStyle: { paddingBottom: 3 },
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name="format-list-bulleted"
            size={25}
            style={{
              color: focused ? "#FD4D4D" : "#949494",
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="ForYou"
      component={ForYou}
      options={{
        tabBarLabel: "For You",
        tabBarColor: "#ffffff",
        tabBarStyle: { paddingBottom: 3 },
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="gift-outline"
            size={25}
            style={{
              color: focused ? "#FD4D4D" : "#949494",
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Notification"
      component={Notification}
      options={{
        tabBarLabel: "Notification",
        tabBarColor: "#ffffff",
        tabBarStyle: { paddingBottom: 3 },
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="notifications-outline"
            size={25}
            style={{
              color: focused ? "#FD4D4D" : "#949494",
            }}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarLabel: "Profile",
        tabBarColor: "#ffffff",
        tabBarStyle: { paddingBottom: 5 },
        tabBarIcon: ({ focused }) => (
          <SimpleLineIcons
            name="user"
            size={24}
            style={{
              color: focused ? "#FD4D4D" : "#949494",
            }}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
