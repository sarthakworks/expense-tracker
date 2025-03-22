import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { InputProps } from "@/types";
import { colors, radius, spacingX } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";

const Input = ({
  icon,
  containerStyle,
  inputStyle,
  inputRef,
  ...props
}: InputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {icon}
      <TextInput
        placeholderTextColor={colors.neutral400}
        ref={inputRef}
        style={[styles.input, inputStyle]}
        {...props}
      ></TextInput>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: radius._17,
    borderWidth: 1,
    borderColor: colors.neutral300,
    borderCurve: "continuous",
    height: verticalScale(54),
    paddingHorizontal: spacingX._15,
    gap: spacingX._10,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    color: colors.white,
    fontSize: verticalScale(14),
  },
});
