import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import ComponentspaginationPrev from "./ComponentspaginationPrev";
import ComponentspaginationItem from "./ComponentspaginationItem";
import ComponentspaginationNext from "./ComponentspaginationNext";
import { Color, Padding, Border } from "../GlobalStyles";

const Paginationmediumfalsefalse = () => {
  return (
    <View style={styles.paginationmediumfalsefalse}>
      <ComponentspaginationPrev size="medium" state="normal" type="text" />
      <ComponentspaginationItem size="medium" state="normal" />
      <View style={styles.componentspaginationItemEll}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon6.png")}
        />
      </View>
      <ComponentspaginationItem size="medium" state="normal" />
      <ComponentspaginationItem size="medium" state="normal" />
      <ComponentspaginationItem size="medium" state="active" />
      <ComponentspaginationItem size="medium" state="normal" />
      <ComponentspaginationItem size="medium" state="normal" />
      <View style={styles.componentspaginationItemEll}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/icon6.png")}
        />
      </View>
      <ComponentspaginationItem size="medium" state="normal" />
      <ComponentspaginationNext size="medium" state="normal" type="text" />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  componentspaginationItemEll: {
    backgroundColor: Color.hitBox,
    borderStyle: "solid",
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    width: 38,
    height: 38,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    display: "none",
    overflow: "hidden",
    alignItems: "center",
  },
  paginationmediumfalsefalse: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.grayWhite,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Paginationmediumfalsefalse;
