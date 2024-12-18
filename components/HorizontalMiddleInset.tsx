import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Color, Padding } from "../GlobalStyles";

const HorizontalMiddleInset = () => {
  return (
    <View style={styles.horizontalmiddleInset}>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    alignSelf: "stretch",
    borderStyle: "solid",
    borderColor: Color.colorGold,
    borderTopWidth: 1,
    height: 1,
  },
  horizontalmiddleInset: {
    position: "absolute",
    top: 178,
    left: 0,
    width: 320,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
  },
});

export default HorizontalMiddleInset;
