import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import NotificationsScreen from "../screens/notification/NotificationPage";
import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import BackButton from "@/components/BackButton";

export default function Notifications() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <SafeAreaView style={styles.container}>
        <BackButton />
        <NotificationsScreen />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    flexDirection : "column",
    gap: 20
  },
});
