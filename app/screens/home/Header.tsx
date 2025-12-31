import { Text, StyleSheet, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.image} />

        <View>
          <Text style={styles.text}>Hello, Alka S Ruikar</Text>
          <Text style={styles.subText}>Class Teacher · Nursery</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  image: {
    height: 62,
    width: 62,
    borderRadius: 100,
    backgroundColor: "#000",
    borderColor: "#2563EB",
    borderWidth: 4
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: "#484848",
  },
  subText: {
    marginTop: 2,
    color: "#666666",
    fontSize: 14,
    fontWeight: 500
  },
});