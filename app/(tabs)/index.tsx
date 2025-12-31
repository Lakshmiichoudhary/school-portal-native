import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../screens/home/Header";
import { LinearGradient } from "expo-linear-gradient";
import Essentials from "../screens/home/Essentials";
import { ScrollView, StyleSheet, View } from "react-native";
import MyWorkSpace from "../screens/home/MyWorkspace";
import TopBar from "../screens/home/TopBar";

export default function Index() {
  return (
    <LinearGradient
      colors={["#E9EFFD", "#FFFFFF"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={style.container} edges={["top"]}>
        <TopBar />
        <Header />
        <ScrollView scrollsToTop>
          <View style={style.otherSection}>
            <Essentials />
            <MyWorkSpace />
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
  otherSection: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 32,
    padding: 24,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    flexDirection: "column",
    gap: 40,
  },
});
