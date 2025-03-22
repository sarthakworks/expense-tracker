import { StyleSheet, Text, TextStyle, View } from "react-native";
import React from "react";
import { TypoProps } from "@/types";
import { colors } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";

const Typo = ({
  size = 18,
  color = colors.text,
  fontWeight = "400",
  children,
  style,
  textProps = {},
}: TypoProps) => {
  const textStyle: TextStyle = {
    fontSize: verticalScale(size),
    color,
    fontWeight,
  };
  return <Text style={[textStyle, style]}>{children}</Text>;
};

export default Typo;

const styles = StyleSheet.create({});
