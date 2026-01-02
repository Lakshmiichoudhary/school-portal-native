import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";
import EmptyState from "@/components/EmptyState";
import { noNotification } from "@/assets";

export default function ClassSchedule() {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <View style={styles.header}>
        <Text style={styles.title}>Class Schedule</Text>
        <Text>All the classes Schedule to you will appear here.</Text>
      </View>
      <EmptyState
        icon={noNotification}
        title="No Classes Scheduled!!"
        description="All the classes Schedule to you will appear here."
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    flexDirection: "column",
    gap: 20,
  },

  title: {
    color: "#1A1A1A",
    fontSize: 28,
    fontWeight: 600,
  },
  header: {
    flexDirection: "column",
    gap: 4,
  },
});
