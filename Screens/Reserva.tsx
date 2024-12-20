import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CabeceraMobile from "../components/CabeceraMobile";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { useRoute, useNavigation } from "@react-navigation/native";

const Reserva = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { category, service } = route.params || {};

  const handleReserve = () => {
    // Navegar a DuracionMasaje pasando el servicio
    navigation.navigate("DuracionMasaje", { category, service });
  };

  return (
    <View style={styles.reserva}>
      <Image
        style={styles.openmojireturnBackButtonIcon}
        resizeMode="cover"
        source={require("../assets/openmojireturnbackbutton.png")}
      />
      <Text style={styles.momentoRelajante}>{service?.title || "Servicio"}</Text>
      <Image
        style={[styles.untitledDesign61, styles.reservaChildPosition]}
        resizeMode="cover"
        source={require("../assets/untitled-design-6-1.png")}
      />
      <View style={[styles.reservaChild, styles.reservaChildPosition]} />
      <Text style={styles.minutosDeMasaje}>
        Selecciona opciones para tu reserva
      </Text>
      <Image
        style={styles.reservaItem}
        resizeMode="cover"
        source={require("../assets/line-1.png")}
      />
      <View style={styles.reservaTuCitaWrapper}>
        <TouchableOpacity onPress={handleReserve}>
          <Text style={styles.reservaTuCita}>Reserva tu cita</Text>
        </TouchableOpacity>
      </View>
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container2.png")}
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
  reservaTuCitaWrapper: {
    top: 764,
    left: 107,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod,
    width: 200,
    height: 33,
    position: "absolute",
    justifyContent: 'center',
    alignItems: 'center'
  },
  reservaTuCita: {
    color: Color.colorSnow,
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  reserva: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowRadius: 80,
    elevation: 80,
    borderRadius: 0,
    backgroundColor: Color.grayWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    shadowOpacity: 1,
  },
});

export default Reserva;
