import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import IconButton from "./IconButton";
import {
  FontSize,
  FontFamily,
  Color,
  Padding,
  Gap,
  Border,
} from "../GlobalStyles";

export type SearchBarType = {
  placeholderText?: string;
  show1stTrailingIcon?: boolean;
  show2ndTrailingIcon?: boolean;

  /** Variant props */
  showAvatar?: boolean;
  state?: string;
};

const SearchBar = ({
  showAvatar = true,
  state = "Pressed",
  placeholderText = "Hinted search text",
  show1stTrailingIcon = true,
  show2ndTrailingIcon = false,
}: SearchBarType) => {
  return (
    <View style={[styles.searchBar, styles.searchBarFlexBox]}>
      <View style={[styles.stateLayer, styles.contentFlexBox]}>
        <IconButton
          state="Enabled"
          style="Standard"
          icon={require("../assets/icon8.png")}
          showLeadingIcon
        />
        <View style={styles.contentFlexBox}>
          <Text style={styles.supportingText}>{placeholderText}</Text>
        </View>
        <View style={[styles.trailingElements, styles.searchBarFlexBox]}>
          <IconButton
            state="Enabled"
            style="Standard"
            icon={require("../assets/icon9.png")}
            showLeadingIcon
          />
          <IconButton
            state="Enabled"
            style="Standard"
            icon={require("../assets/icon10.png")}
            showLeadingIcon={false}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  contentFlexBox: {
    flex: 1,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  supportingText: {
    fontSize: FontSize.bodyRegular_size,
    letterSpacing: 1,
    lineHeight: 24,
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.m3SysLightOnSurfaceVariant,
    textAlign: "left",
    display: "none",
  },
  trailingElements: {
    justifyContent: "flex-end",
  },
  stateLayer: {
    backgroundColor: Color.grayWhite,
    padding: Padding.p_9xs,
    gap: Gap.gap_2xs,
  },
  searchBar: {
    borderRadius: Border.br_9xl,
    backgroundColor: Color.m3SysLightSurfaceContainerHigh,
    width: 323,
    height: 34,
  },
});

export default SearchBar;
