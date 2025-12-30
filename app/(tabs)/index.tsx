import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../screens/home/Header";
import { LinearGradient } from "expo-linear-gradient";
import Essentials from "../screens/home/Essentials";
import { StyleSheet, View } from "react-native";
import MyWorkSpace from "../screens/home/MyWorkspace";

import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[style.container, { paddingTop: insets.top }]}>
      <Header />

      <View style={style.otherSection}>
        <Essentials />
        <MyWorkSpace />
      </View>
    </View>
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
