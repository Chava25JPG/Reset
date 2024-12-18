import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize } from "../GlobalStyles";

const GroupComponent3 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.groupParent}>
      <View style={[styles.tarjetaDeDebito4882Parent, styles.parentPosition]}>
        <Text style={[styles.tarjetaDeDebito, styles.textPosition]}>
          Tarjeta de Debito: **4882
        </Text>
        <Text style={[styles.cartera, styles.carteraTypo]}>CARTERA</Text>
      </View>
      <View style={[styles.mxicoParent, styles.parentPosition]}>
        <Text style={[styles.mxico, styles.mxicoPosition]}>México</Text>
        <Text
          style={[styles.direccin, styles.mxicoPosition]}
        >{`DIRECCIÓN `}</Text>
      </View>
      <Text style={[styles.administrarNotificaciones, styles.carteraTypo]}>
        ADMINISTRAR NOTIFICACIONES
      </Text>
      <Text style={[styles.eliminarCuenta, styles.carteraTypo]}>
        ELIMINAR CUENTA
      </Text>
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.text, styles.textPosition]}>+52 56 1104 7601</Text>
        <Text style={[styles.telefono, styles.carteraTypo]}>TELEFONO</Text>
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
      <Pressable
        style={[styles.chevronRight, styles.chevronIconLayout]}
        onPress={() => navigation.navigate("Mensajes")}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/chevronright.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  parentPosition: {
    height: 30,
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  carteraTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodySmall_size,
  },
  mxicoPosition: {
    marginLeft: -36.5,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  chevronIconLayout: {
    height: 16,
    width: 16,
    left: 265,
    position: "absolute",
  },
  tarjetaDeDebito: {
    marginLeft: -38,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    top: 16,
  },
  cartera: {
    marginLeft: -96,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
    top: 0,
  },
  tarjetaDeDebito4882Parent: {
    width: 192,
    top: 0,
    marginLeft: -137.5,
  },
  mxico: {
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    top: 16,
  },
  direccin: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodySmall_size,
    top: 0,
  },
  mxicoParent: {
    top: 51,
    width: 73,
    marginLeft: -137.5,
  },
  administrarNotificaciones: {
    top: 152,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
    marginLeft: -137.5,
  },
  eliminarCuenta: {
    top: 191,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
    marginLeft: -137.5,
  },
  text: {
    marginLeft: -48.5,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    top: 16,
  },
  telefono: {
    marginLeft: -45.5,
    width: 69,
    height: 27,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
    top: 0,
  },
  parent: {
    marginLeft: -140.5,
    top: 102,
    width: 97,
  },
  chevronRightIcon: {
    top: 7,
    overflow: "hidden",
  },
  chevronRightIcon1: {
    top: 58,
    overflow: "hidden",
  },
  chevronRightIcon2: {
    top: 109,
    overflow: "hidden",
  },
  chevronRightIcon3: {
    overflow: "hidden",
    top: 152,
  },
  chevronRightIcon4: {
    overflow: "hidden",
    top: 191,
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  chevronRight: {
    top: 230,
  },
  groupParent: {
    marginLeft: -142,
    top: 534,
    width: 281,
    height: 246,
    left: "50%",
    position: "absolute",
  },
});

export default GroupComponent3;
