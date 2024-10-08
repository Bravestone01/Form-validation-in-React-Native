import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [agrErr, setAgeErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const saveData = async () => {
    if (!name) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    if (!age) {
      setAgeErr(true);
    } else {
      setAgeErr(false);
    }
    if (!email) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    if (!name || !email || !age) {
      return false
    }
    const url = "http://192.168.100.130:3000/users";
    let resutl = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, age }),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.maintext}>Post Api Call</Text>
      <TextInput
        placeholder="Enter name"
        style={styles.input}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {nameErr?<Text style={styles.err}>Please Enter Valid Name</Text>:null}
      <TextInput
        placeholder="Enter Email"
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {emailErr?<Text style={styles.err}>Please Enter Valid Email</Text>:null}
      <TextInput
        placeholder="Enter Age"
        style={styles.input}
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      {agrErr?<Text style={styles.err}>Please Enter Valid Age</Text>:null}
      <TouchableOpacity onPress={saveData}>
        <Text style={styles.btn}>Save Data</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  err:{
    color:'red',
    marginLeft:20,
    marginTop:-15,
  },
  input: {
    borderColor: "skyblue",
    borderWidth: 2,
    margin: 20,
    fontSize: 20,
    padding: 10,
  },
  maintext: {
    fontSize: 25,
    textAlign: "center",
    backgroundColor: "lightblue",
    padding: 20,
    paddingTop: 50,
  },
  btn: {
    backgroundColor: "blue",
    color: "white",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
    padding: 8,
    margin: 10,
  },
});
