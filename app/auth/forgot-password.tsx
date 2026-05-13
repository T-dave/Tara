import Button from "@/components/custom-button";
import Container from "@/components/custom-component";
import Input from "@/components/custom-input";
import { ThemedText } from "@/components/themed-text";
import useInput from "@/hooks/input-hook";
import { StyleSheet, View } from "react-native";

export default function Register() {
  const {
    email,
    setEmail,
    emailError,
    setEmailError,
    handleEmailText,
    handleEmailError,
  } = useInput();

  return (
    <Container style={styles.container} back>
      <ThemedText type="title" style={{ marginTop: 10 }}>
        Forgot Password
      </ThemedText>
      <View>
        <View style={styles.inputs}>
          <ThemedText type="small" style={{ marginBottom: 10 }}>
            Please, enter your email address. You will receive a link to create
            a new password via email.
          </ThemedText>
          <Input
            label="Email"
            value={email}
            error={emailError}
            setError={setEmailError}
            handleError={handleEmailError}
            handleText={handleEmailText}
            clear={() => setEmail("")}
          />
        </View>
        <Button
          text="SEND"
          onPress={() => console.log("Hii")}
          style={styles.button}
        />
      </View>
      <View />
    </Container>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  inputs: {
    marginTop: 40,
  },
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
