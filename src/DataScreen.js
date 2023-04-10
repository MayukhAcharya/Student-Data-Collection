import { View, Text, StyleSheet } from "react-native";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";

export default function DataScreen() {
  const [userData, SetuserData] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const getData = async () => {
      const dataref = collection(db, "students");
      const datasnapshot = await getDocs(dataref);
      const data = datasnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      SetuserData(data);
    };
    getData();
  }, []);
  return (
    <View style={styles.container}>
      {userData.map((user) => (
        <Text
          key={user.id}
          style={{
            justifyContent: "center",
            textAlign: "center",
            margin: 20,
            fontSize: 18,
          }}
        >
          Name of the Student :{JSON.stringify(user.Name)}
          {"\n"}
          Roll Number:{JSON.stringify(user.Roll_Number)}
          {"\n"}
          Semester:{JSON.stringify(user.Semester)}
        </Text>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
});
