import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import CabeceraMobile from "../components/CabeceraMobile";
import HorizontalMiddleInset from "../components/HorizontalMiddleInset";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Men = () => {
  return (
    <View style={styles.men}>
      <CabeceraMobile
        icon={require("../assets/icon5.png")}
        hora="09:41"
        container={require("../assets/container1.png")}
        cabeceraMobileMarginLeft={-207}
        cabeceraMobileLeft="50%"
        cabeceraMobileTop="50%"
        cabeceraMobileMarginTop={-448}
      />
      <View style={styles.menChild} />
      <Image
        style={styles.sample092Icon}
        resizeMode="cover"
        source={require("../assets/sample09-2.png")}
      />
      <Text style={[styles.brigitteBozzo, styles.brigitteBozzoTypo]}>
        Brigitte Bozzo
      </Text>
      <Text style={[styles.bebozzogmailcom, styles.brigitteBozzoTypo]}>
        bebozzo@gmail.com
      </Text>
      <Text style={[styles.contactoPorWhatsapp, styles.contactoPosition]}>
        CONTACTO POR WHATSAPP
      </Text>
      <Text style={[styles.contactoPorEmail, styles.contactoPosition]}>
        CONTACTO POR EMAIL
      </Text>
      <Text style={[styles.cerrarSesin, styles.contactoPosition]}>
        CERRAR SESIÓN
      </Text>
      <Text style={[styles.serivcios, styles.misPosition]}>SERIVCIOS</Text>
      <Text style={[styles.misReservaciones, styles.misPosition]}>
        MIS RESERVACIONES
      </Text>
      <Text style={[styles.misDirecciones, styles.misPosition]}>
        MIS DIRECCIONES
      </Text>
      <Text style={[styles.mtodosDePago, styles.misPosition]}>
        MÉTODOS DE PAGO
      </Text>
      <Text style={[styles.acercaDe, styles.misPosition]}>{`ACERCA DE `}</Text>
      <Image
        style={[styles.arrowDropDownIcon, styles.arrowIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-drop-down.png")}
      />
      <Image
        style={[styles.arrowDropDownIcon1, styles.arrowIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-drop-down.png")}
      />
      <Image
        style={[styles.arrowDropDownIcon2, styles.arrowIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-drop-down.png")}
      />
      <Image
        style={[styles.arrowDropDownIcon3, styles.arrowIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-drop-down.png")}
      />
      <Image
        style={[styles.arrowDropDownIcon4, styles.arrowIconLayout]}
        resizeMode="cover"
        source={require("../assets/arrow-drop-down.png")}
      />
      <HorizontalMiddleInset />
      <Image
        style={[styles.arrowForwardIcon, styles.arrowIconPosition]}
        resizeMode="cover"
        source={require("../assets/arrow-forward.png")}
      />
      <Image
        style={[styles.arrowDropDownIcon5, styles.arrowIconPosition]}
        resizeMode="cover"
        source={require("../assets/arrow-drop-down.png")}
      />
      <Image
        style={[styles.arrowDropDownIcon6, styles.arrowIconPosition]}
        resizeMode="cover"
        source={require("../assets/arrow-drop-down.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  brigitteBozzoTypo: {
    textAlign: "center",
    color: Color.grayWhite,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  contactoPosition: {
    color: Color.colorGoldenrod,
    marginLeft: -184,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  misPosition: {
    marginLeft: -181,
    color: Color.colorGoldenrod,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  arrowIconLayout: {
    height: 24,
    width: 24,
    left: 248,
    position: "absolute",
  },
  arrowIconPosition: {
    left: 249,
    height: 24,
    width: 24,
    position: "absolute",
  },
  menChild: {
    top: 99,
    left: 0,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_xl,
    backgroundColor: Color.grayBlack,
    width: 327,
    height: 806,
    position: "absolute",
  },
  sample092Icon: {
    marginLeft: -170,
    top: 125,
    width: 40,
    height: 40,
    left: "50%",
    position: "absolute",
  },
  brigitteBozzo: {
    marginLeft: -126,
    top: 129,
  },
  bebozzogmailcom: {
    marginLeft: -125,
    top: 143,
  },
  contactoPorWhatsapp: {
    top: 813,
  },
  contactoPorEmail: {
    top: 838,
  },
  cerrarSesin: {
    top: 863,
  },
  serivcios: {
    top: 223,
  },
  misReservaciones: {
    top: 266,
  },
  misDirecciones: {
    top: 309,
  },
  mtodosDePago: {
    top: 344,
  },
  acercaDe: {
    top: 387,
  },
  arrowDropDownIcon: {
    top: 214,
  },
  arrowDropDownIcon1: {
    top: 339,
  },
  arrowDropDownIcon2: {
    top: 385,
  },
  arrowDropDownIcon3: {
    top: 306,
  },
  arrowDropDownIcon4: {
    top: 260,
  },
  arrowForwardIcon: {
    top: 859,
  },
  arrowDropDownIcon5: {
    top: 803,
  },
  arrowDropDownIcon6: {
    top: 835,
  },
  men: {
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

export default Men;
