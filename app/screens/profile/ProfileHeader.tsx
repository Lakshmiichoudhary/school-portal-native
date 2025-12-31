import { View, Text, StyleSheet } from "react-native";
import React from "react";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile</Text>
      <View style={styles.profileContainer}>
        <View style={styles.image}></View>
        <View style={styles.content}>
          <Text style={styles.profileText}>Alka S Ruikar</Text>
          <View style={styles.contactDetails} >
            <Text style={styles.textColor}>+91 9876543210</Text>
            <Text>.</Text>
            <Text style={styles.textColor}>staffprofile@gmail.com</Text>
          </View>
          <Text>Class Teacher . Nursery</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 24,
  },
  heading: {
    color: "#1A1A1A",
    fontSize: 28,
    fontWeight: 500,
  },
  profileContainer: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 20,
    borderColor: "#E8E8E8",
    shadowColor: "rgba(70, 70, 70, 0.25)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 6,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 9,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: "#000",
    borderColor: "#2563EB",
    borderWidth: 4,
  },
  profileText: {
    color: "#484848",
    fontSize: 28,
    fontWeight: 600,
  },
  content: {
    flexDirection: "column",
    gap: 5,
    alignItems: "center"
  },
  contactDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 500
  },
  textColor: {
    color: "#225AD6",
  },
  classDetails : {
    color: "#666666",
  }
});
