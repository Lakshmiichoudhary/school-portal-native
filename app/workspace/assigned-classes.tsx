import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton";
import { Class } from "@/assets";

const data = [
  {
    class: "Nursery",
    icon: Class,
  },
  {
    class: "Nursery",
    icon: Class,
  },
  {
    class: "Nursery",
    icon: Class,
  },
  {
    class: "Nursery",
    icon: Class,
  },
  {
    class: "Nursery",
    icon: Class,
  },
  {
    class: "Nursery",
    icon: Class,
  },
];

export default function AssignedClasses() {
  return (
    <SafeAreaView style={styles.container}>
      <BackButton />
      <View style={styles.header}>
        <Text style={styles.title}>Assigned Classes</Text>
        <Text>All the classes assigned to you will appear here.</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => {
          const Icon = item.icon;
          return (
            <View style={styles.card}>
              <Icon style={styles.icon} />
              <View>
                <Text style={styles.label}>Class</Text>
                <Text style={styles.value}>{item.class}</Text>
              </View>
            </View>
          );
        }}
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
  card: {
    flexDirection: "row",
    gap: 29,
    alignItems: "center"
  },
  list: {
    flexDirection: "column",
    gap: 26,
    marginTop: 30
  },
  icon: {
    width: 32,
    height: 32,
    backgroundColor: "#E9EFFD",
    borderRadius: 4,
    padding: 21,
  },
  label: {
    color: "#666666",
    fontSize: 14,
    fontWeight: 500,
  },
  value: {
    color: "#484848",
    fontSize: 16,
    fontWeight: 500,
  },
});
