import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import Texttext from "./Texttext";
import { FontSize, FontFamily, Color, Gap } from "../GlobalStyles";

export type TexttitleType = {
  title?: string;
  showSubtitle?: boolean;

  /** Variant props */
  badge?: boolean;
  fillContainer?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  subtitle?: boolean;

  /** Style props */
  textColor?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Texttitle = ({
  badge = false,
  fillContainer = false,
  iconLeft = false,
  iconRight = false,
  subtitle = false,
  title = "ENTRAR",
  showSubtitle,
  textColor,
}: TexttitleType) => {
  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View style={styles.heading}>
      <Text style={[styles.text, text1Style]}>{title}</Text>
      <Texttext
        fillContainer={false}
        hierarchy="primary"
        hovered={false}
        iconLeft={false}
        iconRight={false}
        list={false}
        text="Welcome back! Pease enter your details."
        showSubtitle
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: FontSize.size_13xl,
    lineHeight: 38,
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.schemesOnBackground,
    textAlign: "left",
  },
  heading: {
    alignSelf: "stretch",
    backgroundColor: Color.hitBox,
    overflow: "hidden",
    alignItems: "center",
    gap: Gap.gap_md,
  },
});

export default Texttitle;
