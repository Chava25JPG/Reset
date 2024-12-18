import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Gap } from "../GlobalStyles";

export type SpacerType = {
  /** Variant props */
  size?: "spacer 2 - 8px" | "spacer 1 - 4px";
  type?: string;
};

const Spacer = ({
  size = "spacer 5 - 48px",
  type = "vertical",
}: SpacerType) => {
  const getSpacerContainerStyle = () => {
    if (size === "spacer 1 - 4px" && type === "horizontal")
      return styles.spacerContainerVar;
  };

  return (
    <View style={[styles.root, getSpacerContainerStyle()]}>
      <View style={styles.ignore} />
      <View style={styles.ignore} />
    </View>
  );
};

const styles = StyleSheet.create({
  spacerContainerVar: {
    gap: Gap.gap_2xs,
    display: null,
  },
  ignore: {
    width: 0,
    height: 0,
  },
  root: {
    flexDirection: "row",
    alignItems: "center",
    gap: Gap.gap_xs,
    display: "none",
  },
});

export default Spacer;
