import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import EmptyState from "@/components/EmptyState";
import { noNotification } from "@/assets";

export default function Attendance() {
   return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Attendance</Text>
        </View>
        <EmptyState
          icon={noNotification}
          title="No Data!!"
          description="All the attendance data will appear here."
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
      marginTop: 5
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
  