import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import React from "react";
import { essentials, messages } from "@/assets";
import SectionHeader from "@/components/SectionHeader";

const data = [
  {
    label: "Messages/Alerts",
    icon: messages,
  },
  {
    label: "Fees/Payments",
    icon: messages,
  },
  {
    label: "Media Galary",
    icon: messages,
  },
  {
    label: "Messages/Alerts",
    icon: messages,
  },
  {
    label: "Messages/Alerts",
    icon: messages,
  },
  {
    label: "Messages/Alerts",
    icon: messages,
  },
];

const Essentials = () => {
  return (
    <View style={style.container}>
      <SectionHeader icon={essentials} title="Essentials" />
      <FlatList
        data={data}
        numColumns={3}
        keyExtractor={(_, index) => index.toString()}
        columnWrapperStyle={style.column}
        contentContainerStyle={style.list}
        renderItem={({ item }) => (
          <View style={style.card}>
            <Image source={item.icon} style={style.icon} />
            <Text style={style.label}>{item.label}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Essentials;

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    gap: 40,
  },
  icon: {
    height: 40,
    width: 40,
  },
  heading: {
    fontSize: 20,
    fontWeight: 500,
    color: "#484848",
  },
  label: {
    fontSize: 14,
    color: "#666666",
  },
  list: {
    marginTop: 20,
  },
  column: {
    marginBottom: 30,
  },
  card: {
    flex: 1,
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
    marginHorizontal: 4,
  },
});

