import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "@/components/ScreenWrapper";
import { colors, spacingX, spacingY } from "@/constants/theme";
import { verticalScale } from "@/utils/styling";
import BackButton from "@/components/BackButton";
import Typo from "@/components/Typo";
import Input from "@/components/Input";
import { At, Lock } from "phosphor-react-native";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const Email = useRef("");
  const Password = useRef("");
  const [isLoading, setIsLoading] = useState(false);
  const handleButton = async () => {
    if (!Email.current || !Password.current) {
      Alert.alert("Login", "Please fill all the fields");
      return;
    }
    console.log("email", Email.current, "pwd", Password.current);
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton iconSize={28} />

        <View style={{ marginTop: spacingY._20, gap: 5 }}>
          <Typo size={30} fontWeight={800}>
            Hey,
          </Typo>
          <Typo size={30} fontWeight={800}>
            Welcome Back
          </Typo>
        </View>

        {/* form */}
        <View style={styles.form}>
          <Typo fontWeight={200} size={16}>
            Login now to track your expenses
          </Typo>
          <Input
            placeholder="Enter your email"
            onChangeText={(value) => (Email.current = value)}
            icon={
              <At
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
          <Input
            placeholder="Enter your Password"
            secureTextEntry
            onChangeText={(value) => (Password.current = value)}
            icon={
              <Lock
                size={verticalScale(26)}
                color={colors.neutral300}
                weight="fill"
              />
            }
          />
          <Typo
            size={14}
            fontWeight={400}
            color={colors.text}
            style={{ alignSelf: "flex-end" }}
          >
            Forgot Password
          </Typo>

          <Button onPress={() => handleButton()} loading={isLoading}>
            <Typo size={21} fontWeight={700} color={colors.black}>
              Login
            </Typo>
          </Button>
        </View>

        {/* footer */}
        <View style={styles.footer}>
          <Typo size={15}>Don't have an account</Typo>
          <Pressable onPress={() => router.push("/(auth)/Register")}>
            <Typo size={15} fontWeight={700} color={colors.primary}>
              Sign up
            </Typo>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: spacingY._30,
    paddingHorizontal: spacingX._20,
  },
  welcomeText: {
    fontSize: verticalScale(20),
    fontWeight: "bold",
    color: colors.text,
  },
  form: {
    gap: spacingY._20,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: "500",
    color: colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: colors.text,
    fontSize: verticalScale(15),
  },
});
