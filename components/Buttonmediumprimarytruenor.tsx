import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import Texttext from "./Texttext";
import { Border, Color, Padding, Gap } from "../GlobalStyles";

const Buttonmediumprimarytruenor = () => {
  return (
    <View style={styles.buttonmediumprimarytruenor}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/icon1.png")}
      />
      <Texttext
        fillContainer={false}
        hierarchy="primary"
        hovered={false}
        iconLeft={false}
        iconRight={false}
        list={false}
        text="Entrar con Google"
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
  icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  buttonmediumprimarytruenor: {
    alignSelf: "stretch",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.hitBox,
    borderStyle: "solid",
    borderColor: Color.colorOlive_100,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_smi,
    paddingVertical: Padding.p_6xs,
    gap: Gap.gap_xs,
    overflow: "hidden",
  },
});

export default Buttonmediumprimarytruenor;
