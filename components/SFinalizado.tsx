import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SFinalizado = () => {
  return (
    <View style={styles.sFinalizado}>
      <View style={styles.sFinalizadoChild} />
      <Text style={[styles.estatus, styles.estatusTypo]}>Estatus</Text>
      <Text style={[styles.finalizado, styles.estatusTypo]}>Finalizado</Text>
      <Image
        style={styles.checkIcon}
        resizeMode="cover"
        source={require("../assets/check.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  estatusTypo: {
    textAlign: "center",
    color: Color.componentsAlertSuccessText,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    height: "20.9%",
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  sFinalizadoChild: {
    height: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    borderTopRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.componentsAlertSuccessBackground,
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  estatus: {
    top: "7.46%",
  },
  finalizado: {
    top: "32.84%",
  },
  checkIcon: {
    height: "35.82%",
    width: "22.43%",
    top: "59.7%",
    right: "39.25%",
    bottom: "4.48%",
    left: "38.32%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  sFinalizado: {
    top: 237,
    left: 279,
    width: 107,
    height: 67,
    position: "absolute",
  },
});

export default SFinalizado;
