import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

export type Date1Type = {
  prop?: string;

  /** Variant props */
  property1?: "default" | "clicked";
};

const Date1 = ({ property1 = "default", prop }: Date1Type) => {
  const getDateContainerStyle = () => {
    if (property1 === "clicked") return styles.dateContainerVar;
  };
  const getTextStyle = () => {
    if (property1 === "clicked") return styles.textVar;
  };

  return (
    <View style={[styles.root, getDateContainerStyle()]}>
      <Text style={[styles.text, getTextStyle()]}>{prop}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dateContainerVar: {
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGoldenrod,
  },
  textVar: {
    color: Color.grayWhite,
  },
  text: {
    fontSize: FontSize.size_lg,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.latoLight,
    color: Color.grayBlack,
    textAlign: "center",
  },
  root: {
    flex: 1,
    height: 42,
    alignItems: "center",
    justifyContent: "center",
    padding: Padding.p_3xs,
  },
});

export default Date1;
