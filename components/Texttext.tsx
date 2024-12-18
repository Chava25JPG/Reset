import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontFamily, Color, FontSize } from "../GlobalStyles";

export type TexttextType = {
  text?: string;
  showSubtitle?: boolean;

  /** Variant props */
  fillContainer?: boolean;
  hierarchy?: "primary" | "link" | "muted";
  hovered?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  list?: boolean;

  /** Style props */
  subtitleWidth?: number | string;
  subtitleHeight?: number | string;
  subtitleAlignSelf?: string;
  subtitlePaddingTop?: number | string;
  subtitleOpacity?: number;
  textFontSize?: number;
  textFontWeight?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Texttext = ({
  fillContainer = true,
  hierarchy = "link",
  hovered = true,
  iconLeft = false,
  iconRight = true,
  list = false,
  text = "Welcome back! Pease enter your details.",
  showSubtitle,
  subtitleWidth,
  subtitleHeight,
  subtitleAlignSelf,
  subtitlePaddingTop,
  subtitleOpacity,
  textFontSize,
  textFontWeight,
}: TexttextType) => {
  const subtitleStyle = useMemo(() => {
    return {
      ...getStyleValue("width", subtitleWidth),
      ...getStyleValue("height", subtitleHeight),
      ...getStyleValue("alignSelf", subtitleAlignSelf),
      ...getStyleValue("paddingTop", subtitlePaddingTop),
      ...getStyleValue("opacity", subtitleOpacity),
    };
  }, [
    subtitleWidth,
    subtitleHeight,
    subtitleAlignSelf,
    subtitlePaddingTop,
    subtitleOpacity,
  ]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", textFontSize),
      ...getStyleValue("fontWeight", textFontWeight),
    };
  }, [textFontSize, textFontWeight]);

  const getText1Style = () => {
    if (
      !fillContainer &&
      hierarchy === "link" &&
      !hovered &&
      !iconLeft &&
      !iconRight &&
      !list
    )
      return styles.text1Var;
    if (
      !fillContainer &&
      hierarchy === "muted" &&
      !hovered &&
      !iconLeft &&
      !iconRight &&
      !list
    )
      return styles.text1Var1;
  };

  return (
    showSubtitle && (
      <View style={[styles.root, subtitleStyle]}>
        <Text style={[styles.text, getText1Style(), textStyle]}>{text}</Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  text1Var: {
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.colorOlive,
    display: null,
    textDecoration: "underline",
  },
  text1Var1: {
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.schemesSecondary,
    display: null,
  },
  text: {
    fontSize: FontSize.bodyRegular_size,
    lineHeight: 24,
    fontFamily: FontFamily.robotoMonoRegular,
    color: Color.schemesOnBackground,
    textAlign: "left",
    display: "none",
  },
  root: {
    backgroundColor: Color.hitBox,
    width: 116,
    height: 24,
    overflow: "hidden",
    justifyContent: "center",
  },
});

export default Texttext;
