import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import CabeceraMobile from "../components/CabeceraMobile";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useRoute, useNavigation } from "@react-navigation/native";

const Terapeutas = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { category, service, duration, gender, extras } = route.params || {};

  // Lista simulada de terapeutas
  const terapeutasData = [
    { name: "Daniela Pazmillo", city: "GDL", edad: 28, genero: "Mujer" },
    { name: "Alejandra Mtz", city: "ESC", edad: 46, genero: "Mujer" },
    { name: "Marta Cortez", city: "MTY", edad: 26, genero: "Mujer" },
    { name: "Alejandra Zorrilla", city: "APO", edad: 24, genero: "Mujer" },
    { name: "Sandra Gonzalez", city: "STA", edad: 22, genero: "Mujer" },
    // Agregar más si se desea
  ];

  const handleSelectTerapeuta = (terapeuta) => {
    navigation.navigate("Calendario", {
      category,
      service,
      duration,
      gender,
      extras,
      terapeuta
    });
  };

  return (
    <View style={styles.terapeutas}>
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container.png")}
      />
      <Text style={[styles.elijaSuTerapeuta, styles.elijaTypo]}>
        Elija su terapeuta
      </Text>
      <Text style={[styles.terapeutasDisponibles, styles.elijaTypo]}>
        {terapeutasData.length} Terapeutas disponibles
      </Text>

      <View style={styles.listContainer}>
        {terapeutasData.map((t, index) => (
          <TouchableOpacity key={index} style={styles.terapeutaCard} onPress={() => handleSelectTerapeuta(t)}>
            <Image
              style={styles.terapeutaImg}
              resizeMode="cover"
              source={require("../assets/profile1.png")}
            />
            <View style={styles.terapeutaInfo}>
              <Text style={styles.terapeutaName}>{t.name}</Text>
              <Text style={styles.terapeutaDetail}>{t.city} | {t.edad} años | {t.genero}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  elijaTypo: {
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    left: "50%",
    position: "absolute",
    marginLeft: -100,
    color: Color.colorDimgray_100
  },
  terapeutas: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: { width: 0, height: 100 },
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
  elijaSuTerapeuta: {
    top: 170,
  },
  terapeutasDisponibles: {
    top: 220,
  },
  listContainer: {
    marginTop: 280,
    paddingHorizontal: 20
  },
  terapeutaCard: {
    flexDirection: 'row',
    backgroundColor: Color.borderDefaultDefault,
    borderRadius: Border.br_mini,
    marginBottom: 20,
    alignItems: 'center',
    padding: 10,
  },
  terapeutaImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  terapeutaInfo: {
    marginLeft: 10,
    flex: 1
  },
  terapeutaName: {
    fontFamily: FontFamily.robotoBold,
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "700",
    color: Color.grayBlack
  },
  terapeutaDetail: {
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_200
  }
});

export default Terapeutas;
