import { View, Text } from "react-native";
import React from "react";
import EmptyState from "@/components/EmptyState";
import { NoDoubts } from "@/assets";

export default function DoubtsData() {
  return (
    <View>
      <EmptyState
        icon={NoDoubts}
        title="No doubts yet !!"
        description="All caught up! New doubts will appear here as soon as they come in."
      />
    </View>
  );
}
