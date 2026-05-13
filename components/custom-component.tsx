import { useThemeColor } from "@/hooks/use-theme-color";
import { ScrollView, StyleSheet, View } from "react-native";
import {
    SafeAreaView,
    SafeAreaViewProps,
} from "react-native-safe-area-context";
import Top from "./top";

interface ContainerProps extends SafeAreaViewProps {
  lightColor?: string;
  darkColor?: string;
  back?: boolean;
}
export default function Container({
  lightColor = "#F9F9F9",
  darkColor,
  style,
  back,
  children,
  edges = ["top"],
}: ContainerProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );
  return (
    <ScrollView
      style={{ backgroundColor }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView style={styles.container} edges={edges}>
        <Top back={back} />
        <View style={[styles.container, style]}>{children}</View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
