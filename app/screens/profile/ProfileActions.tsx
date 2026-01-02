import { Pressable, StyleSheet, Text, View } from "react-native";
import { logout, rightArrow, settings } from "@/assets";
import { useRouter } from "expo-router";

const data = [
  {
    label: "Account Settings",
    icon: settings,
    actionIcon: rightArrow,
    route: "AccountSettings",
  },
  {
    label: "Logout",
    icon: logout,
    actionIcon: rightArrow,
    onPress: "logout",
  },
];

const ProfileActions = () => {
  const router = useRouter();

  const handlePress = (item: any) => {
    if (item.onPress === "logout") {
      router.replace("/login"); 
      return;
    }

    if (item.route) {
      router.push(item.route);
    }
  };

  return (
    <View style={style.grid}>
      {data.map((item, index) => {
        const Icon = item.icon;
        const ActionIcon = item.actionIcon;

        return (
          <Pressable
            key={index}
            onPress={() => handlePress(item)}
            style={({ pressed }) => [style.card, pressed && style.pressed]}
          >
            <View style={style.item}>
              <Icon style={style.icon} />
              <Text style={style.label}>{item.label}</Text>
            </View>
            <ActionIcon style={style.icon} />
          </Pressable>
        );
      })}
    </View>
  );
};

export default ProfileActions;

const style = StyleSheet.create({
  grid: {
    flexDirection: "column",
    gap: 20,
  },

  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: "#FFF",
  },

  pressed: {
    opacity: 0.6,
  },

  item: {
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },

  icon: {
    width: 24,
    height: 24,
  },

  label: {
    color: "#484848",
    fontSize: 16,
    fontWeight: "500",
  },
});
