import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import SearchBar from "./SearchBar";
import { Border, Color, Padding, Gap } from "../GlobalStyles";

const Bar = () => {
  return (
    <View style={styles.bar}>
      <Image
        style={[styles.addCircleIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/add-circle.png")}
      />
      <SearchBar
        showAvatar={false}
        state="Enabled"
        placeholderText="Hinted search text"
        show1stTrailingIcon
        show2ndTrailingIcon={false}
      />
      <Image
        style={styles.iconLayout}
        resizeMode="cover"
        source={require("../assets/mood.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 24,
    width: 24,
  },
  addCircleIcon: {
    overflow: "hidden",
  },
  bar: {
    position: "absolute",
    top: 715,
    left: -21,
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.yellow200,
    width: 455,
    height: 72,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    padding: Padding.p_base,
    gap: Gap.gap_lg,
  },
});

export default Bar;
