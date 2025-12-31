import { StyleSheet, View } from "react-native";
import React from "react";
import Notification from "@/components/Notification";
import SearchBar from "@/components/SearchBar";

const TopBar = () => {
  return (
    <View style={styles.topBar}>
      <SearchBar />
      <Notification />
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    gap: 10
  },
});
