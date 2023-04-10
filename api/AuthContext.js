import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseconfig";
import React, { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Authcontext = createContext();

export const AuthProvider = ({ children }) => {
  const [isloading, SetisLoading] = useState(false);
  const [token, SetToken] = useState(null);
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const Register = (email, pass) => {
    SetisLoading(true);
    createUserWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        const usercred = res.user;
        SetisLoading(false);
        SetToken(usercred.stsTokenManager.accessToken);
        AsyncStorage.setItem("userInfo", JSON.stringify(usercred));
        //AsyncStorage.setItem("Token", usercred.stsTokenManager.accessTokenen);
        console.log(usercred.stsTokenManager.accessToken);
      })
      .catch((error) => {
        alert(error.message);
        SetisLoading(false);
      });
  };

  const Signin = (email, pass) => {
    SetisLoading(true);
    signInWithEmailAndPassword(auth, email, pass)
      .then((res) => {
        const usercred = res.user;
        SetisLoading(false);
        SetToken(usercred.stsTokenManager.accessToken);
        AsyncStorage.setItem("userInfo", JSON.stringify(usercred));
        AsyncStorage.setItem("Token", usercred.stsTokenManager.accessToken);
        console.log(usercred.stsTokenManager.accessToken);
      })
      .catch((err) => {
        alert(err.message);
        SetisLoading(false);
      });
  };

  const Signout = () => {
    SetisLoading(true);
    signOut(auth).then((res) => {
      console.log("Signed out");
      SetToken(null);
      SetisLoading(false);
      SetisLoading(false);
    });
  };

  const UploadData = async (name, roll, semester) => {
    const firestore = getFirestore();
    const studentref = collection(firestore, "students");
    try {
      const doc = await addDoc(studentref, {
        Name: name,
        Roll_Number: roll,
        Semester: semester,
        Timestamp: Timestamp.fromDate(new Date()),
      });
      alert("Data Uploaded Successfully");
    } catch (error) {
      alert("Error Uploading Data");
    }
  };
  return (
    <Authcontext.Provider
      value={{ Register, Signin, isloading, token, Signout, UploadData }}
    >
      {children}
    </Authcontext.Provider>
  );
};
