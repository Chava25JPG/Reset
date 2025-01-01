// Reserva.js
import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import CabeceraMobile from "../components/CabeceraMobile";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { useRoute, useNavigation } from "@react-navigation/native";
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const Reserva = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { category, service } = route.params || {};

  const handleReserve = () => {
    navigation.navigate("DuracionMasaje", { category, service });
  };

  return (
    <View style={styles.container}>
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container2.png")}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Momento Relajante</Text>
        
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          <Image
            style={styles.serviceImage}
            resizeMode="cover"
            source={require("../assets/untitled-design-6-1.png")}
          />

          <View style={styles.detailsContainer}>
            <View style={styles.detailItem}>
              <Ionicons name="time-outline" size={24} color={Color.grayBlack} style={styles.detailIcon} />
              <Text style={styles.detailText}>45' Minutos de masaje relajante o con piedras calientes</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="star-outline" size={24} color={Color.grayBlack} style={styles.detailIcon} />
              <Text style={styles.detailText}>Tratamiento facial personalizado</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="water-outline" size={24} color={Color.grayBlack} style={styles.detailIcon} />
              <Text style={styles.detailText}>20' Minutos de Jacuzzi privado</Text>
            </View>
            <View style={styles.detailItem}>
              <Ionicons name="wine-outline" size={24} color={Color.grayBlack} style={styles.detailIcon} />
              <Text style={styles.detailText}>Cava y bombones</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.reserveButton} onPress={handleReserve}>
            <Text style={styles.reserveButtonText}>Reserva tu cita</Text>
          </TouchableOpacity>
        </ScrollView>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Color.grayWhite
  },
  contentContainer:{
    flex:1,
    paddingHorizontal:20,
    paddingTop:10
  },
  title:{
    fontSize:FontSize.size_11xl,
    textAlign:'center',
    color:Color.grayBlack,
    fontFamily:FontFamily.robotoBold,
    fontWeight:'700',
    marginBottom:20
  },
  scrollContent:{
    alignItems:'center',
    paddingBottom:40
  },
  serviceImage:{
    width:'100%',
    height: width*0.6,
    borderRadius: Border.br_mini,
    marginBottom:20
  },
  detailsContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  detailIcon: {
    marginRight: 10
  },
  detailText: {
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.robotoRegular,
    color: Color.grayBlack,
    flex: 1
  },
  reserveButton:{
    backgroundColor:Color.colorGoldenrod,
    borderRadius:Border.br_3xs,
    paddingVertical:15,
    paddingHorizontal:40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  reserveButtonText:{
    color:Color.colorSnow,
    fontSize:FontSize.bodyRegular_size,
    fontFamily:FontFamily.robotoBold,
    fontWeight:'700',
    textAlign:'center'
  }
});

export default Reserva;
