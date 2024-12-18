import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import {
  FontSize,
  StyleVariable,
  FontFamily,
  Color,
  Gap,
} from "../GlobalStyles";

export type AvatarBlockType = {
  description?: string;
  title?: string;
};

const AvatarBlock = ({
  description = "Fecha: 07/10/2024",
  title,
}: AvatarBlockType) => {
  return (
    <View style={styles.avatarBlock}>
      <Image
        style={styles.avatarIcon}
        resizeMode="cover"
        source={require("../assets/avatar.png")}
      />
      <View style={styles.info}>
        <Text style={[styles.title, styles.titleFlexBox]}>{title}</Text>
        <Text style={[styles.description, styles.titleFlexBox]}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleFlexBox: {
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.bodyRegular_size,
    alignSelf: "stretch",
  },
  avatarIcon: {
    borderRadius: StyleVariable.radiusFull,
    width: StyleVariable.iconLarge,
    height: StyleVariable.iconLarge,
    overflow: "hidden",
    display: "none",
  },
  title: {
    fontWeight: "600",
    fontFamily: FontFamily.bodyStrong,
    color: Color.textDefaultSecondary,
  },
  description: {
    fontFamily: FontFamily.bodyBase,
    color: Color.textDefaultTertiary,
  },
  info: {
    flex: 1,
    gap: Gap.gap_3xs,
  },
  avatarBlock: {
    flexDirection: "row",
    gap: StyleVariable.space300,
    alignSelf: "stretch",
  },
});

export default AvatarBlock;
