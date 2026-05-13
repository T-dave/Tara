import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./themed-text";

interface TopProps {
  back?: boolean;
  title?: string;
  search?: boolean;
}
export default function Top({ back, title, search }: TopProps) {
  return (
    <View style={styles.top}>
      {back ? (
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 3 }}>
          <MaterialIcons name="chevron-left" size={35} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
      {title ? <ThemedText type="subtitle">{title}</ThemedText> : <View />}
      {search ? (
        <TouchableOpacity onPress={() => router.back()} style={{ padding: 3 }}>
          <MaterialIcons name="search" size={30} />
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
});
