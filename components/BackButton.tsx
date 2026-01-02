import React from "react";
import { Pressable, StyleSheet, ViewStyle } from "react-native";
import { useRouter } from "expo-router";

import { BackArrow } from "@/assets";

interface BackButtonProps {
  size?: number;
  color?: string;
  style?: ViewStyle;
}

export default function BackButton({ size = 28, style }: BackButtonProps) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.back()}
      style={[style]}
      hitSlop={10}
    >
      <BackArrow width={size} height={size} />
    </Pressable>
  );
}

