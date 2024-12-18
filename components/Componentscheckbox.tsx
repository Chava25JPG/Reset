import * as React from "react";
import { StyleSheet, View } from "react-native";
import CheckboxInput from "./CheckboxInput";
import Texttext from "./Texttext";
import { Color, Gap } from "../GlobalStyles";

export type ComponentscheckboxType = {
  /** Variant props */
  checked?: boolean;
  disabled?: boolean;
  focused?: boolean;
  indeterminate?: boolean;
  validation?: string;
};

const Componentscheckbox = ({
  checked = false,
  disabled = false,
  focused = false,
  indeterminate = false,
  validation = "normal",
}: ComponentscheckboxType) => {
  return (
    <View style={styles.componentscheckbox}>
      <View style={styles.wrapper}>
        <CheckboxInput
          checked={false}
          disabled={false}
          focused={false}
          indeterminate={false}
          validation="normal"
        />
      </View>
      <Texttext
        fillContainer={false}
        hierarchy="primary"
        hovered={false}
        iconLeft={false}
        iconRight={false}
        list={false}
        text="Recuerdame"
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
  wrapper: {
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  componentscheckbox: {
    backgroundColor: Color.hitBox,
    gap: Gap.gap_xs,
    flexDirection: "row",
  },
});

export default Componentscheckbox;
