import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CabeceraMobile from "../components/CabeceraMobile";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Reserva = () => {
  return (
    <View style={styles.reserva}>
      <Image
        style={styles.openmojireturnBackButtonIcon}
        resizeMode="cover"
        source={require("../assets/openmojireturnbackbutton.png")}
      />
      <Text style={styles.momentoRelajante}>{`Momento
Relajante`}</Text>
      <Image
        style={[styles.untitledDesign61, styles.reservaChildPosition]}
        resizeMode="cover"
        source={require("../assets/untitled-design-6-1.png")}
      />
      <View style={[styles.reservaChild, styles.reservaChildPosition]} />
      <Text style={styles.minutosDeMasaje}>
        45’ Minutos de masaje relajante o con piedras calientes
      </Text>
      <Image
        style={styles.reservaItem}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <View style={styles.reservaTuCitaWrapper}>
        <Text style={styles.reservaTuCita}>{`Reserva tu cita `}</Text>
      </View>
      <Image
        style={[styles.iconlylightOutlinetimeCirc, styles.iconlylightLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinetimecircle.png")}
      />
      <Text
        style={[styles.tratamientoFacialPersonaliza, styles.cavaYBombonesTypo]}
      >
        Tratamiento facial personalizado
      </Text>
      <Text style={[styles.minutosDeJacuzzi, styles.cavaYBombonesTypo]}>
        20’ Minutos de Jacuzzi privado
      </Text>
      <Text style={[styles.cavaYBombones, styles.cavaYBombonesTypo]}>
        Cava y bombones
      </Text>
      <Image
        style={[styles.profileIcon, styles.iconlylightLayout]}
        resizeMode="cover"
        source={require("../assets/profile1.png")}
      />
      <Image
        style={[styles.iconlylightOutlinestar, styles.iconlylightLayout]}
        resizeMode="cover"
        source={require("../assets/iconlylightoutlinestar1.png")}
      />
      <Image
        style={styles.antDesigngiftOutlinedIcon}
        resizeMode="cover"
        source={require("../assets/antdesigngiftoutlined1.png")}
      />
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
  reservaChildPosition: {
    width: 323,
    left: 46,
    position: "absolute",
  },
  iconlylightLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cavaYBombonesTypo: {
    left: 118,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  openmojireturnBackButtonIcon: {
    top: 173,
    left: 45,
    width: 35,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  momentoRelajante: {
    top: 171,
    left: 139,
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  untitledDesign61: {
    top: 270,
    borderRadius: Border.br_mini,
    height: 277,
  },
  reservaChild: {
    top: 453,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    borderRadius: Border.br_xl,
    backgroundColor: "rgba(138, 121, 0, 0.13)",
    height: 414,
    opacity: 0.8,
    shadowOpacity: 1,
  },
  minutosDeMasaje: {
    top: 503,
    left: 115,
    fontWeight: "900",
    fontFamily: FontFamily.robotoBlack,
    color: Color.grayWhite,
    height: 15,
    width: 231,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    position: "absolute",
  },
  reservaItem: {
    top: 475,
    left: 163,
    width: 89,
    height: 0,
    position: "absolute",
  },
  reservaTuCita: {
    top: 7,
    color: Color.colorSnow,
    fontSize: FontSize.bodyRegular_size,
    left: 46,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  reservaTuCitaWrapper: {
    top: 764,
    left: 107,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod,
    width: 200,
    height: 33,
    position: "absolute",
  },
  iconlylightOutlinetimeCirc: {
    top: "54.91%",
    right: "75.36%",
    bottom: "41.74%",
    left: "17.39%",
    width: "7.25%",
    height: "3.35%",
    maxWidth: "100%",
  },
  tratamientoFacialPersonaliza: {
    top: 588,
    width: 248,
  },
  minutosDeJacuzzi: {
    top: 652,
    width: 231,
  },
  cavaYBombones: {
    top: 708,
    width: 231,
  },
  profileIcon: {
    height: "3.13%",
    width: "5.8%",
    top: "64.84%",
    right: "76.33%",
    bottom: "32.03%",
    left: "17.87%",
  },
  iconlylightOutlinestar: {
    top: "71.65%",
    right: "75.85%",
    bottom: "25%",
    left: "16.91%",
    width: "7.25%",
    height: "3.35%",
    maxWidth: "100%",
  },
  antDesigngiftOutlinedIcon: {
    top: 698,
    left: 70,
    width: 30,
    height: 30,
    position: "absolute",
    overflow: "hidden",
  },
  reserva: {
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

export default Reserva;
