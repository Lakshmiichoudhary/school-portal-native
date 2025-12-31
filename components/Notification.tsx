import { View, Image, StyleSheet } from "react-native";
import React from "react";
import { bell } from "@/assets";

const Notification = () => {
  return (
    <View style={styles.container}>
      <Image source={bell} style={styles.icon} resizeMode="contain" />
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    shadowColor: "rgba(70, 70, 70, 0.25)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 6,
    justifyContent: "center",
    width: 54,
    height: 54,
    borderRadius: 30,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#E8E8E8",
  },
  icon: {
    width: 20,
    height: 20,
  },
});
