import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import GroupComponent from "../components/GroupComponent";
import CabeceraMobile from "../components/CabeceraMobile";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const ErrorDePago = () => {
  return (
    <View style={styles.errorDePago}>
      <Image
        style={styles.xCircleIcon}
        resizeMode="cover"
        source={require("../assets/x-circle.png")}
      />
      <Text style={[styles.huboUnError, styles.errorTypo]}>Hubo un error!</Text>
      <Text style={[styles.motivoDelError, styles.errorTypo]}>
        Motivo del error:
      </Text>
      <Text
        style={[styles.noHemosPodido, styles.noHemosPodidoTypo]}
      >{`No hemos podido procesar tu pago. 
Por favor, intenta nuevamente.`}</Text>
      <Text style={[styles.informacinDeLa, styles.noHemosPodidoTypo]}>{`
Información de la tarjeta incorrecta, fondos insuficientes.`}</Text>
      <GroupComponent
        pAGARAHORA="Regresar"
        groupViewTop={696}
        pAGARAHORAMarginLeft={-33.5}
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
  errorTypo: {
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  noHemosPodidoTypo: {
    fontFamily: FontFamily.m3BodyLarge,
    textAlign: "center",
    color: Color.grayBlack,
    left: "50%",
    position: "absolute",
  },
  xCircleIcon: {
    top: 203,
    left: 118,
    width: 184,
    height: 184,
    position: "absolute",
    overflow: "hidden",
  },
  huboUnError: {
    marginLeft: -94,
    top: 413,
    fontSize: FontSize.size_11xl,
  },
  motivoDelError: {
    marginLeft: -57,
    top: 584,
    fontSize: FontSize.bodyRegular_size,
  },
  noHemosPodido: {
    marginLeft: -126,
    top: 497,
    fontSize: FontSize.bodyRegular_size,
  },
  informacinDeLa: {
    marginLeft: -149,
    top: 603,
    fontSize: FontSize.size_xs,
  },
  errorDePago: {
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

export default ErrorDePago;
