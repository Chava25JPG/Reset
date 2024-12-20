import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import CabeceraMobile from "../components/CabeceraMobile";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const PagoExitoso = () => {
  const navigation = useNavigation();

  const handleContinue = () => {
    // Regresar al inicio
    navigation.navigate("Home");
  };

  return (
    <View style={styles.pagoExitoso}>
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container.png")}
      />
      <Text style={styles.pagoExitoso1}>¡Pago exitoso!</Text>
      <Text style={styles.graciasPorSu}>
        Gracias por su compra. Se le ha enviado un correo confirmando su cita.
      </Text>
      <TouchableOpacity style={styles.continuarWrapper} onPress={handleContinue}>
        <Text style={styles.continuar}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  pagoExitoso: {
    shadowColor: "rgba(0,0,0,0.07)",
    shadowOffset: {width:0,height:100},
    shadowRadius:80,
    elevation:80,
    shadowOpacity:1,
    borderRadius:Border.br_11xl,
    backgroundColor:Color.grayWhite,
    flex:1,
    width:"100%",
    height:896,
    overflow:"hidden",
    alignItems:'center',
    paddingTop:200
  },
  pagoExitoso1:{
    fontSize:FontSize.size_11xl,
    fontFamily:FontFamily.robotoBold,
    fontWeight:"700",
    textAlign:'center',
    color:Color.grayBlack,
    marginBottom:20
  },
  graciasPorSu:{
    textAlign:'center',
    marginHorizontal:20,
    fontFamily:FontFamily.m3BodyLarge,
    color:Color.grayBlack,
    fontSize:FontSize.bodyRegular_size,
    marginBottom:50
  },
  continuarWrapper:{
    backgroundColor:Color.colorGoldenrod,
    width:212,
    height:33,
    borderRadius:Border.br_3xs,
    justifyContent:'center',
    alignItems:'center'
  },
  continuar:{
    color:Color.colorSnow,
    fontFamily:FontFamily.robotoBold
  }
});

export default PagoExitoso;
