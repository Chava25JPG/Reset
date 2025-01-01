import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";
import auth from '@react-native-firebase/auth';

const EntrarMovil = () => {
  const navigation = useNavigation();

  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleLogin = async () => {
    if (!correo || !contraseña) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    try {
      await auth().signInWithEmailAndPassword(correo, contraseña);
      Alert.alert('Inicio de sesión exitoso');
      navigation.navigate('Home');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        Alert.alert('Error', 'Usuario no encontrado.');
      } else if (error.code === 'auth/wrong-password') {
        Alert.alert('Error', 'Contraseña incorrecta.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'Correo electrónico inválido.');
      } else {
        Alert.alert('Error', 'No se pudo iniciar sesión');
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Imagen de fondo */}
      <Image
        style={styles.backgroundImage}
        source={require("../assets/9145354-1.png")}
        resizeMode="cover"
      />

      {/* Tarjeta semi-transparente */}
      <View style={styles.overlayCard}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../assets/logo-11.png")}
        />
        <Text style={styles.title}>Entrar</Text>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Correo"
            placeholderTextColor="#666"
            value={correo}
            onChangeText={setCorreo}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#666"
            value={contraseña}
            onChangeText={setContraseña}
            secureTextEntry
          />

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          Al iniciar sesión o registrarte, aceptas la{" "}
          <Text style={styles.linkText}>Política de privacidad</Text>
          {" "}y los{" "}
          <Text style={styles.linkText}>Términos de uso</Text>{" "}de RESET.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.grayWhite,
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  overlayCard: {
    marginTop: 100,
    marginHorizontal: 20,
    backgroundColor: "rgba(255,255,255,0.9)",
    borderRadius: 25,
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  title: {
    fontSize: 30,
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    marginBottom: 30,
    textAlign: "center"
  },
  formContainer: {
    width: '100%',
    marginBottom: 20
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#000'
  },
  loginButton: {
    backgroundColor: "#779341",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold'
  },
  footerText: {
    fontSize: FontSize.bodySmall_size,
    textAlign: "center",
    marginTop: 20,
    color: Color.grayBlack
  },
  linkText: {
    color: Color.colorOlive,
    textDecorationLine: 'underline'
  }
});

export default EntrarMovil;
