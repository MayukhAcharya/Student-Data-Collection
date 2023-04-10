import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { TextInput } from "react-native-paper";
import { Authcontext } from "../api/AuthContext";
import Spinner from "react-native-loading-spinner-overlay";
const { height, width } = Dimensions.get("window");

export default function RegisterScreen() {
  const [email, SetEmail] = useState("");
  const [name, Setname] = useState("");
  const [pass, Setpass] = useState("");
  const [secureTextEntry, isSecureTextEntry] = useState(true);
  const { Register, isloading } = useContext(Authcontext);

  return (
    <View style={styles.container}>
      <Text style={styles.WelcomeText}>Register</Text>
      <Spinner visible={isloading} color="red" />
      <TextInput
        placeholder="Full Name"
        mode="outlined"
        value={name}
        activeOutlineColor="black"
        outlineColor="gray"
        theme={{ roundness: 15 }}
        keyboardType="email-address"
        onChangeText={(value) => Setname(value)}
        style={styles.textinput}
      />
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
      {name === "" || email === "" || pass === "" ? (
        <TouchableOpacity disable={true} style={styles.DisableRegisterButton}>
          <Text style={styles.RegisterText}>Register</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.RegisterButton}
          onPress={() => Register(email, pass, name)}
        >
          <Text style={styles.RegisterText}>Register</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  WelcomeText: {
    fontSize: 30,
    top: width / 3,
    textAlign: "center",
    fontWeight: "500",
  },
  textinput: {
    margin: 10,
    padding: 2,
    width: width / 1.2,
    height: height / 16,
    backgroundColor: "white",
    top: width / 2.1,
  },
  RegisterButton: {
    backgroundColor: "#2887e0",
    width: width / 1.2,
    height: height / 16,
    borderRadius: 60,
    marginTop: 15,
    top: width / 2,
    justifyContent: "center",
  },
  RegisterText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "sans-serif-light",
  },
  DisableRegisterButton: {
    backgroundColor: "red",
    width: width / 1.2,
    height: height / 16,
    borderRadius: 60,
    marginTop: 15,
    top: width / 2,
    justifyContent: "center",
  },
});
