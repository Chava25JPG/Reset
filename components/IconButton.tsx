import * as React from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Padding, Border } from "../GlobalStyles";

export type IconButtonType = {
  icon?: ImageSourcePropType;
  showLeadingIcon?: boolean;

  /** Variant props */
  state?: string;
  style?: string;
};

const IconButton = ({
  state = "Disabled",
  style = "Outlined",
  icon,
  showLeadingIcon,
}: IconButtonType) => {
  return (
    showLeadingIcon && (
      <View style={styles.leadingIcon}>
        <View style={[styles.container, styles.containerFlexBox]}>
          <View style={[styles.stateLayer, styles.containerFlexBox]}>
            <Image style={styles.icon} resizeMode="cover" source={icon} />
          </View>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  stateLayer: {
    padding: Padding.p_5xs,
  },
  container: {
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  leadingIcon: {
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default IconButton;
