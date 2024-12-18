import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ReviewCard from "../components/ReviewCard";
import SFinalizado from "../components/SFinalizado";
import CabeceraMobile from "../components/CabeceraMobile";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CalificarTerapeuta = () => {
  return (
    <View style={styles.calificarTerapeuta}>
      <View style={styles.sample091} />
      <View style={styles.calificarTerapeutaChild} />
      <Text style={[styles.legales, styles.legalesTypo]}>Legales</Text>
      <Text style={[styles.contacto, styles.legalesTypo]}>Contacto</Text>
      <Text style={[styles.avisoDePrivacidad, styles.clienteTypo]}>
        Aviso de privacidad
      </Text>
      <View style={styles.brigitteBozzoParent}>
        <Text style={[styles.brigitteBozzo, styles.legalesTypo]}>
          Brigitte Bozzo
        </Text>
        <Text style={[styles.cliente, styles.clienteTypo]}>Cliente</Text>
        <View
          style={[styles.perfilCirculo600x3981, styles.sample092IconLayout]}
        />
      </View>
      <Image
        style={styles.sample091}
        resizeMode="cover"
        source={require("../assets/perfilcirculo600x398-12.png")}
      />
      <Text
        style={[styles.alejandroDaz, styles.clienteTypo]}
      >{`ALEJANDRO DÍAZ `}</Text>
      <ReviewCard
        star={require("../assets/star4.png")}
        star1={require("../assets/star5.png")}
        star2={require("../assets/star5.png")}
        star3={require("../assets/star5.png")}
        star4={require("../assets/star6.png")}
        reviewCardTop={377}
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
      <SFinalizado />
      <Image
        style={[styles.sample092Icon, styles.sample092IconLayout]}
        resizeMode="cover"
        source={require("../assets/sample09-2.png")}
      />
      <Image
        style={[styles.icon3, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/icon3.png")}
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
  legalesTypo: {
    textAlign: "center",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  clienteTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  sample092IconLayout: {
    width: 40,
    height: 40,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "53.25%",
    top: "44.98%",
    width: "4.03%",
    height: "1.77%",
    position: "absolute",
    overflow: "hidden",
  },
  sample091: {
    marginLeft: -40,
    top: 249,
    width: 80,
    height: 80,
    left: "50%",
    position: "absolute",
  },
  calificarTerapeutaChild: {
    top: 237,
    left: 28,
    borderRadius: Border.br_xl,
    backgroundColor: Color.borderDefaultDefault,
    width: 358,
    height: 547,
    position: "absolute",
  },
  legales: {
    marginLeft: -106,
    top: 834,
    textAlign: "center",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
  },
  contacto: {
    marginLeft: 55,
    top: 834,
    textAlign: "center",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
  },
  avisoDePrivacidad: {
    marginLeft: -70,
    top: 801,
  },
  brigitteBozzo: {
    marginLeft: -8.5,
    top: 26,
  },
  cliente: {
    marginLeft: 0.5,
    top: 0,
  },
  perfilCirculo600x3981: {
    left: 0,
    top: 0,
  },
  brigitteBozzoParent: {
    marginLeft: -82,
    top: 190,
    width: 133,
    height: 40,
    left: "50%",
    position: "absolute",
  },
  alejandroDaz: {
    marginLeft: -66,
    top: 336,
  },
  icon: {
    right: "56.11%",
    left: "39.86%",
  },
  icon1: {
    right: "61.91%",
    left: "34.06%",
  },
  icon2: {
    right: "67.71%",
    left: "28.26%",
  },
  sample092Icon: {
    marginLeft: -65,
    top: 187,
    left: "50%",
  },
  icon3: {
    right: "73.5%",
    left: "22.46%",
  },
  calificarTerapeuta: {
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

export default CalificarTerapeuta;
