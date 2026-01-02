import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { ScrollView, StyleSheet, View } from "react-native";
import Notification from "@/components/Notification";
import ProfileHeader from "../screens/profile/ProfileHeader";
import Cards from "../screens/profile/Cards";
import ProfileActions from "../screens/profile/ProfileActions";

export default function Profile() {
  return (
    <LinearGradient
      colors={["#E9EFFD", "#FFFFFF","white"]}
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
            <Cards />
            <ProfileActions />
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
    paddingHorizontal: 24,
    flexDirection: "column",
    gap: 24
  },
});
