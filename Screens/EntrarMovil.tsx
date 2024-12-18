// EntrarMovil.js
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import InputBase from "../components/InputBase";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

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
      const response = await axios.post('http://10.0.2.2:5000/api/users/login', {
        correo,
        contraseña,
      });

      if (response.status === 200) {
        Alert.alert('Inicio de sesión exitoso');
        // Navegar a la pantalla principal de la aplicación
        navigation.navigate('Home'); // Asegúrate de que 'Home' está definida en tu stack de navegación
      } else {
        Alert.alert('Error', 'Credenciales inválidas');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        Alert.alert('Error', error.response.data.message);
      } else {
        Alert.alert('Error', 'No se pudo iniciar sesión');
      }
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.entrarMovil}>
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/9145354-1.png")}
        />
        <View style={styles.entrarMovilChild} />
        <Image
          style={styles.logo1Icon}
          resizeMode="cover"
          source={require("../assets/logo-11.png")}
        />

        {/* Formulario de Inicio de Sesión */}
        <View style={styles.mainContent}>
          <Text style={styles.titulo}>Entrar</Text>

          <View style={styles.formContainer}>
            <InputBase
              placeholderText="Correo"
              value={correo}
              onChangeText={setCorreo}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <InputBase
              placeholderText="Contraseña"
              value={contraseña}
              onChangeText={setContraseña}
              secureTextEntry
            />

            {/* Botón de Inicio de Sesión */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          {/* Texto de Política de Privacidad y Términos de Uso */}
          <Text style={styles.entrar}>
            <Text style={styles.alIniciarSesion}>{`Al iniciar sesión o registrarte, aceptas la `}</Text>
            <Text style={styles.politicaDePrivacidad}>Política de privacidad</Text>
            <Text style={styles.alIniciarSesion}>{` y los `}</Text>
            <Text style={styles.politicaDePrivacidad}>{`Términos de uso `}</Text>
            <Text style={styles.alIniciarSesion}>de RESET.</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: Color.grayWhite,
  },
  entrarMovil: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.grayWhite,
  },
  icon: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
  entrarMovilChild: {
    position: "absolute",
    top: 88,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_200,
    width: 379,
    height: 709,
    left: "50%",
    transform: [{ translateX: -379 / 2 }],
  },
  logo1Icon: {
    width: 135,
    height: 135,
    marginTop: 127,
  },
  mainContent: {
    width: '90%',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 40,
    color: Color.grayBlack,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    marginTop: 20,
  },
  formContainer: {
    width: '100%',
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#779341',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  entrar: {
    fontSize: FontSize.bodySmall_size,
    textAlign: "center",
    marginTop: 20,
  },
  alIniciarSesion: {
    color: Color.grayBlack,
  },
  politicaDePrivacidad: {
    color: Color.colorOlive,
    textDecorationLine: 'underline',
  },
});

export default EntrarMovil;
