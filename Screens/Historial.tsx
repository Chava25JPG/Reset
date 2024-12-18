import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import CabeceraMobile from "../components/CabeceraMobile";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Historial = () => {
  return (
    <View style={styles.historial}>
      <Text style={[styles.legales, styles.legalesPosition]}>Legales</Text>
      <Text style={[styles.contacto, styles.legalesPosition]}>Contacto</Text>
      <Text style={[styles.avisoDePrivacidad, styles.terapeutaTypo]}>
        Aviso de privacidad
      </Text>
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
      <Text style={[styles.text, styles.textPosition]}>$5,430</Text>
      <Text style={[styles.text1, styles.textPosition]}>8</Text>
      <Text style={[styles.text2, styles.textPosition]}>2</Text>
      <Text style={[styles.pendientes, styles.pendientesTypo]}>PENDIENTES</Text>
      <Text style={[styles.masajesPendientes, styles.masajesTypo]}>
        Masajes pendientes
      </Text>
      <Text style={[styles.masajesAsignados, styles.masajesTypo]}>
        Masajes asignados
      </Text>
      <Text style={[styles.ganancias, styles.masajesTypo]}>Ganancias</Text>
      <Text style={[styles.completados, styles.pendientesTypo]}>
        COMPLETADOS
      </Text>
      <View style={styles.historialChild} />
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="12:41"
        container={require("../assets/container.png")}
        cabeceraMobileMarginLeft={-207}
        cabeceraMobileLeft="50%"
        cabeceraMobileMarginTop="unset"
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
  textPosition: {
    top: 377,
    textAlign: "center",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  pendientesTypo: {
    fontSize: FontSize.bodySmall_size,
    top: 262,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  masajesTypo: {
    top: 341,
    fontSize: FontSize.bodySmall_size,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  legales: {
    marginLeft: -106,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    top: 834,
    textAlign: "center",
    color: Color.colorDimgray_100,
  },
  contacto: {
    marginLeft: 55,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    top: 834,
    textAlign: "center",
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
    left: 0,
    width: 40,
    height: 40,
  },
  alejandroDiazParent: {
    marginLeft: -72,
    top: 179,
    width: 144,
    height: 40,
    left: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: 125,
  },
  text1: {
    marginLeft: 28,
  },
  text2: {
    marginLeft: -115,
  },
  pendientes: {
    marginLeft: -139,
  },
  masajesPendientes: {
    marginLeft: -175,
  },
  masajesAsignados: {
    marginLeft: -30,
  },
  ganancias: {
    marginLeft: 110,
  },
  completados: {
    marginLeft: 46,
  },
  historialChild: {
    top: 286,
    left: 34,
    borderStyle: "solid",
    borderColor: Color.colorOlive,
    borderTopWidth: 1,
    width: 175,
    height: 1,
    position: "absolute",
  },
  historial: {
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

export default Historial;
