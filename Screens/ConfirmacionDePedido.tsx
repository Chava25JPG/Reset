import * as React from "react";
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  Alert,
  SafeAreaView
} from "react-native";
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
    <SafeAreaView style={styles.container}>
      <View style={styles.confirmacionDePedido}>
        <CabeceraMobile
          icon={require("../assets/icon4.png")}
          hora="09:41"
          container={require("../assets/container.png")}
        />
        
        <View style={styles.contentContainer}>
          <Text style={styles.momentoRelajante}>
            {service?.title || "Momento Relajante"}
          </Text>
          
          <Text style={styles.price}>
            {service?.price || "$0"}
          </Text>
          
          <Text style={styles.confirmationText}>
            Confirma tu pedido y se simulará el pago, guardando la cita.
          </Text>
          
          <TouchableOpacity 
            onPress={handleConfirm} 
            style={styles.confirmBtn}
          >
            <Text style={styles.confirmBtnText}>
              CONFIRMAR PAGO (SIMULADO)
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  confirmacionDePedido: {
    flex: 1,
    backgroundColor: Color.grayWhite,
    width: "100%",
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  momentoRelajante: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.robotoBold,
    color: Color.grayBlack,
    textAlign: "center",
    marginTop: 20,
  },
  price: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.robotoBold,
    color: Color.grayBlack,
    textAlign: "center",
    marginTop: 20,
  },
  confirmationText: {
    fontFamily: FontFamily.robotoBold,
    textAlign: 'center',
    marginTop: 30,
  },
  confirmBtn: {
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_3xs,
    width: 250,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  confirmBtnText: {
    color: Color.colorSnow,
    fontFamily: FontFamily.robotoBold,
  }
});

export default ConfirmacionDePedido;