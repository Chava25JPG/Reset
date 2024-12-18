import * as React from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import Component from "../components/Component";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Button1 from "../components/Button1";
import CabeceraMobile from "../components/CabeceraMobile";
import { Padding, Border, Color } from "../GlobalStyles";

const Servicios = () => {
  return (
    <View style={[styles.servicios, styles.serviciosShadowBox]}>
      <View style={[styles.component3Wrapper, styles.serviciosShadowBox]}>
        <Component />
      </View>
      <FrameComponent />
      <FrameComponent1 />
      <Image
        style={styles.akarIconsmoreHorizontal}
        resizeMode="cover"
        source={require("../assets/akariconsmorehorizontal.png")}
      />
      <View style={[styles.dropdownTrigger, styles.dropdownFlexBox]}>
        <Button1
          iconOnly={false}
          outline={false}
          size="large"
          state="normal"
          type="primary"
          icon={require("../assets/icon.png")}
          icon2={require("../assets/icon2.png")}
          iconLeft={false}
          iconRight={false}
          buttonAlignSelf="unset"
        />
        <View style={[styles.dropdownToggle, styles.dropdownFlexBox]}>
          <Image
            style={styles.icon}
            resizeMode="cover"
            source={require("../assets/icon7.png")}
          />
        </View>
      </View>
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container2.png")}
        cabeceraMobileMarginLeft={-207}
        cabeceraMobileLeft="50%"
        cabeceraMobileMarginTop="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  serviciosShadowBox: {
    shadowOpacity: 1,
    elevation: 80,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowColor: "rgba(0, 0, 0, 0.07)",
  },
  dropdownFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  component3Wrapper: {
    top: 223,
    left: 10,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  akarIconsmoreHorizontal: {
    top: 813,
    left: 168,
    width: 72,
    height: 72,
    position: "absolute",
  },
  icon: {
    width: 12,
    height: 12,
    overflow: "hidden",
  },
  dropdownToggle: {
    alignSelf: "stretch",
    borderTopRightRadius: Border.br_8xs_8,
    borderBottomRightRadius: Border.br_8xs_8,
    backgroundColor: Color.yellow600,
    borderStyle: "solid",
    borderColor: Color.yellow600,
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    overflow: "hidden",
  },
  dropdownTrigger: {
    marginLeft: -78,
    top: 166,
    left: "50%",
    position: "absolute",
  },
  servicios: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.grayWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default Servicios;
