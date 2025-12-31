import { login } from "@/assets";
import { LinearGradient } from "expo-linear-gradient";
import { View, Text, Image, StyleSheet } from "react-native";

export default function LoginIntro() {
  return (
    <LinearGradient
      style={styles.container}
      colors={["#2563EB", "#9BB7F6"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y:1 }}
    >
      <View>
        <Text style={styles.title}>
          Manage Students, Staff & Academics — All in One Place!
        </Text>
      </View>

      <Image source={login} style={styles.image} resizeMode="contain" />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2563EB",
    paddingTop: 60,
    paddingHorizontal: 24,
    position: "relative",
    height: 270,
  },

  title: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "700",
  },

  image: {
    width: "100%",
    height: 100,
    bottom: 0,
    right: -80,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
  },
});
