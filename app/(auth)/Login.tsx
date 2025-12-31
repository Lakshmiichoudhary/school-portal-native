import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import LoginIntro from "../screens/login/LoginIntro";

export default function Login() {
  const router = useRouter();

  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // if (!emailOrMobile || !password) return;

    router.replace("/(tabs)");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, gap: 50 }}
        keyboardShouldPersistTaps="handled"
      >
        <LoginIntro />

        <View style={styles.formContainer}>
          <Text style={styles.logo}>SCHOOL LOGO</Text>

          <View style={styles.heading}>
            <Text style={styles.title}>Welcome Back!</Text>
            <Text style={styles.subtitle}>
              Great to see you again! Sign in to keep your school operations
              running smoothly.
            </Text>
          </View>

          <View style={styles.form}>
            <TextInput
              placeholder="Email address"
              placeholderTextColor="#9CA3AF"
              value={emailOrMobile}
              onChangeText={setEmailOrMobile}
              style={styles.input}
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />

            <Text style={styles.forgot}>Forgot password?</Text>

            <Pressable style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    backgroundColor: "#fff",
  },

  formContainer: {
    flex: 1,
    paddingHorizontal: 24,
  },

  logo: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "600",
    color: "#2563EB",
    marginBottom: 28,
  },

  heading: {
    alignItems: "center",
    marginBottom: 32,
    color: "#484848",
    fontWeight: "600",
  },

  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#374151",
  },

  subtitle: {
    textAlign: "center",
    color: "#666666",
    marginTop: 8,
    fontSize: 14,
  },

  form: {
    gap: 16,
  },

  input: {
    backgroundColor: "#F4F4F5",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    fontSize: 16,
  },

  forgot: {
    alignSelf: "flex-end",
    color: "#6B7280",
    fontSize: 13,
  },

  button: {
    backgroundColor: "#2563EB",
    paddingVertical: 16,
    borderRadius: 10,
    marginTop: 16,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
