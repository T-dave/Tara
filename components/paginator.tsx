import React from "react";
import { View, StyleSheet } from "react-native";

const Paginator = ({ data, currentIndex }: any) => {
  return (
    <View style={styles.container}>
      {data.map((_: any, index: number) => (
        <View
          key={index}
          style={[
            styles.dot,
            currentIndex === index && styles.activeDot,
          ]}
        />
      ))}
    </View>
  );
};

export default Paginator;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 20,
    justifyContent: "center",
    paddingTop:4
  },
  dot: {
    height: 6,
    width: 6,
    borderRadius: 54,
    backgroundColor: "#444",
    margin: 2,
  },
  activeDot: {
    backgroundColor: "#FFF",
    width: 8,
  },
});