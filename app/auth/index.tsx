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
    name,
    nameError,
    setNameError,
    handleNameText,
    handleNameError,
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
  const { handleSignup } = useAuth();
  return (
    <Container style={styles.container}>
      <ThemedText type="title" style={{ marginTop: 10 }}>
        Sign Up
      </ThemedText>
      <View>
        <View style={styles.inputs}>
          <Input
            label="Name"
            value={name}
            error={nameError}
            setError={setNameError}
            handleError={handleNameError}
            handleText={handleNameText}
          />
          <Input
            label="Email"
            value={email}
            error={emailError}
            setError={setEmailError}
            handleError={handleEmailError}
            handleText={handleEmailText}
          />
          <Input
            placeholder="Password"
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
          onPress={() => router.navigate("/auth/logIn")}
        >
          <ThemedText>Already have an account?</ThemedText>
          <MaterialIcons
            name="arrow-forward"
            color={Colors.primary}
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>
        <Button
          text="SIGN UP"
          onPress={() => handleSignup(name, email, password)}
          style={styles.button}
        />
      </View>
      <Bottom type="sign up" />
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
