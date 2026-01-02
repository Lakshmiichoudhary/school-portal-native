import { StyleSheet, Text, View } from "react-native";
import subjects from "../../../assets/icons/subjects.svg";
import profileInformattion from "../../../assets/icons/ProfileInformation.svg";

const data = [
  {
    label: "Profile Information",
    icon: profileInformattion,
  },
  {
    label: "Subjects Information",
    icon: subjects,
  },
];

const Cards = () => {
  return (
    <View style={style.grid}>
      {data?.map((item, index) => {
        const Icon = item.icon;
        return (
          <View key={index} style={style.card}>
            <Icon style={style.icon} />
            <Text style={style.label}>{item.label}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Cards;

const style = StyleSheet.create({
  grid: {
    flexDirection: "row",
    gap: 16,
  },
  icon: {
    width: 64,
    height: 64,
  },

  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 16,
    gap: 16,

    backgroundColor: "#FFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E8E8E8",
  },

  label: {
    color: "#484848",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
  },
});
