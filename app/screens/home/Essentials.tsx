import { View, StyleSheet, Image, Text, FlatList } from "react-native";
import React from "react";
import { attendar, essentials, exam, gallary, group, messages, payment } from "@/assets";
import SectionHeader from "@/components/SectionHeader";

const data = [
  {
    label: "Messages/Alerts",
    icon: messages,
  },
  {
    label: "Fees/Payments",
    icon: payment,
  },
  {
    label: "Exams",
    icon: exam,
  },
  {
    label: "Media Gallery",
    icon: gallary,
  },
  {
    label: "Groups/Houses",
    icon: group,
  },
  {
    label: "Attendar",
    icon: attendar,
  },
];

const Essentials = () => {
  return (
    <View style={style.container}>
      <SectionHeader icon={essentials} title="Essentials" />
      <FlatList
        data={data}
        numColumns={3}
        scrollEnabled={false}
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
    gap: 16,
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
    textAlign: "center"
  },
  list: {
    marginTop: 20,
  },
  column: {
   flexDirection: "row",
   columnGap: 20,
   marginVertical: 16,
  },
  card: {
    flex: 1,
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
    marginHorizontal: 4,
  },
});

