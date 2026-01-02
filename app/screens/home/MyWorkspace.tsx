import { View, StyleSheet, Image, Text, FlatList, Pressable } from "react-native";
import React from "react";
import {
  assignedClasses,
  classSchedule,
  requestLeave,
  workSpace,
} from "@/assets";
import SectionHeader from "@/components/SectionHeader";
import { Link } from "expo-router";

const data = [
  {
    label: "Assigned Classes",
    icon: assignedClasses,
    route: "/workspace/assigned-classes",
  },
  {
    label: "Class Schedule",
    icon: classSchedule,
    route: "/workspace/class-schedule",
  },
  {
    label: "Request Leave",
    icon: requestLeave,
    route: "/workspace/request-leave",
  },
] as const;

const MyWorkSpace = () => {
  return (
    <View style={style.container}>
      <SectionHeader icon={workSpace} title="My Workspace" />
      <FlatList
        data={data}
        numColumns={3}
        scrollEnabled={false}
        keyExtractor={(_, index) => index.toString()}
        columnWrapperStyle={style.column}
        contentContainerStyle={style.list}
        renderItem={({ item }) => (
          <Link href={item.route}  asChild>
            <Pressable style={style.card}>
              <Image source={item.icon} style={style.icon} />
              <Text style={style.label}>{item.label}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
};

export default MyWorkSpace;

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
    textAlign: "center",
  },
  list: {
    marginTop: 20,
  },
  column: {
    marginBottom: 30,
    flexDirection: "row",
    columnGap: 20,
  },
  card: {
    flex: 1,
    flexDirection: "column",
    gap: 16,
    alignItems: "center",
    marginHorizontal: 4,
  },
});
