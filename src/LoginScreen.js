import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useState } from "react";
import { TextInput } from "react-native-paper";
import { Authcontext } from "../api/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
const { height, width } = Dimensions.get("window");

export default function LoginScreen({ navigation }) {
  const [email, SetEmail] = useState("");
  const [pass, Setpass] = useState("");
  const [secureTextEntry, isSecureTextEntry] = useState(true);
  const { Signin, isloading } = useContext(Authcontext);
  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeText}>Welcome</Text>
      <Spinner visible={isloading} color="red" />
      <TextInput
        placeholder="Email"
        mode="outlined"
        value={email}
        activeOutlineColor="black"
        outlineColor="gray"
        theme={{ roundness: 15 }}
        keyboardType="email-address"
        onChangeText={(value) => SetEmail(value)}
        style={styles.textinput}
      />
      <TextInput
        placeholder="Password"
        mode="outlined"
        activeOutlineColor="black"
        outlineColor="gray"
        value={pass}
        theme={{ roundness: 15 }}
        secureTextEntry={secureTextEntry}
        onChangeText={(value) => Setpass(value)}
        right={
          <TextInput.Icon
            icon={isSecureTextEntry ? "eye" : "eye-off"}
            onPress={() => isSecureTextEntry(!secureTextEntry)}
          />
        }
        style={styles.textinput}
      />

      <TouchableOpacity
        style={styles.LoginButton}
        onPress={() => Signin(email, pass)}
      >
        <Text style={styles.LoginText}>Login</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 18, top: width / 1.95 }}>Or</Text>

      <TouchableOpacity
        style={styles.LoginButton}
        onPress={() => navigation.navigate("register")}
      >
        <Text style={styles.LoginText}>Register</Text>
        <StatusBar style="auto" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  textinput: {
    margin: 10,
    padding: 2,
    width: width / 1.2,
    height: height / 16,
    backgroundColor: "white",
    top: width / 2.1,
  },
  LoginButton: {
    backgroundColor: "#2887e0",
    width: width / 1.2,
    height: height / 16,
    borderRadius: 60,
    marginTop: 15,
    top: width / 2,
    justifyContent: "center",
  },
  LoginText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "sans-serif-light",
  },
  WelcomeText: {
    fontSize: 30,
    top: width / 3,
    textAlign: "center",
    fontWeight: "500",
  },
});
