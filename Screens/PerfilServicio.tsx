import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import CabeceraMobile from "../components/CabeceraMobile";
import Text1 from "../components/Text1";
import AvatarBlock from "../components/AvatarBlock";
import {
  Color,
  FontFamily,
  FontSize,
  Border,
  StyleVariable,
} from "../GlobalStyles";

const PerfilServicio = () => {
  return (
    <View style={styles.perfilServicio}>
      <Text style={[styles.legales, styles.legalesPosition]}>Legales</Text>
      <Text style={[styles.contacto, styles.legalesPosition]}>Contacto</Text>
      <Text style={[styles.avisoDePrivacidad, styles.clienteTypo]}>
        Aviso de privacidad
      </Text>
      <View style={[styles.alejandroDiazParent, styles.reviewCardLayout]}>
        <Text style={[styles.alejandroDiaz, styles.terapeutaPosition]}>
          ALEJANDRO DIAZ
        </Text>
        <Text style={[styles.terapeuta, styles.terapeutaPosition]}>
          TERAPEUTA
        </Text>
        <Image
          style={[styles.perfilCirculo600x3981Icon, styles.reviewCardLayout]}
          resizeMode="cover"
          source={require("../assets/perfilcirculo600x398-1.png")}
        />
      </View>
      <View
        style={[styles.perfilServicioChild, styles.perfilServicioChildLayout]}
      />
      <Image
        style={[
          styles.aa0e27b1e9e4c2a87b92db9537Icon,
          styles.perfilServicioChildLayout,
        ]}
        resizeMode="cover"
        source={require("../assets/1aa0e27b1e9e4c2a87b92db9537c389f-1.png")}
      />
      <Text style={[styles.nombreBrigitte, styles.apellidoBozzoPosition]}>
        Nombre: Brigitte
      </Text>
      <Text style={[styles.apellidoBozzo, styles.apellidoBozzoPosition]}>
        Apellido: Bozzo
      </Text>
      <Text
        style={[styles.servicioMasajeGeotermal, styles.fecha07102024Position]}
      >
        Servicio: Masaje geotermal
      </Text>
      <Text style={[styles.fecha07102024, styles.fecha07102024Position]}>
        Fecha: 07/10/2024
      </Text>
      <Text style={[styles.hora1400Hs, styles.precio60Position]}>
        Hora: 14:00 Hs
      </Text>
      <Text style={[styles.edad24Aos, styles.edad24AosPosition]}>
        Edad: 24 años
      </Text>
      <Text style={[styles.estadoNuevoLeon, styles.estadoNuevoLeonPosition]}>
        Estado: Nuevo Leon
      </Text>
      <Text style={[styles.municipioApodaca, styles.estadoNuevoLeonPosition]}>
        Municipio: Apodaca
      </Text>
      <Text
        style={[styles.coloniaResidencialLos, styles.numeroInteriorCPosition]}
      >
        Colonia: Residencial Los Robles
      </Text>
      <Text style={[styles.generoMujer, styles.edad24AosPosition]}>
        Genero: Mujer
      </Text>
      <Text style={[styles.precio60, styles.precio60Position]}>
        Precio: $60
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <Text style={[styles.estatus, styles.estatusTypo]}>Estatus</Text>
        <Text style={[styles.enCamino, styles.estatusTypo]}>En camino</Text>
        <Image
          style={styles.carSideviewIcon}
          resizeMode="cover"
          source={require("../assets/carsideview.png")}
        />
      </View>
      <Image
        style={styles.sample091Icon}
        resizeMode="cover"
        source={require("../assets/sample09-1.png")}
      />
      <View style={[styles.waze, styles.wazeLayout]}>
        <View style={[styles.wazeInner, styles.wazeLayout]}>
          <View style={[styles.groupItem, styles.wazeLayout]} />
        </View>
        <Text style={[styles.waze1, styles.waze1Typo]}>Waze</Text>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group.png")}
        />
      </View>
      <Text style={[styles.cliente, styles.clienteTypo]}>Cliente</Text>
      <Text style={[styles.servicio, styles.clienteTypo]}>Servicio</Text>
      <View style={[styles.gmaps, styles.gmapsInnerLayout]}>
        <View style={[styles.gmapsInner, styles.gmapsInnerLayout]}>
          <View style={[styles.groupInner, styles.gmapsInnerLayout]} />
        </View>
        <Text style={[styles.gmaps1, styles.waze1Typo]}>GMaps</Text>
        <Image
          style={[styles.googleMapIcon1, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/googlemapicon-1.png")}
        />
      </View>
      <View style={[styles.perfilServicioInner, styles.rectangleViewLayout]}>
        <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      </View>
      <Text style={[styles.agregarACalendario, styles.waze1Typo]}>
        Agregar a Calendario
      </Text>
      <Text style={[styles.calleMaraCurie, styles.calleMaraCuriePosition]}>
        Calle: María Curie
      </Text>
      <Text style={[styles.numeroExterior400, styles.calleMaraCuriePosition]}>
        Numero exterior: 400
      </Text>
      <Text style={[styles.numeroInteriorC, styles.numeroInteriorCPosition]}>
        Numero interior: C
      </Text>
      <Image
        style={[styles.calendarAltIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/calendaralt.png")}
      />
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="12:41"
        container={require("../assets/container.png")}
        cabeceraMobileMarginLeft={-207}
        cabeceraMobileLeft="50%"
        cabeceraMobileMarginTop="unset"
      />
      <View style={[styles.reviewCard, styles.reviewCardLayout]}>
        <Image
          style={styles.ratingIcon}
          resizeMode="cover"
          source={require("../assets/rating.png")}
        />
        <View style={styles.reviewBody}>
          <View style={styles.textHeading}>
            <Text style={[styles.textHeading1, styles.textHeading1FlexBox]}>
              Resena
            </Text>
          </View>
          <Text1 />
        </View>
        <AvatarBlock />
      </View>
      <Text style={[styles.comentarioDeUbicacion, styles.textHeading1FlexBox]}>
        Comentario de Ubicacion
      </Text>
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
  clienteTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.bodyRegular_size,
  },
  reviewCardLayout: {
    height: 40,
    position: "absolute",
  },
  terapeutaPosition: {
    marginLeft: -25,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  perfilServicioChildLayout: {
    width: 358,
    position: "absolute",
  },
  apellidoBozzoPosition: {
    color: Color.colorDarkslategray_200,
    top: 366,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  fecha07102024Position: {
    marginLeft: -166,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  precio60Position: {
    marginLeft: 24,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  edad24AosPosition: {
    top: 385,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  estadoNuevoLeonPosition: {
    top: 442,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  numeroInteriorCPosition: {
    top: 423,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  estatusTypo: {
    height: 14,
    color: Color.colorDarkslategray_100,
    width: 107,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  wazeLayout: {
    height: 33,
    width: 60,
    position: "absolute",
  },
  waze1Typo: {
    color: Color.grayWhite,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  gmapsInnerLayout: {
    width: 67,
    height: 33,
    position: "absolute",
  },
  iconLayout: {
    height: 16,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewLayout: {
    width: 99,
    height: 33,
    position: "absolute",
  },
  calleMaraCuriePosition: {
    top: 404,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  textHeading1FlexBox: {
    textAlign: "left",
    color: Color.textDefaultDefault,
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
  },
  alejandroDiazParent: {
    marginLeft: -72,
    top: 180,
    width: 144,
    left: "50%",
  },
  perfilServicioChild: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.borderDefaultDefault,
    height: 547,
    left: 28,
    top: 237,
    width: 358,
  },
  aa0e27b1e9e4c2a87b92db9537Icon: {
    marginLeft: -179,
    top: 623,
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_xl,
    height: 161,
    left: "50%",
  },
  nombreBrigitte: {
    marginLeft: -169,
  },
  apellidoBozzo: {
    marginLeft: 27,
  },
  servicioMasajeGeotermal: {
    top: 497,
  },
  fecha07102024: {
    top: 519,
  },
  hora1400Hs: {
    top: 497,
  },
  edad24Aos: {
    marginLeft: 27,
  },
  estadoNuevoLeon: {
    marginLeft: 27,
  },
  municipioApodaca: {
    marginLeft: -169,
  },
  coloniaResidencialLos: {
    marginLeft: -169,
  },
  generoMujer: {
    marginLeft: -169,
  },
  precio60: {
    top: 519,
  },
  groupChild: {
    borderTopRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    backgroundColor: "#0dcaf0",
    width: 107,
    left: 1,
    height: 67,
    top: 0,
    position: "absolute",
  },
  estatus: {
    top: 5,
    left: 0,
  },
  enCamino: {
    top: 22,
    left: 1,
    height: 14,
    color: Color.colorDarkslategray_100,
  },
  carSideviewIcon: {
    top: 40,
    left: 42,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleParent: {
    left: 279,
    width: 108,
    height: 67,
    top: 237,
    position: "absolute",
  },
  sample091Icon: {
    marginLeft: -40,
    top: 249,
    width: 80,
    height: 80,
    left: "50%",
    position: "absolute",
  },
  groupItem: {
    backgroundColor: "#007cd5",
    left: 0,
    top: 0,
  },
  wazeInner: {
    left: 0,
    top: 0,
  },
  waze1: {
    left: 25,
    top: 9,
  },
  groupIcon: {
    height: "48.48%",
    width: "26.67%",
    top: "27.27%",
    right: "63.33%",
    bottom: "24.24%",
    left: "10%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  waze: {
    top: 590,
    left: 28,
  },
  cliente: {
    marginLeft: -23,
    top: 335,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  servicio: {
    marginLeft: -29,
    top: 467,
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  groupInner: {
    backgroundColor: Color.colorDimgray_100,
    left: 0,
    top: 0,
  },
  gmapsInner: {
    left: 0,
    top: 0,
  },
  gmaps1: {
    top: 10,
    left: 21,
  },
  googleMapIcon1: {
    left: 6,
    width: 11,
    top: 9,
  },
  gmaps: {
    left: 88,
    top: 590,
  },
  rectangleView: {
    backgroundColor: "#1f2d3d",
    left: 0,
    top: 0,
  },
  perfilServicioInner: {
    left: 155,
    top: 590,
  },
  agregarACalendario: {
    top: 593,
    left: 186,
    width: 58,
  },
  calleMaraCurie: {
    marginLeft: -169,
  },
  numeroExterior400: {
    marginLeft: 27,
  },
  numeroInteriorC: {
    marginLeft: 27,
  },
  calendarAltIcon: {
    top: 599,
    left: 163,
    width: 16,
  },
  ratingIcon: {
    width: 20,
    height: 20,
  },
  textHeading1: {
    fontSize: FontSize.heading_size,
    letterSpacing: -0.5,
    lineHeight: 29,
    fontWeight: "600",
    fontFamily: FontFamily.bodyStrong,
  },
  textHeading: {
    flexDirection: "row",
    display: "none",
  },
  reviewBody: {
    alignSelf: "stretch",
    gap: StyleVariable.space100,
  },
  reviewCard: {
    marginLeft: -149,
    top: 541,
    borderRadius: StyleVariable.radius200,
    borderStyle: "solid",
    borderColor: Color.borderDefaultDefault,
    borderWidth: 1,
    width: 250,
    padding: StyleVariable.space600,
    gap: StyleVariable.space600,
    minWidth: 240,
    left: "50%",
    backgroundColor: Color.grayWhite,
  },
  comentarioDeUbicacion: {
    top: 552,
    left: 68,
    lineHeight: 22,
    fontFamily: FontFamily.bodyBase,
    width: 202,
    fontSize: FontSize.bodyRegular_size,
    textAlign: "left",
    color: Color.textDefaultDefault,
    position: "absolute",
  },
  perfilServicio: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowRadius: 80,
    elevation: 80,
    shadowOpacity: 1,
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.grayWhite,
  },
});

export default PerfilServicio;
