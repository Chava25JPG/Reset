import * as React from "react";
import { StyleSheet, View } from "react-native";
import Texttext from "./Texttext";
import { Border, Color, Padding } from "../GlobalStyles";

export type ComponentspaginationPrevType = {
  /** Variant props */
  size?: string;
  state?: string;
  type?: string;
};

const ComponentspaginationPrev = ({
  size = "medium",
  state = "hovered",
  type = "icon",
}: ComponentspaginationPrevType) => {
  return (
    <View style={styles.componentspaginationPrev}>
      <Texttext
        fillContainer={false}
        hierarchy="link"
        hovered={false}
        iconLeft={false}
        iconRight={false}
        list={false}
        text="Anterior"
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
  componentspaginationPrev: {
    borderTopLeftRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    backgroundColor: Color.hitBox,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
  },
});

export default ComponentspaginationPrev;
