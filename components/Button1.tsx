import React, { useMemo } from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";
import Texttext from "./Texttext";
import { Color, Padding, Border, Gap } from "../GlobalStyles";

export type Button1Type = {
  iconLeft?: boolean;
  iconRight?: boolean;
  icon?: ImageSourcePropType;
  icon2?: ImageSourcePropType;

  /** Variant props */
  iconOnly?: boolean;
  outline?: boolean;
  size?: "medium" | "large" | "small";
  state?: string;
  type?: string;

  /** Style props */
  buttonAlignSelf?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Button1 = ({
  iconOnly = true,
  outline = true,
  size = "small",
  state = "disabled",
  type = "secondary",
  iconLeft = false,
  iconRight = false,
  buttonAlignSelf,
  icon,
  icon2,
}: Button1Type) => {
  const buttonStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", buttonAlignSelf),
    };
  }, [buttonAlignSelf]);

  const getButtonContainerStyle = () => {
    if (
      !iconOnly &&
      !outline &&
      size === "large" &&
      state === "normal" &&
      type === "primary"
    )
      return styles.buttonContainerVar;
    if (
      !iconOnly &&
      !outline &&
      size === "small" &&
      state === "normal" &&
      type === "primary"
    )
      return styles.buttonContainerVar1;
  };

  return (
    <View style={[styles.root, getButtonContainerStyle(), buttonStyle]}>
      {iconLeft && (
        <Image style={styles.icon} resizeMode="cover" source={icon} />
      )}
      <Texttext
        fillContainer={false}
        hierarchy="primary"
        hovered={false}
        iconLeft={false}
        iconRight={false}
        list={false}
        text="Entrar"
        showSubtitle
        subtitleWidth="unset"
        subtitleHeight="unset"
        subtitleAlignSelf="unset"
        subtitlePaddingTop="unset"
        textFontSize={16}
        textFontWeight="unset"
      />
      {iconRight && (
        <Image style={styles.icon} resizeMode="cover" source={icon2} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainerVar: {
    borderRadius: null,
    backgroundColor: Color.yellow600,
    borderColor: Color.yellow600,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    borderTopLeftRadius: Border.br_8xs_8,
    borderBottomLeftRadius: Border.br_8xs_8,
  },
  buttonContainerVar1: {
    borderRadius: Border.br_9xs_2,
    backgroundColor: Color.themePrimary,
    borderColor: Color.themePrimary,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
  },
  icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  root: {
    alignSelf: "stretch",
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorOlive_100,
    borderStyle: "solid",
    borderColor: Color.colorOlive_100,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    gap: Gap.gap_xs,
    overflow: "hidden",
  },
});

export default Button1;
