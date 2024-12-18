import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent2 = () => {
  return (
    <View style={styles.groupParent}>
      <View style={[styles.saldoActual20000Parent, styles.parentPosition]}>
        <Text style={[styles.saldoActual20000, styles.carteraPosition]}>
          Saldo actual: $200.00
        </Text>
        <Text style={[styles.cartera, styles.paisTypo]}>CARTERA</Text>
      </View>
      <View style={[styles.mxicoParent, styles.parentPosition]}>
        <Text style={[styles.mxico, styles.paisPosition]}>México</Text>
        <Text style={[styles.pais, styles.paisPosition]}>PAIS</Text>
      </View>
      <Text style={[styles.administrarNotificaciones, styles.paisTypo]}>
        ADMINISTRAR NOTIFICACIONES
      </Text>
      <Text style={[styles.eliminarCuenta, styles.paisTypo]}>
        ELIMINAR CUENTA
      </Text>
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text, styles.textPosition]}>+52 8112277365</Text>
        <Text style={[styles.telefono, styles.textPosition]}>TELEFONO</Text>
      </View>
      <Image
        style={[styles.chevronRightIcon, styles.chevronIconLayout]}
        resizeMode="cover"
        source={require("../assets/chevronright.png")}
      />
      <Image
        style={[styles.chevronRightIcon1, styles.chevronIconLayout]}
        resizeMode="cover"
        source={require("../assets/chevronright.png")}
      />
      <Image
        style={[styles.chevronRightIcon2, styles.chevronIconLayout]}
        resizeMode="cover"
        source={require("../assets/chevronright.png")}
      />
      <Image
        style={[styles.chevronRightIcon3, styles.chevronIconLayout]}
        resizeMode="cover"
        source={require("../assets/chevronright.png")}
      />
      <Image
        style={[styles.chevronRightIcon4, styles.chevronIconLayout]}
        resizeMode="cover"
        source={require("../assets/chevronright.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    height: 30,
    left: "50%",
    marginLeft: -139,
    position: "absolute",
  },
  carteraPosition: {
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  paisTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodySmall_size,
  },
  paisPosition: {
    marginLeft: -19.5,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    marginLeft: -45.5,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  chevronIconLayout: {
    overflow: "hidden",
    height: 16,
    width: 16,
    left: 262,
    position: "absolute",
  },
  saldoActual20000: {
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    top: 16,
    marginLeft: -58,
    color: Color.colorDimgray_100,
  },
  cartera: {
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
    marginLeft: -58,
    top: 0,
  },
  saldoActual20000Parent: {
    width: 116,
    top: 0,
  },
  mxico: {
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    top: 16,
  },
  pais: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodySmall_size,
    top: 0,
  },
  mxicoParent: {
    top: 51,
    width: 39,
  },
  administrarNotificaciones: {
    top: 152,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
    marginLeft: -139,
    fontWeight: "700",
    fontSize: FontSize.bodySmall_size,
  },
  eliminarCuenta: {
    top: 191,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
    marginLeft: -139,
    fontWeight: "700",
    fontSize: FontSize.bodySmall_size,
  },
  text: {
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    top: 16,
  },
  telefono: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodySmall_size,
    top: 0,
  },
  parent: {
    top: 102,
    width: 91,
  },
  chevronRightIcon: {
    top: 7,
  },
  chevronRightIcon1: {
    top: 58,
  },
  chevronRightIcon2: {
    top: 109,
  },
  chevronRightIcon3: {
    top: 152,
  },
  chevronRightIcon4: {
    top: 191,
  },
  groupParent: {
    top: 534,
    width: 278,
    height: 207,
    left: "50%",
    position: "absolute",
    marginLeft: -139,
  },
});

export default GroupComponent2;
