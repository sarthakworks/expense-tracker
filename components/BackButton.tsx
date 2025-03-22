import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { BackButtonProps } from "@/types";
import { CaretLeft } from "phosphor-react-native";
import { verticalScale } from "@/utils/styling";
import { colors, radius } from "@/constants/theme";

const BackButton = ({ style, iconSize = 26 }: BackButtonProps) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.back()}
      style={[styles.button, style]}
    >
      <CaretLeft
        size={verticalScale(iconSize)}
        color={colors.white}
        weight="bold"
      />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    backgroundColor: colors.neutral400,
    padding: 5,
    borderCurve: "continuous",
    borderRadius: radius._12,
  },
});
