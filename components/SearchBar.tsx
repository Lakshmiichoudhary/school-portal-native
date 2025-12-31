import { View, TextInput, StyleSheet, Image } from "react-native";
import React from "react";
import { search } from "@/assets";

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Image source={search} style={styles.icon} />

      <TextInput
        placeholder="Search exams..."
        placeholderTextColor="#9CA3AF"
        style={styles.searchInput}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 100,
    paddingHorizontal: 16,
    shadowColor: "rgba(70, 70, 70, 0.25)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 6,
    justifyContent: "center",
    borderColor: "#E8E8E8",
  },

  icon: {
    marginRight: 12,
    width: 15,
    height: 15
  },

  searchInput: {
    paddingVertical: 19,
    fontSize: 16,
  },
});
