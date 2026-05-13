import { Image, StyleSheet, TouchableOpacityProps, View } from "react-native";
import { ThemedText } from "./themed-text";
import { ThemedView } from "./themed-view";

interface CategoryCardProps extends TouchableOpacityProps {
  category: string;
  image: string;
}
export default function CategoryCard({
  category,
  image,
  style,
}: CategoryCardProps) {
  return (
    <View>
      <ThemedView style={styles.container}>
        <ThemedText type="subtitle">{category}</ThemedText>
        <Image source={{ uri: image }} style={styles.image} />
      </ThemedView>
      <View style={styles.shadow} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    marginVertical: 10,
    borderRadius: 10,
    zIndex: 2,
  },
  image: {
    height: 120,
    width: "50%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  shadow: {
    height: 120,
    width: "100%",
    position: "absolute",
    backgroundColor: "#00000018",
    top: 15,
    left: 4,
    borderRadius: 10,
  },
});
