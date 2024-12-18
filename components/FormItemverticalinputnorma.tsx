import * as React from "react";
import { StyleSheet, View } from "react-native";
import Texttext from "./Texttext";
import Password from "./Password";
import { Color, Padding, Gap } from "../GlobalStyles";

const FormItemverticalinputnorma = () => {
  return (
    <View style={[styles.formItem, styles.labelBg]}>
      <View style={[styles.label, styles.labelBg]}>
        <Texttext
          fillContainer={false}
          hierarchy="primary"
          hovered={false}
          iconLeft={false}
          iconRight={false}
          list={false}
          text="Contraseña"
          showSubtitle
          subtitleWidth="unset"
          subtitleHeight="unset"
          subtitleAlignSelf="unset"
          subtitlePaddingTop="unset"
          textFontSize={16}
          textFontWeight="unset"
        />
        <Texttext
          fillContainer={false}
          hierarchy="primary"
          hovered={false}
          iconLeft={false}
          iconRight={false}
          list={false}
          text="*"
          showSubtitle
          subtitleWidth="unset"
          subtitleHeight="unset"
          subtitleAlignSelf="unset"
          subtitlePaddingTop="unset"
          textFontSize={16}
          textFontWeight="unset"
        />
      </View>
      <Password filled={false} size="medium" visible={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  labelBg: {
    backgroundColor: Color.hitBox,
    alignSelf: "stretch",
  },
  label: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingBottom: Padding.p_5xs,
    gap: Gap.gap_2xs,
  },
  formItem: {
    paddingBottom: Padding.p_base,
    zIndex: 0,
  },
});

export default FormItemverticalinputnorma;
