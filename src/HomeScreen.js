import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useContext, useState } from "react";
import { Authcontext } from "../api/AuthContext";
import { Button } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";
import { TextInput } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import WavyFooter from "../Components/Footer";
const { height, width } = Dimensions.get("window");

export default function HomeScreen({ navigation }) {
  const [Name, Setname] = useState("");
  const [roll, SetRoll] = useState(null);
  const [semester, SetSemester] = useState(null);
  const { Signout, isloading, UploadData } = useContext(Authcontext);

  return (
    <View style={styles.container}>
      <Spinner visible={isloading} color="red" />
      <Text style={styles.HeaderText}>Student Data Collection</Text>
      <TextInput
        placeholder="Name"
        mode="outlined"
        value={Name}
        activeOutlineColor="black"
        outlineColor="gray"
        theme={{ roundness: 15 }}
        //keyboardType="email-address"
        onChangeText={(value) => Setname(value)}
        style={styles.textinput}
      />
      <TextInput
        placeholder="Roll Number"
        mode="outlined"
        value={roll}
        activeOutlineColor="black"
        outlineColor="gray"
        theme={{ roundness: 15 }}
        //keyboardType="email-address"
        onChangeText={(value) => SetRoll(value)}
        style={styles.textinput}
      />
      <TextInput
        placeholder="Semester"
        mode="outlined"
        value={semester}
        activeOutlineColor="black"
        outlineColor="gray"
        theme={{ roundness: 15 }}
        keyboardType="decimal-pad"
        onChangeText={(value) => SetSemester(value)}
        style={styles.textinput}
      />
      {Name === "" || roll === "" || semester === "" ? (
        <TouchableOpacity style={styles.LoginButtonDisable} disabled={true}>
          <Text style={styles.LoginText}>Upload My Data</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.LoginButton}
          onPress={() => UploadData(Name, roll, semester)}
        >
          <Text style={styles.LoginText}>Upload My Data</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.LoginButton}
        onPress={() => navigation.navigate("datascreen")}
      >
        <Text style={styles.LoginText}>See All Data</Text>
      </TouchableOpacity>
      {/* <Button title="Signout" onPress={() => Signout()} /> */}
      <TouchableOpacity
        style={{
          top: height / 3.5,
          backgroundColor: "#2887e0",
          width: width / 3.5,
          height: height / 16,
          borderRadius: 60,
          marginTop: 15,
          justifyContent: "center",
        }}
        onPress={() => Signout()}
      >
        <Text style={{ textAlign: "center", color: "white" }}>SignOut</Text>
      </TouchableOpacity>
      <WavyFooter customstyles2={styles.svgCurve} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  textinput: {
    margin: 10,
    padding: 2,
    width: width / 1.2,
    height: height / 16,
    backgroundColor: "white",
    top: width / 1.8,
  },
  LoginButton: {
    backgroundColor: "#2887e0",
    width: width / 1.2,
    height: height / 16,
    borderRadius: 60,
    marginTop: 15,
    top: width / 1.9,
    justifyContent: "center",
  },
  LoginText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontFamily: "sans-serif-light",
  },
  HeaderText: {
    fontSize: 30,
    top: width / 3,
    textAlign: "center",
    fontWeight: "500",
  },
  svgCurve: {
    position: "absolute",
    width: Dimensions.get("window").width,
  },
  LoginButtonDisable: {
    backgroundColor: "red",
    width: width / 1.2,
    height: height / 16,
    borderRadius: 60,
    marginTop: 15,
    top: width / 1.9,
    justifyContent: "center",
  },
});
