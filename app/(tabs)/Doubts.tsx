import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Notification from "@/components/Notification";
import DoubtsData from "../screens/doubts/DoubtsData";

export default function Doubts() {
  return (
    <LinearGradient
      colors={["#E9EFFD", "#FFFFFF", "white"]}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={{ flex: 1 }} edges={["top"]}>
        <View style={style.notification}>
          <Notification />
        </View>

        <ScrollView scrollsToTop contentContainerStyle={style.scrollContent}>
          <View style={style.otherSection}>
            <Text style={style.heading}>Doubts</Text>
            <DoubtsData />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },

  container: {
    flex: 1,
    fontWeight: 500,
    flexGrow: 1,
  },
  notification: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 24,
  },
  otherSection: {
    flex: 1,
    paddingHorizontal: 24,
    flexDirection: "column",
  },

  heading: {
    color: "#1A1A1A",
    fontSize: 28,
    fontWeight: 600
  },
});
