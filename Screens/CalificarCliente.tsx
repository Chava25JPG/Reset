import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import ReviewCard from "../components/ReviewCard";
import CabeceraMobile from "../components/CabeceraMobile";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CalificarCliente = () => {
  return (
    <View style={styles.calificarCliente}>
      <Text style={[styles.legales, styles.legalesPosition]}>Legales</Text>
      <Text style={[styles.contacto, styles.legalesPosition]}>Contacto</Text>
      <Text style={[styles.avisoDePrivacidad, styles.terapeutaTypo]}>
        Aviso de privacidad
      </Text>
      <View style={[styles.alejandroDiazParent, styles.sample091IconPosition]}>
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
      <View style={styles.calificarClienteChild} />
      <Image
        style={[styles.sample091Icon, styles.sample091IconPosition]}
        resizeMode="cover"
        source={require("../assets/sample09-1.png")}
      />
      <Text style={[styles.brigitteBozzo, styles.terapeutaTypo]}>
        Brigitte Bozzo
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={[styles.estatus, styles.estatusTypo]}>Estatus</Text>
        <Text style={[styles.finalizado, styles.estatusTypo]}>Finalizado</Text>
        <Image
          style={styles.checkIcon}
          resizeMode="cover"
          source={require("../assets/check.png")}
        />
      </View>
      <ReviewCard
        star={require("../assets/star.png")}
        star1={require("../assets/star.png")}
        star2={require("../assets/star1.png")}
        star3={require("../assets/star2.png")}
        star4={require("../assets/star3.png")}
      />
      <Image
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon3.png")}
      />
      <Image
        style={[styles.icon1, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon3.png")}
      />
      <Image
        style={[styles.icon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon3.png")}
      />
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  legalesPosition: {
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  terapeutaTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodyRegular_size,
  },
  sample091IconPosition: {
    left: "50%",
    position: "absolute",
  },
  terapeutaPosition1: {
    marginLeft: -25,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
  },
  terapeutaPosition: {
    top: 0,
    position: "absolute",
  },
  estatusTypo: {
    height: 14,
    color: Color.componentsAlertSuccessText,
    width: 107,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "52.02%",
    top: "46.21%",
    width: "4.03%",
    height: "1.77%",
    position: "absolute",
    overflow: "hidden",
  },
  legales: {
    marginLeft: -106,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    top: 834,
    color: Color.colorDimgray_100,
  },
  contacto: {
    marginLeft: 55,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    top: 834,
    color: Color.colorDimgray_100,
  },
  avisoDePrivacidad: {
    marginLeft: -70,
    top: 801,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  alejandroDiaz: {
    top: 26,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    position: "absolute",
    marginLeft: -25,
  },
  terapeuta: {
    marginLeft: -25,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodyRegular_size,
  },
  perfilCirculo600x3981Icon: {
    width: 40,
    left: 0,
    height: 40,
  },
  alejandroDiazParent: {
    marginLeft: -72,
    top: 180,
    width: 144,
    height: 40,
  },
  calificarClienteChild: {
    left: 28,
    borderRadius: Border.br_xl,
    backgroundColor: Color.borderDefaultDefault,
    width: 358,
    height: 547,
    top: 237,
    position: "absolute",
  },
  sample091Icon: {
    marginLeft: -40,
    top: 249,
    width: 80,
    height: 80,
  },
  brigitteBozzo: {
    marginLeft: -52,
    top: 336,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.componentsAlertSuccessBackground,
    width: 107,
    borderBottomLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    left: 1,
    height: 67,
    top: 0,
    position: "absolute",
  },
  estatus: {
    top: 5,
    left: 0,
  },
  finalizado: {
    top: 22,
    left: 1,
    height: 14,
    color: Color.componentsAlertSuccessText,
  },
  checkIcon: {
    top: 40,
    left: 42,
    width: 24,
    height: 24,
    borderBottomLeftRadius: Border.br_xl,
    borderTopRightRadius: Border.br_xl,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    left: 278,
    width: 108,
    height: 67,
    top: 237,
    position: "absolute",
  },
  icon: {
    right: "56.11%",
    left: "39.86%",
  },
  icon1: {
    right: "73.5%",
    left: "22.46%",
  },
  icon2: {
    right: "67.46%",
    left: "28.5%",
  },
  calificarCliente: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowRadius: 80,
    elevation: 80,
    shadowOpacity: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.grayWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default CalificarCliente;
