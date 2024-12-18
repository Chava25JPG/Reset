import * as React from "react";
import { StyleSheet, View } from "react-native";
import Texttext from "./Texttext";
import { Color, Padding } from "../GlobalStyles";

export type ComponentspaginationItemType = {
  /** Variant props */
  size?: string;
  state?: "normal" | "active";
};

const ComponentspaginationItem = ({
  size = "medium",
  state = "normal",
}: ComponentspaginationItemType) => {
  const getComponentspaginationItemContainerStyle = () => {
    if (size === "medium" && state === "active")
      return styles.componentspaginationItemContainerVar;
  };

  return (
    <View style={[styles.root, getComponentspaginationItemContainerStyle()]}>
      <Texttext
        fillContainer={false}
        hierarchy="link"
        hovered={false}
        iconLeft={false}
        iconRight={false}
        list={false}
        text="1"
        showSubtitle
        subtitleWidth="unset"
        subtitleHeight="unset"
        subtitleAlignSelf="unset"
        subtitlePaddingTop="unset"
        textFontSize={16}
        textFontWeight="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  componentspaginationItemContainerVar: {
    backgroundColor: Color.colorOlive,
    borderColor: Color.colorOlive,
    display: null,
    marginLeft: -1,
  },
  root: {
    backgroundColor: Color.hitBox,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    display: "none",
  },
});

export default ComponentspaginationItem;
