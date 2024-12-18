import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import GroupComponent from "../components/GroupComponent";
import CabeceraMobile from "../components/CabeceraMobile";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PagoExitoso = () => {
  return (
    <View style={styles.pagoExitoso}>
      <Image
        style={styles.pagoExitosoChild}
        resizeMode="cover"
        source={require("../assets/group-1.png")}
      />
      <View style={styles.pagoExitosoItem} />
      <View style={styles.pagoExitosoInner} />
      <View style={[styles.lineView, styles.pagoChildPosition]} />
      <View style={[styles.pagoExitosoChild1, styles.pagoChildPosition]} />
      <View style={[styles.pagoExitosoChild2, styles.pagoChildPosition]} />
      <View style={[styles.pagoExitosoChild3, styles.pagoChildPosition]} />
      <View style={[styles.pagoExitosoChild4, styles.pagoChildPosition]} />
      <View style={[styles.pagoExitosoChild5, styles.pagoChildPosition]} />
      <View style={[styles.pagoExitosoChild6, styles.pagoChildPosition]} />
      <Text style={[styles.telfono, styles.porTypo]}>Teléfono:</Text>
      <Text style={[styles.nombre, styles.nombreTypo]}>Nombre:</Text>
      <Text style={[styles.nombreDelCliente, styles.nombreTypo]}>
        Nombre del cliente
      </Text>
      <Text style={[styles.text, styles.porTypo]}>8112233445</Text>
      <Text style={[styles.text1, styles.text1Typo]}>24/03/2024</Text>
      <Text style={[styles.hs, styles.hsTypo]}>16:30 Hs.</Text>
      <Text style={[styles.text2, styles.text2Typo]}>4926823168</Text>
      <Text style={[styles.clientecorreocom, styles.eMailTypo]}>
        cliente@correo.com
      </Text>
      <Text style={[styles.resumenDeSu, styles.continuarTypo]}>
        Resumen de su reserva
      </Text>
      <Text style={[styles.informacinDeLa, styles.informacinTypo]}>
        Información de la transacción
      </Text>
      <Text style={[styles.eMail, styles.eMailTypo]}>E-mail:</Text>
      <Text style={[styles.fechaDeLa, styles.text1Typo]}>
        Fecha de la reserva:
      </Text>
      <Text style={[styles.hora, styles.hsTypo]}>Hora:</Text>
      <Text style={[styles.folio, styles.text2Typo]}>Folio:</Text>
      <Text style={[styles.informacinDelCliente, styles.informacinTypo]}>
        Información del cliente
      </Text>
      <Text
        style={[styles.graciasPorSu, styles.porTypo]}
      >{`Gracias por su compra. Se le ha enviado 
un correo confirmando su compra.`}</Text>
      <Text style={[styles.pagosSegurosPor, styles.porTypo]}>
        PAGOS SEGUROS POR
      </Text>
      <View style={styles.continuarWrapper}>
        <Text style={[styles.continuar, styles.continuarTypo]}>Continuar</Text>
      </View>
      <Image
        style={styles.stripeLogo2Icon}
        resizeMode="cover"
        source={require("../assets/stripelogo-1.png")}
      />
      <Text style={[styles.pagoExitoso1, styles.continuarTypo]}>
        ¡Pago exitoso!
      </Text>
      <GroupComponent
        pAGARAHORA="Continuar"
        groupViewTop={696}
        pAGARAHORAMarginLeft={-35.5}
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
  pagoChildPosition: {
    marginLeft: -166.5,
    height: 1,
    borderTopWidth: 1,
    width: 334,
    borderColor: Color.grayBlack,
    borderStyle: "solid",
    left: "50%",
    position: "absolute",
  },
  porTypo: {
    textAlign: "center",
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.grayBlack,
    position: "absolute",
  },
  nombreTypo: {
    top: 465,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text1Typo: {
    top: 561,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  hsTypo: {
    top: 586,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  text2Typo: {
    top: 609,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  eMailTypo: {
    top: 512,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  continuarTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    position: "absolute",
  },
  informacinTypo: {
    fontSize: FontSize.bodySmall_size,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.m3BodyLarge,
    left: "50%",
    position: "absolute",
  },
  pagoExitosoChild: {
    marginLeft: -48,
    top: 180,
    width: 95,
    height: 95,
    left: "50%",
    position: "absolute",
  },
  pagoExitosoItem: {
    marginLeft: -167,
    top: 403,
    backgroundColor: "rgba(223, 214, 153, 0.35)",
    borderWidth: 2,
    height: 226,
    width: 334,
    borderColor: Color.grayBlack,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    left: "50%",
    position: "absolute",
  },
  pagoExitosoInner: {
    top: 434,
    left: 41,
    height: 1,
    borderTopWidth: 1,
    width: 334,
    borderColor: Color.grayBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  lineView: {
    top: 459,
  },
  pagoExitosoChild1: {
    top: 484,
  },
  pagoExitosoChild2: {
    top: 509,
  },
  pagoExitosoChild3: {
    top: 531,
  },
  pagoExitosoChild4: {
    top: 556,
  },
  pagoExitosoChild5: {
    top: 581,
  },
  pagoExitosoChild6: {
    top: 604,
  },
  telfono: {
    top: 488,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.m3BodyLarge,
    left: 55,
  },
  nombre: {
    left: 55,
  },
  nombreDelCliente: {
    left: 108,
  },
  text: {
    top: 489,
    left: 111,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.m3BodyLarge,
  },
  text1: {
    left: 169,
  },
  hs: {
    left: 91,
  },
  text2: {
    left: 91,
  },
  clientecorreocom: {
    left: 99,
  },
  resumenDeSu: {
    marginLeft: -84,
    top: 409,
    fontSize: FontSize.bodyRegular_size,
    color: Color.grayBlack,
    fontWeight: "700",
    left: "50%",
  },
  informacinDeLa: {
    marginLeft: -93,
    top: 534,
  },
  eMail: {
    left: 55,
  },
  fechaDeLa: {
    left: 55,
  },
  hora: {
    left: 55,
  },
  folio: {
    left: 55,
  },
  informacinDelCliente: {
    marginLeft: -71,
    top: 437,
  },
  graciasPorSu: {
    marginLeft: -144,
    top: 340,
    fontSize: FontSize.bodyRegular_size,
    left: "50%",
  },
  pagosSegurosPor: {
    marginLeft: -511,
    top: 765,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.m3BodyLarge,
    left: "50%",
  },
  continuar: {
    top: 7,
    left: 65,
    color: Color.colorSnow,
    fontSize: FontSize.bodyRegular_size,
  },
  continuarWrapper: {
    marginLeft: -557,
    top: 755,
    backgroundColor: Color.colorGoldenrod,
    width: 212,
    height: 33,
    borderRadius: Border.br_3xs,
    left: "50%",
    position: "absolute",
  },
  stripeLogo2Icon: {
    top: 758,
    left: -162,
    width: 50,
    height: 28,
    position: "absolute",
  },
  pagoExitoso1: {
    marginLeft: -96,
    top: 290,
    fontSize: FontSize.size_11xl,
    color: Color.grayBlack,
    fontWeight: "700",
    left: "50%",
  },
  pagoExitoso: {
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

export default PagoExitoso;
