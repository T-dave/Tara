import Bottom from "@/components/auth-bottom";
import Button from "@/components/custom-button";
import Container from "@/components/custom-component";
import Input from "@/components/custom-input";
import { ThemedText } from "@/components/themed-text";
import { Colors } from "@/constants/theme";
import useAuth from "@/hooks/auth-hooks";
import useInput from "@/hooks/input-hook";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Register() {
  const {
    email,
    emailError,
    setEmailError,
    handleEmailText,
    handleEmailError,
    password,
    passwordError,
    setPasswordError,
    handlePasswordText,
    handlePasswordError,
  } = useInput();
  const { handleSignIn } = useAuth();
  return (
    <Container style={styles.container} back>
      <ThemedText type="title" style={{ marginTop: 10 }}>
        Log In
      </ThemedText>
      <View>
        <View style={styles.inputs}>
          <Input
            label="Email"
            value={email}
            error={emailError}
            setError={setEmailError}
            handleError={handleEmailError}
            handleText={handleEmailText}
          />
          <Input
            label="Password"
            value={password}
            error={passwordError}
            setError={setPasswordError}
            handleError={handlePasswordError}
            handleText={handlePasswordText}
            password
          />
        </View>
        <TouchableOpacity
          style={styles.logIn}
          onPress={() => router.navigate("/auth/forgot-password")}
        >
          <ThemedText>Forgot your password?</ThemedText>
          <MaterialIcons
            name="arrow-forward"
            color={Colors.primary}
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>
        <Button
          text="LOG IN"
          onPress={() => handleSignIn(email, password)}
          style={styles.button}
        />
      </View>
      <Bottom type="log in" />
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    justifyContent: "space-between",
  },
  inputs: {},
  logIn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 10,
  },
  button: {
    marginTop: 10,
  },
});
