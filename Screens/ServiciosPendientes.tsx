import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Paginationmediumfalsefalse from "../components/Paginationmediumfalsefalse";
import CabeceraMobile from "../components/CabeceraMobile";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ServiciosPendientes = () => {
  return (
    <View style={styles.serviciosPendientes}>
      <Text style={[styles.legales, styles.legalesPosition]}>Legales</Text>
      <Text style={[styles.contacto, styles.legalesPosition]}>Contacto</Text>
      <Text style={[styles.avisoDePrivacidad, styles.terapeutaTypo]}>
        Aviso de privacidad
      </Text>
      <Text style={[styles.disponibles, styles.proximosTypo]}>DISPONIBLES</Text>
      <Text style={[styles.completados, styles.proximosTypo]}>COMPLETADOS</Text>
      <Text style={[styles.proximos, styles.proximosTypo]}>PROXIMOS</Text>
      <View style={styles.serviciosPendientesChild} />
      <View style={styles.alejandroDiazParent}>
        <Text style={[styles.alejandroDiaz, styles.terapeutaPosition]}>
          ALEJANDRO DIAZ
        </Text>
        <Text style={[styles.terapeuta, styles.terapeutaPosition]}>
          TERAPEUTA
        </Text>
        <Image
          style={styles.perfilCirculo600x3981Icon}
          resizeMode="cover"
          source={require("../assets/perfilcirculo600x398-1.png")}
        />
      </View>
      <View style={styles.paginationmediumfalsefalseParent}>
        <Paginationmediumfalsefalse />
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <View style={[styles.groupItem, styles.groupChildLayout]} />
        <View style={[styles.groupInner, styles.groupChildLayout]} />
        <View style={[styles.rectangleView, styles.groupChildLayout]} />
        <View style={[styles.groupChild1, styles.groupChildLayout]} />
      </View>
      <Image
        style={[styles.perfilDanielaPazminoCirculIcon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/perfildanielapazminocirculo-1.png")}
      />
      <Text style={[styles.danielaPazmillo, styles.aosTypo]}>
        Daniela Pazmillo
      </Text>
      <Text style={[styles.masajeRelajante, styles.hsPosition]}>
        Masaje relajante
      </Text>
      <Text style={[styles.gdl, styles.aosTypo]}>GDL</Text>
      <Text style={[styles.hoy, styles.hsPosition]}>Hoy</Text>
      <Text style={[styles.hs, styles.hsPosition]}>17:30 Hs</Text>
      <Text style={[styles.aos, styles.aosTypo]}>28 años</Text>
      <Text style={[styles.mujer, styles.aosTypo]}>Mujer</Text>
      <Text style={[styles.text1, styles.hsPosition]}>$55</Text>
      <Text style={[styles.alejandraMtz, styles.escPosition]}>
        Alejandra Mtz
      </Text>
      <Text style={[styles.momentRelax, styles.hs1Position]}>Moment relax</Text>
      <Text style={[styles.esc, styles.escPosition]}>ESC</Text>
      <Text style={[styles.maana, styles.hs1Position]}>Mañana</Text>
      <Text style={[styles.hs1, styles.hs1Position]}>13:00 Hs</Text>
      <Text style={[styles.aos1, styles.escPosition]}>46 años</Text>
      <Text style={[styles.mujer1, styles.escPosition]}>Mujer</Text>
      <Text style={[styles.text2, styles.hs1Position]}>$110</Text>
      <Text style={[styles.brigitteBozzo, styles.aosTypo]}>Brigitte Bozzo</Text>
      <Text style={[styles.martaCortez, styles.aosTypo]}>Marta Cortez</Text>
      <Text style={[styles.sandraGonzalez, styles.staPosition]}>
        Sandra Gonzalez
      </Text>
      <Text style={[styles.masajeGeotermal, styles.aosTypo]}>
        Masaje geotermal
      </Text>
      <Text style={[styles.masajePodal, styles.aosTypo]}>Masaje Podal</Text>
      <Text style={[styles.masajeCraneoFacial, styles.aosTypo]}>
        Masaje craneo facial
      </Text>
      <Text style={[styles.apo, styles.apoPosition]}>APO</Text>
      <Text style={[styles.mty, styles.apoPosition]}>MTY</Text>
      <Text style={[styles.sta, styles.staPosition]}>STA</Text>
      <Text style={[styles.text3, styles.textPosition1]}>07/10</Text>
      <Text style={[styles.text4, styles.textPosition1]}>13/10</Text>
      <Text style={[styles.text5, styles.textPosition1]}>02/11</Text>
      <Text style={[styles.hs2, styles.aosTypo]}>14:00 Hs</Text>
      <Text style={[styles.hs3, styles.aosTypo]}>11:00 Hs</Text>
      <Text style={[styles.hs4, styles.aosTypo]}>09:30 Hs</Text>
      <Text style={[styles.aos2, styles.aosTypo]}>24 años</Text>
      <Text style={[styles.aos3, styles.aosTypo]}>26 años</Text>
      <Text style={[styles.aos4, styles.staPosition]}>22 años</Text>
      <Text style={[styles.mujer2, styles.aosTypo]}>Mujer</Text>
      <Text style={[styles.mujer3, styles.aosTypo]}>Mujer</Text>
      <Text style={[styles.mujer4, styles.staPosition]}>Mujer</Text>
      <Text style={[styles.text6, styles.textPosition]}>$60</Text>
      <Text style={[styles.text7, styles.textPosition]}>$45</Text>
      <Text style={[styles.text8, styles.textPosition]}>$35</Text>
      <Image
        style={[styles.idydAlejandraZorrilla6001Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/idyd-alejandrazorrilla600-1.png")}
      />
      <Image
        style={[styles.sample091Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/sample09-12.png")}
      />
      <Image
        style={[styles.roundProfilPictureBefore1Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/round-profil-picture-before--1.png")}
      />
      <Image
        style={[styles.bdd752819d71dda3b90472f4cea91Icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/684bdd752819d71dda3b90472f4cea91-1.png")}
      />
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
  proximosTypo: {
    fontSize: FontSize.bodySmall_size,
    top: 251,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  terapeutaPosition: {
    marginLeft: -25,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  groupChildLayout: {
    height: 66,
    backgroundColor: Color.borderDefaultDefault,
    borderRadius: Border.br_mini,
    width: 332,
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    left: 44,
    width: 40,
    height: 40,
    position: "absolute",
  },
  aosTypo: {
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  hsPosition: {
    top: 406,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  escPosition: {
    top: 454,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  hs1Position: {
    top: 482,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  staPosition: {
    top: 681,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  apoPosition: {
    marginLeft: 34,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  textPosition1: {
    marginLeft: -4,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  textPosition: {
    marginLeft: 90,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
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
    left: "50%",
  },
  contacto: {
    marginLeft: 55,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    top: 834,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
  },
  avisoDePrivacidad: {
    marginLeft: -70,
    top: 801,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  disponibles: {
    marginLeft: -165,
  },
  completados: {
    marginLeft: 65,
  },
  proximos: {
    marginLeft: -42,
  },
  serviciosPendientesChild: {
    top: 274,
    left: 159,
    borderStyle: "solid",
    borderColor: Color.colorOlive,
    borderTopWidth: 1,
    width: 85,
    height: 1,
    position: "absolute",
  },
  alejandroDiaz: {
    top: 26,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
  },
  terapeuta: {
    top: 0,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodyRegular_size,
  },
  perfilCirculo600x3981Icon: {
    width: 40,
    left: 0,
    top: 0,
    height: 40,
    position: "absolute",
  },
  alejandroDiazParent: {
    marginLeft: -72,
    top: 180,
    width: 144,
    height: 40,
    left: "50%",
    position: "absolute",
  },
  text: {
    top: 7,
    left: 107,
    textDecoration: "underline",
    lineHeight: 24,
    fontFamily: FontFamily.robotoMonoRegular,
    color: Color.grayWhite,
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    position: "absolute",
  },
  paginationmediumfalsefalseParent: {
    top: 752,
    left: 92,
    width: 237,
    height: 38,
    position: "absolute",
  },
  groupChild: {
    top: 0,
  },
  groupItem: {
    top: 76,
  },
  groupInner: {
    top: 152,
  },
  rectangleView: {
    top: 228,
  },
  groupChild1: {
    top: 304,
  },
  rectangleParent: {
    top: 366,
    left: 41,
    height: 370,
    width: 332,
    position: "absolute",
  },
  perfilDanielaPazminoCirculIcon: {
    top: 379,
  },
  danielaPazmillo: {
    top: 378,
    color: Color.colorDarkslategray_200,
    marginLeft: -122,
  },
  masajeRelajante: {
    marginLeft: -122,
  },
  gdl: {
    marginLeft: 35,
    top: 378,
    color: Color.colorDarkslategray_200,
  },
  hoy: {
    marginLeft: 7,
  },
  hs: {
    marginLeft: 35,
  },
  aos: {
    marginLeft: 67,
    top: 378,
    color: Color.colorDarkslategray_200,
  },
  mujer: {
    marginLeft: -3,
    top: 378,
    color: Color.colorDarkslategray_200,
  },
  text1: {
    marginLeft: 89,
  },
  alejandraMtz: {
    marginLeft: -122,
  },
  momentRelax: {
    marginLeft: -122,
  },
  esc: {
    marginLeft: 35,
  },
  maana: {
    marginLeft: -16,
  },
  hs1: {
    marginLeft: 35,
  },
  aos1: {
    marginLeft: 67,
  },
  mujer1: {
    marginLeft: -3,
  },
  text2: {
    marginLeft: 87,
  },
  brigitteBozzo: {
    top: 531,
    marginLeft: -122,
  },
  martaCortez: {
    top: 606,
    marginLeft: -122,
  },
  sandraGonzalez: {
    marginLeft: -122,
  },
  masajeGeotermal: {
    top: 559,
    marginLeft: -122,
  },
  masajePodal: {
    top: 634,
    marginLeft: -122,
  },
  masajeCraneoFacial: {
    top: 709,
    marginLeft: -122,
  },
  apo: {
    top: 531,
  },
  mty: {
    top: 606,
  },
  sta: {
    marginLeft: 37,
  },
  text3: {
    top: 559,
  },
  text4: {
    top: 634,
  },
  text5: {
    top: 709,
  },
  hs2: {
    top: 559,
    marginLeft: 35,
  },
  hs3: {
    top: 634,
    marginLeft: 35,
  },
  hs4: {
    top: 709,
    marginLeft: 35,
  },
  aos2: {
    top: 531,
    marginLeft: 67,
  },
  aos3: {
    top: 606,
    marginLeft: 67,
  },
  aos4: {
    marginLeft: 68,
  },
  mujer2: {
    top: 531,
    marginLeft: -3,
  },
  mujer3: {
    top: 606,
    marginLeft: -3,
  },
  mujer4: {
    marginLeft: -3,
  },
  text6: {
    top: 559,
  },
  text7: {
    top: 634,
  },
  text8: {
    top: 709,
  },
  idydAlejandraZorrilla6001Icon: {
    top: 455,
  },
  sample091Icon: {
    top: 531,
  },
  roundProfilPictureBefore1Icon: {
    top: 607,
  },
  bdd752819d71dda3b90472f4cea91Icon: {
    top: 683,
  },
  serviciosPendientes: {
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

export default ServiciosPendientes;
