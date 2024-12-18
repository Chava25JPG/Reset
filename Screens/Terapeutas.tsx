import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Paginationmediumfalsefalse from "../components/Paginationmediumfalsefalse";
import CabeceraMobile from "../components/CabeceraMobile";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Terapeutas = () => {
  return (
    <View style={styles.terapeutas}>
      <Text style={[styles.legales, styles.legalesTypo]}>Legales</Text>
      <Text style={[styles.contacto, styles.legalesTypo]}>Contacto</Text>
      <Text style={[styles.avisoDePrivacidad, styles.brigitteBozzoTypo]}>
        Aviso de privacidad
      </Text>
      <Text style={[styles.terapeutasDisponibles, styles.elijaTypo]}>
        9 Terapeutas disponibles
      </Text>
      <Text style={[styles.elijaSuTerapeuta, styles.elijaTypo]}>
        Elija su terapeuta
      </Text>
      <Text style={[styles.elijaSuTerapeuta, styles.elijaTypo]}>
        Elija su terapeuta
      </Text>
      <View style={styles.brigitteBozzoParent}>
        <Text style={[styles.brigitteBozzo, styles.brigitteBozzoTypo]}>
          Brigitte Bozzo
        </Text>
        <Image
          style={[styles.sample092Icon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/sample09-2.png")}
        />
      </View>
      <View style={styles.paginationmediumfalsefalseParent}>
        <Paginationmediumfalsefalse />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={[styles.terapeutasChild, styles.terapeutasChildLayout]} />
      <View style={[styles.terapeutasItem, styles.terapeutasChildLayout]} />
      <View style={[styles.terapeutasInner, styles.terapeutasChildLayout]} />
      <View style={[styles.rectangleView, styles.terapeutasChildLayout]} />
      <View style={[styles.terapeutasChild1, styles.terapeutasChildLayout]} />
      <View style={[styles.terapeutasChild2, styles.terapeutasChildLayout]} />
      <Image
        style={[styles.perfilDanielaPazminoCirculIcon, styles.idydIconPosition]}
        resizeMode="cover"
        source={require("../assets/perfildanielapazminocirculo-1.png")}
      />
      <Text style={[styles.danielaPazmillo, styles.gdlTypo]}>
        Daniela Pazmillo
      </Text>
      <Text style={[styles.gdl, styles.gdlTypo]}>GDL</Text>
      <Text style={[styles.aos, styles.gdlTypo]}>28 años</Text>
      <Text style={[styles.alejandraMtz, styles.escPosition]}>
        Alejandra Mtz
      </Text>
      <Text style={[styles.esc, styles.escPosition]}>ESC</Text>
      <Text style={[styles.aos1, styles.escPosition]}>46 años</Text>
      <Text style={[styles.mujer, styles.escPosition]}>Mujer</Text>
      <Text style={[styles.mujer1, styles.gdlTypo]}>Mujer</Text>
      <Text style={[styles.martaCortez, styles.mtyPosition]}>Marta Cortez</Text>
      <Text style={[styles.alejandraMtz1, styles.apoPosition]}>
        Alejandra Mtz
      </Text>
      <Text style={[styles.martaCortez1, styles.gdlTypo]}>Marta Cortez</Text>
      <Text style={[styles.sandraGonzalez, styles.staPosition]}>
        Sandra Gonzalez
      </Text>
      <Text style={[styles.mty, styles.mtyPosition]}>MTY</Text>
      <Text style={[styles.apo, styles.apoPosition]}>APO</Text>
      <Text style={[styles.mty1, styles.mty1Position]}>MTY</Text>
      <Text style={[styles.sta, styles.staPosition]}>STA</Text>
      <Text style={[styles.aos2, styles.mtyPosition]}>26 años</Text>
      <Text style={[styles.mujer2, styles.mtyPosition]}>Mujer</Text>
      <Text style={[styles.aos3, styles.apoPosition]}>24 años</Text>
      <Text style={[styles.aos4, styles.mty1Position]}>26 años</Text>
      <Image
        style={[styles.idydAlejandraZorrilla6001Icon, styles.idydIconPosition]}
        resizeMode="cover"
        source={require("../assets/idyd-alejandrazorrilla600-1.png")}
      />
      <Text style={[styles.aos5, styles.staPosition]}>22 años</Text>
      <Text style={[styles.mujer3, styles.apoPosition]}>Mujer</Text>
      <Text style={[styles.mujer4, styles.mty1Position]}>Mujer</Text>
      <Text style={[styles.mujer5, styles.staPosition]}>Mujer</Text>
      <Image
        style={[styles.roundProfilPictureBefore1Icon, styles.idydIconPosition]}
        resizeMode="cover"
        source={require("../assets/round-profil-picture-before--1.png")}
      />
      <View style={[styles.rectangleParent, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Image
          style={styles.checkIcon}
          resizeMode="cover"
          source={require("../assets/check1.png")}
        />
      </View>
      <Image
        style={[styles.idydAlejandraZorrilla6002Icon, styles.idydIconPosition]}
        resizeMode="cover"
        source={require("../assets/idyd-alejandrazorrilla600-1.png")}
      />
      <Image
        style={[styles.roundProfilPictureBefore2Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/round-profil-picture-before--1.png")}
      />
      <Image
        style={[
          styles.bdd752819d71dda3b90472f4cea91Icon,
          styles.idydIconPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/684bdd752819d71dda3b90472f4cea91-1.png")}
      />
      <View style={[styles.rectangleGroup, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Image
          style={styles.checkIcon}
          resizeMode="cover"
          source={require("../assets/check1.png")}
        />
      </View>
      <View style={[styles.rectangleContainer, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Image
          style={styles.checkIcon}
          resizeMode="cover"
          source={require("../assets/check1.png")}
        />
      </View>
      <View style={[styles.groupView, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Image
          style={styles.checkIcon}
          resizeMode="cover"
          source={require("../assets/check1.png")}
        />
      </View>
      <View style={[styles.rectangleParent1, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Image
          style={styles.checkIcon}
          resizeMode="cover"
          source={require("../assets/check1.png")}
        />
      </View>
      <View style={[styles.rectangleParent2, styles.groupParentLayout]}>
        <View style={[styles.groupChild, styles.groupParentLayout]} />
        <Image
          style={styles.checkIcon}
          resizeMode="cover"
          source={require("../assets/check1.png")}
        />
      </View>
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container.png")}
        cabeceraMobileMarginLeft={-207}
        cabeceraMobileLeft="50%"
        cabeceraMobileMarginTop="unset"
      />
      <Text style={[styles.elijaSuTerapeuta2, styles.elijaTypo]}>
        Elija su terapeuta
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  legalesTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    top: 860,
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  brigitteBozzoTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  elijaTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  iconLayout: {
    width: 40,
    height: 40,
    position: "absolute",
  },
  terapeutasChildLayout: {
    height: 66,
    width: 332,
    backgroundColor: Color.borderDefaultDefault,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  idydIconPosition: {
    left: 44,
    width: 40,
    height: 40,
    position: "absolute",
  },
  gdlTypo: {
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  escPosition: {
    top: 494,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  mtyPosition: {
    top: 646,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  apoPosition: {
    top: 570,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  staPosition: {
    top: 722,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  mty1Position: {
    top: 342,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  groupParentLayout: {
    width: 43,
    height: 66,
    position: "absolute",
  },
  legales: {
    marginLeft: -106,
  },
  contacto: {
    marginLeft: 55,
  },
  avisoDePrivacidad: {
    marginLeft: -70,
    top: 827,
  },
  terapeutasDisponibles: {
    marginLeft: -113,
    top: 280,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xl,
  },
  elijaSuTerapeuta: {
    marginLeft: -78,
    top: 207,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_xl,
  },
  brigitteBozzo: {
    marginLeft: -26.5,
    top: 10,
  },
  sample092Icon: {
    marginLeft: -75.5,
    top: 0,
    left: "50%",
    width: 40,
  },
  brigitteBozzoParent: {
    marginLeft: -75,
    top: 158,
    width: 151,
    height: 40,
    left: "50%",
    position: "absolute",
  },
  text: {
    top: 8,
    left: 96,
    textDecoration: "underline",
    lineHeight: 24,
    color: Color.grayWhite,
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.m3BodyLarge,
    position: "absolute",
  },
  paginationmediumfalsefalseParent: {
    top: 778,
    left: 92,
    width: 244,
    height: 38,
    position: "absolute",
  },
  terapeutasChild: {
    left: 41,
    width: 332,
    backgroundColor: Color.borderDefaultDefault,
    borderRadius: Border.br_mini,
    top: 392,
  },
  terapeutasItem: {
    top: 468,
    left: 41,
    width: 332,
    backgroundColor: Color.borderDefaultDefault,
    borderRadius: Border.br_mini,
  },
  terapeutasInner: {
    top: 544,
    left: 41,
    width: 332,
    backgroundColor: Color.borderDefaultDefault,
    borderRadius: Border.br_mini,
  },
  rectangleView: {
    top: 620,
    left: 41,
    width: 332,
    backgroundColor: Color.borderDefaultDefault,
    borderRadius: Border.br_mini,
  },
  terapeutasChild1: {
    left: 40,
    top: 316,
  },
  terapeutasChild2: {
    top: 696,
    left: 41,
    width: 332,
    backgroundColor: Color.borderDefaultDefault,
    borderRadius: Border.br_mini,
  },
  perfilDanielaPazminoCirculIcon: {
    top: 405,
  },
  danielaPazmillo: {
    top: 417,
    color: Color.colorDarkslategray_200,
    marginLeft: -118,
  },
  gdl: {
    marginLeft: 35,
    top: 417,
    color: Color.colorDarkslategray_200,
  },
  aos: {
    marginLeft: 67,
    top: 417,
    color: Color.colorDarkslategray_200,
  },
  alejandraMtz: {
    marginLeft: -118,
  },
  esc: {
    marginLeft: 35,
  },
  aos1: {
    marginLeft: 67,
  },
  mujer: {
    marginLeft: -3,
  },
  mujer1: {
    marginLeft: -3,
    top: 417,
    color: Color.colorDarkslategray_200,
  },
  martaCortez: {
    marginLeft: -117,
  },
  alejandraMtz1: {
    marginLeft: -117,
  },
  martaCortez1: {
    top: 341,
    marginLeft: -117,
  },
  sandraGonzalez: {
    marginLeft: -118,
  },
  mty: {
    marginLeft: 35,
  },
  apo: {
    marginLeft: 34,
  },
  mty1: {
    marginLeft: 29,
  },
  sta: {
    marginLeft: 36,
  },
  aos2: {
    marginLeft: 68,
  },
  mujer2: {
    marginLeft: -2,
  },
  aos3: {
    marginLeft: 67,
  },
  aos4: {
    marginLeft: 62,
  },
  idydAlejandraZorrilla6001Icon: {
    top: 481,
  },
  aos5: {
    marginLeft: 67,
  },
  mujer3: {
    marginLeft: -3,
  },
  mujer4: {
    marginLeft: -8,
  },
  mujer5: {
    marginLeft: -4,
  },
  roundProfilPictureBefore1Icon: {
    top: 633,
  },
  groupChild: {
    left: 0,
    borderTopRightRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    backgroundColor: Color.colorOlive,
    top: 0,
  },
  checkIcon: {
    top: 21,
    left: 10,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    left: 330,
    width: 43,
    top: 468,
  },
  idydAlejandraZorrilla6002Icon: {
    top: 557,
  },
  roundProfilPictureBefore2Icon: {
    top: 329,
    left: 43,
  },
  bdd752819d71dda3b90472f4cea91Icon: {
    top: 709,
  },
  rectangleGroup: {
    left: 329,
    top: 316,
  },
  rectangleContainer: {
    left: 330,
    width: 43,
    top: 392,
  },
  groupView: {
    left: 330,
    width: 43,
    top: 544,
  },
  rectangleParent1: {
    left: 330,
    width: 43,
    top: 620,
  },
  rectangleParent2: {
    left: 330,
    width: 43,
    top: 696,
  },
  elijaSuTerapeuta2: {
    marginLeft: -85,
    top: 243,
    color: "#ff0004",
  },
  terapeutas: {
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

export default Terapeutas;
