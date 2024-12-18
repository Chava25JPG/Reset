import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import GroupComponent from "../components/GroupComponent";
import CabeceraMobile from "../components/CabeceraMobile";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ConfirmacionDePedido = () => {
  return (
    <View style={styles.confirmacionDePedido}>
      <GroupComponent pAGARAHORA="PAGAR AHORA" />
      <Image
        style={[styles.untitledDesign61, styles.confirmacionLayout]}
        resizeMode="cover"
        source={require("../assets/untitled-design-6-1.png")}
      />
      <View
        style={[styles.confirmacionDePedidoChild, styles.confirmacionLayout]}
      />
      <Text style={[styles.minutosDeMasaje, styles.minutosTypo]}>
        45’ Minutos de masaje relajante o con piedras calientes
      </Text>
      <Image
        style={[styles.iconlylightOutlinetimeCirc, styles.iconlylightLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinetimecircle.png")}
      />
      <Text style={[styles.tratamientoFacialPersonaliza, styles.textFlexBox]}>
        Tratamiento facial personalizado
      </Text>
      <Text style={[styles.minutosDeJacuzzi, styles.minutosTypo]}>
        20’ Minutos de Jacuzzi privado
      </Text>
      <Text style={[styles.cavaYBombones, styles.minutosTypo]}>
        Cava y bombones
      </Text>
      <Image
        style={[styles.profileIcon, styles.iconlylightLayout]}
        resizeMode="cover"
        source={require("../assets/profile.png")}
      />
      <Image
        style={[styles.iconlylightOutlinestar, styles.iconlylightLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinestar.png")}
      />
      <Image
        style={styles.antDesigngiftOutlinedIcon}
        resizeMode="cover"
        source={require("../assets/antdesigngiftoutlined.png")}
      />
      <Text style={[styles.momentoRelajante, styles.textTypo]}>
        Momento Relajante
      </Text>
      <Text style={[styles.text, styles.textTypo]}>$110</Text>
      <View
        style={[styles.confirmacionDePedidoItem, styles.confirmacionLayout]}
      />
      <Text style={[styles.apo, styles.apoPosition]}>APO</Text>
      <Text style={[styles.aos, styles.apoPosition]}>33 años</Text>
      <Text style={[styles.hombre, styles.apoPosition]}>Hombre</Text>
      <View style={styles.alejandroDiazParent}>
        <Text style={[styles.alejandroDiaz, styles.terapeutaPosition1]}>
          ALEJANDRO DIAZ
        </Text>
        <Text style={[styles.terapeuta, styles.terapeutaPosition]}>
          TERAPEUTA
        </Text>
        <Image
          style={[styles.perfilCirculo600x3981Icon, styles.terapeutaPosition]}
          resizeMode="cover"
          source={require("../assets/perfilcirculo600x398-1.png")}
        />
      </View>
      <Image
        style={styles.confirmacionDePedidoInner}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container.png")}
        cabeceraMobileMarginLeft={-207}
        cabeceraMobileLeft="50%"
        cabeceraMobileMarginTop="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  confirmacionLayout: {
    width: 323,
    position: "absolute",
  },
  minutosTypo: {
    width: 231,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodyRegular_size,
    position: "absolute",
  },
  iconlylightLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textFlexBox: {
    alignItems: "center",
    display: "flex",
    color: Color.grayBlack,
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  apoPosition: {
    color: Color.colorDarkslategray_200,
    top: 237,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  terapeutaPosition1: {
    marginLeft: -25,
    textAlign: "center",
    left: "50%",
  },
  terapeutaPosition: {
    top: 0,
    position: "absolute",
  },
  untitledDesign61: {
    height: 277,
    borderRadius: Border.br_mini,
    top: 210,
    width: 323,
    left: "50%",
    marginLeft: -161,
  },
  confirmacionDePedidoChild: {
    top: 343,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_xl,
    backgroundColor: "rgba(205, 180, 4, 0.13)",
    height: 338,
    opacity: 0.8,
    left: "50%",
    marginLeft: -161,
    shadowOpacity: 1,
  },
  minutosDeMasaje: {
    top: 453,
    height: 15,
    color: Color.grayWhite,
    left: 113,
    width: 231,
  },
  iconlylightOutlinetimeCirc: {
    top: "49.33%",
    bottom: "47.32%",
    left: "14.01%",
    right: "78.74%",
    maxWidth: "100%",
    width: "7.25%",
    height: "3.35%",
  },
  tratamientoFacialPersonaliza: {
    top: 511,
    width: 248,
    color: Color.grayBlack,
    textAlign: "left",
    display: "flex",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodyRegular_size,
    left: 113,
    position: "absolute",
  },
  minutosDeJacuzzi: {
    top: 566,
    left: 110,
    color: Color.grayBlack,
  },
  cavaYBombones: {
    top: 616,
    left: 115,
    color: Color.grayBlack,
  },
  profileIcon: {
    height: "3.13%",
    width: "5.8%",
    top: "56.25%",
    bottom: "40.63%",
    left: "15.46%",
    right: "78.74%",
    maxWidth: "100%",
  },
  iconlylightOutlinestar: {
    top: "62.28%",
    right: "78.26%",
    bottom: "34.38%",
    left: "14.49%",
    width: "7.25%",
    height: "3.35%",
  },
  antDesigngiftOutlinedIcon: {
    top: 608,
    left: 60,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  momentoRelajante: {
    top: 370,
    left: 61,
    fontSize: FontSize.size_11xl,
    width: 314,
    color: Color.grayWhite,
  },
  text: {
    height: "4.58%",
    marginLeft: -52,
    top: "71.54%",
    fontSize: FontSize.size_13xl,
    justifyContent: "center",
    width: 80,
    color: Color.grayBlack,
    alignItems: "center",
    display: "flex",
    left: "50%",
  },
  confirmacionDePedidoItem: {
    left: 46,
    backgroundColor: Color.borderDefaultDefault,
    height: 66,
    borderRadius: Border.br_mini,
    top: 210,
    width: 323,
  },
  apo: {
    marginLeft: 68,
  },
  aos: {
    marginLeft: 105,
  },
  hombre: {
    marginLeft: 13,
  },
  alejandroDiaz: {
    top: 24,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    marginLeft: -25,
    position: "absolute",
  },
  terapeuta: {
    marginLeft: -25,
    textAlign: "center",
    left: "50%",
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodyRegular_size,
    top: 0,
  },
  perfilCirculo600x3981Icon: {
    left: 0,
    width: 40,
    height: 40,
  },
  alejandroDiazParent: {
    marginLeft: -146,
    top: 224,
    width: 144,
    height: 40,
    left: "50%",
    position: "absolute",
  },
  confirmacionDePedidoInner: {
    top: 352,
    left: 158,
    width: 89,
    height: 0,
    position: "absolute",
  },
  confirmacionDePedido: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowRadius: 80,
    elevation: 80,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.grayWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    shadowOpacity: 1,
  },
});

export default ConfirmacionDePedido;
