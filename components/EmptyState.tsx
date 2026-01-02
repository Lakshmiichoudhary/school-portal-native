import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface EmptyStateProps {
  icon: React.ComponentType<{ width?: number; height?: number }>;
  title: string;
  description?: string;
  iconSize?: number;
}

export default function EmptyState({
  icon: Icon,
  title,
  description,
  iconSize = 192,
}: EmptyStateProps) {
  return (
    <View style={styles.container}>
      <Icon width={iconSize} height={iconSize} />

      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>

        {description ? (
          <Text style={styles.description}>{description}</Text>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
    gap: 23,

  },
  textContainer: {
    alignItems: "center",
    gap: 6,
  },
  title: {
    fontSize: 28,
    color: "#1A1A1A",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#666666",
    textAlign: "center",
    maxWidth: 280,
  },
});
