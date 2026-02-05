import { useState } from "react";
import { View, Text, TextInput, Pressable, Alert, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { signIn } from "../../src/services/auth";

export default function Login() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Image source={require('../../assets/Logo.png')} style={styles.logo}/>

      <Text style={styles.title}>Login do Comerciante</Text>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#6c7f99"
          style={styles.input}
        />
      </View>

      <View style={styles.inputBox}>
        <TextInput
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="#6c7f99"
          style={styles.input}
        />
      </View>

      <Pressable
        onPress={() => router.replace("/(merchant)/dashboard")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1220",
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  logo:{
    width: 250,
    height: 250,
    marginBottom: 20
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 18,
  },
  inputBox: {
    backgroundColor: "#111b2e",
    borderRadius: 14,
    padding: 12,
    marginBottom: 14,
    width: "94%"
  },
  input: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#ff8a3d",
    padding: 14,
    borderRadius: 14,
    alignItems: "center",
    width: "94%"
  },
  buttonText: {
    color: "#111",
    fontWeight: "800",
  },
});