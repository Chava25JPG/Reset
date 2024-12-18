import * as React from "react";
import { StyleSheet, View } from "react-native";
import Texttext from "./Texttext";
import { Border, Color, Padding } from "../GlobalStyles";

export type ComponentspaginationNextType = {
  /** Variant props */
  size?: string;
  state?: string;
  type?: string;
};

const ComponentspaginationNext = ({
  size = "medium",
  state = "disabled",
  type = "icon",
}: ComponentspaginationNextType) => {
  return (
    <View style={styles.componentspaginationNext}>
      <Texttext
        fillContainer={false}
        hierarchy="link"
        hovered={false}
        iconLeft={false}
        iconRight={false}
        list={false}
        text="Siguiente"
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
  componentspaginationNext: {
    borderTopRightRadius: Border.br_9xs,
    borderBottomRightRadius: Border.br_9xs,
    backgroundColor: Color.hitBox,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    marginLeft: -1,
  },
});

export default ComponentspaginationNext;
