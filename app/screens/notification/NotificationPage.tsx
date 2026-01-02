import { noNotification } from "@/assets";
import EmptyState from "@/components/EmptyState";
import { Text, StyleSheet } from "react-native";

export default function NotificationsScreen() {
  return (
    <>
      <Text style={styles.title}>Notifications</Text>
      <EmptyState
        icon={noNotification}
        title="No notifications yet !!"
        description="Your notifications will appear here once you receive them."
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    color: "#1A1A1A",
    fontSize: 28,
    fontWeight: 600,
  },
});
