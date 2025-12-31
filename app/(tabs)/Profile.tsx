import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../screens/home/Header";
import { LinearGradient } from "expo-linear-gradient";
import Essentials from "../screens/home/Essentials";
import { ScrollView, StyleSheet, View } from "react-native";
import MyWorkSpace from "../screens/home/MyWorkspace";
import TopBar from "../screens/home/TopBar";
import Notification from "@/components/Notification";
import ProfileHeader from "../screens/profile/ProfileHeader";

export default function Profile() {
  return (
    <LinearGradient
      colors={["#E9EFFD", "#FFFFFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={style.container} edges={["top"]}>
        <View style={style.notification}>
          <Notification />
        </View>
        <ScrollView scrollsToTop>
          <View style={style.otherSection}>
            <ProfileHeader />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  notification : {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 24
  },
  otherSection: {
    paddingHorizontal: 24
  },
});
