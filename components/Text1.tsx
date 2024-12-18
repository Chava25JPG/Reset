import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

export type Text1Type = {
  text?: string;
};

const Text1 = ({ text = "BUENA CLIENTA." }: Text1Type) => {
  return (
    <View style={styles.text}>
      <Text style={styles.text1}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text1: {
    flex: 1,
    fontSize: FontSize.bodyRegular_size,
    lineHeight: 22,
    fontFamily: FontFamily.bodyBase,
    color: Color.textDefaultDefault,
    textAlign: "left",
  },
  text: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
});

export default Text1;
