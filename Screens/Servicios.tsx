import * as React from "react";
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import Component from "../components/Component";
import Button1 from "../components/Button1";
import CabeceraMobile from "../components/CabeceraMobile";
import { Padding, Color } from "../GlobalStyles";

const Servicios = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { category } = route.params || {};

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

      <View style={styles.contentContainer}>
        <View style={styles.searchContainer}>
          
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category || "Todas las categorías"}</Text>
            <View style={styles.categoryIndicator} />
          </TouchableOpacity>
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContent} 
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.servicesGrid}>
            {serviciosData.map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={styles.serviceCard} 
                onPress={() => handleServicePress(item)}
              >
                <View style={styles.placeholderImage} />
                <Text style={styles.serviceTitle}>{item.title}</Text>
                <Text style={styles.servicePrice}>{item.price}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  servicios: {
    flex: 1,
    backgroundColor: Color.grayWhite,
  },
  serviciosShadowBox: {
    shadowOpacity: 1,
    elevation: 80,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowColor: "rgb(252, 0, 0)",
  },
  contentContainer: {
    flex: 1,
    paddingTop: 10,
  },
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  categoryContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: Color.yellow600,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    textAlign: 'center',
  },
  categoryIndicator: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#000',
    marginLeft: 10,
    transform: [{ rotate: '180deg' }],
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
    backgroundColor: "rgba(255, 255, 255, 0.83)",
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