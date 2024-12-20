import * as React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Component from "../components/Component";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Button1 from "../components/Button1";
import CabeceraMobile from "../components/CabeceraMobile";
import { Padding, Border, Color } from "../GlobalStyles";

const Servicios = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { category } = route.params || {};

  // Servicios simulados
  const serviciosData = [
    { title: "Masaje con pindas", price: "$55" },
    { title: "Masaje geotermal", price: "$60" },
    { title: "Masaje podal", price: "$45" },
    { title: "Masaje descontracturante", price: "$55" },
    { title: "Masaje lomi lomi", price: "$55" },
    { title: "Masaje relajante", price: "$50" },
    { title: "Moment relax", price: "$110" },
    { title: "Masaje craneo facial", price: "$35" },
    { title: "Masaje cuatro manos", price: "$55" },
  ];

  const handleServicePress = (service) => {
    navigation.navigate("Reserva", { category, service });
  };

  return (
    <View style={[styles.servicios, styles.serviciosShadowBox]}>
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container2.png")}
      />

      <View style={styles.searchContainer}>
        <Component />
      </View>

      <View style={styles.framesContainer}>
        <FrameComponent />
        <FrameComponent1 />
      </View>

      <View style={[styles.dropdownTrigger, styles.dropdownFlexBox]}>
        <Button1
          iconOnly={false}
          outline={false}
          size="large"
          state="normal"
          type="primary"
          icon={require("../assets/icon.png")}
          icon2={require("../assets/icon2.png")}
          iconLeft={false}
          iconRight={false}
          buttonAlignSelf="unset"
        />
        <View style={[styles.dropdownToggle, styles.dropdownFlexBox]}>
          <Text style={styles.categoryText}>{category || "Categoría"}</Text>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.servicesGrid}>
          {serviciosData.map((item, index) => (
            <TouchableOpacity key={index} style={styles.serviceCard} onPress={() => handleServicePress(item)}>
              <View style={styles.placeholderImage} />
              <Text style={styles.serviceTitle}>{item.title}</Text>
              <Text style={styles.servicePrice}>{item.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  serviciosShadowBox: {
    shadowOpacity: 1,
    elevation: 80,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowColor: "rgba(0, 0, 0, 0.07)",
  },
  dropdownFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  servicios: {
    borderRadius: 0,
    backgroundColor: Color.grayWhite,
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  searchContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  framesContainer: {
    marginTop: 10,
    marginBottom: 10,
  },
  dropdownTrigger: {
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  dropdownToggle: {
    borderTopRightRadius: Border.br_8xs_8,
    borderBottomRightRadius: Border.br_8xs_8,
    backgroundColor: Color.yellow600,
    borderColor: Color.yellow600,
    borderWidth: 1,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    marginLeft: 10,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceCard: {
    width: "30%",
    borderRadius: 10,
    backgroundColor: "rgba(219, 219, 219, 0.1)",
    marginBottom: 20,
    alignItems: "center",
    padding: 10,
    elevation: 4,
  },
  placeholderImage: {
    width: "100%",
    height: 80,
    borderRadius: 10,
    backgroundColor: "#ddd",
    marginBottom: 8,
  },
  serviceTitle: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
    color: "#000",
  },
  servicePrice: {
    fontSize: 14,
    color: "#333",
  },
});

export default Servicios;
