import * as React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, Alert } from "react-native";
import GroupComponent from "../components/GroupComponent";
import CabeceraMobile from "../components/CabeceraMobile";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useRoute, useNavigation } from "@react-navigation/native";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const ConfirmacionDePedido = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { category, service, duration, gender, extras, terapeuta, date } = route.params || {};

  const handleConfirm = async () => {
    // Simular pago y guardar cita en Firestore
    try {
      const currentUser = auth().currentUser;
      const uid = currentUser ? currentUser.uid : "usuario_anonimo";

      await firestore().collection('citas').add({
        uid,
        category,
        service: service?.title,
        price: service?.price,
        duration,
        gender,
        extras,
        terapeuta,
        date,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });

      Alert.alert("Pago simulado exitoso", "Su cita ha sido registrada.");
      navigation.navigate("PagoExitoso");
    } catch (error) {
      Alert.alert("Error", "No se pudo registrar la cita");
      console.error(error);
    }
  };

  return (
    <View style={styles.confirmacionDePedido}>
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container.png")}
      />

      <Text style={[styles.momentoRelajante, styles.textTypo]}>
        {service?.title || "Momento Relajante"}
      </Text>
      <Text style={[styles.text, styles.textTypo]}>{service?.price || "$0"}</Text>

      <Text style={{marginTop:100, textAlign:'center', fontFamily: FontFamily.robotoBold}}>
        Confirma tu pedido y se simulará el pago, guardando la cita.
      </Text>

      <TouchableOpacity onPress={handleConfirm} style={styles.confirmBtn}>
        <Text style={styles.confirmBtnText}>CONFIRMAR PAGO (SIMULADO)</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
    left:'50%',
    marginLeft:-100
  },
  confirmacionDePedido: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {width: 0,height: 100},
    shadowRadius: 80,
    elevation: 80,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.grayWhite,
    flex:1,
    width:"100%",
    height:896,
    overflow:"hidden",
    alignItems:'center',
    paddingTop:200,
    shadowOpacity:1
  },
  momentoRelajante: {
    top:100,
    fontSize: FontSize.size_11xl,
    width:200,
    color: Color.grayBlack,
  },
  text: {
    top:180,
    fontSize: FontSize.size_13xl,
    width:200,
    color: Color.grayBlack,
  },
  confirmBtn: {
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_3xs,
    width: 250,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    marginTop:50
  },
  confirmBtnText:{
    color: Color.colorSnow,
    fontFamily: FontFamily.robotoBold
  }
});

export default ConfirmacionDePedido;
