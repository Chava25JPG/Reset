import React, { useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importaciones de Firebase
import firestore from '@react-native-firebase/firestore';
// Si usas Firebase Auth
import auth from '@react-native-firebase/auth'; // Asegúrate de tener este paquete instalado

// Importaciones de componentes personalizados y estilos
import Buttonmediumprimarytruenor from '../components/Buttonmediumprimarytruenor'; // Botón de Google
import { FontFamily, Color, Border, FontSize } from '../GlobalStyles';

const RegistroMovil = () => {
  const navigation = useNavigation(); // Hook para la navegación

  // Estados para los campos del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [telefono, setTelefono] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  // Función para manejar el registro
  const handleRegister = async () => {
    // Validar que todos los campos requeridos estén llenos
    if (!nombre || !apellido || !usuario || !correo || !contraseña || !telefono) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    try {
      // Registrar usuario con Firebase Authentication
      const userCredential = await auth().createUserWithEmailAndPassword(correo, contraseña);
      const currentUser = userCredential.user;

      // Agregar información adicional del usuario a Firestore
      await firestore().collection('usuarios').doc(currentUser.uid).set({
        nombre,
        apellido,
        usuario,
        correo,
        telefono,
        whatsapp,
        fechaRegistro: firestore.FieldValue.serverTimestamp(),
      });

      Alert.alert('Registro exitoso', 'Usuario registrado correctamente.');
      // Navegar a la pantalla de bienvenida
      navigation.navigate('Bienvenida');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'El correo electrónico ya está en uso.');
      } else if (error.code === 'auth/invalid-email') {
        Alert.alert('Error', 'El correo electrónico no es válido.');
      } else if (error.code === 'auth/weak-password') {
        Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres.');
      } else {
        Alert.alert('Error', 'No se pudo registrar el usuario');
        console.error(error);
      }
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.registroMovil}>
        {/* Imagen de fondo */}
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require('../assets/9145354-1.png')}
        />
        <View style={styles.registroMovilChild} />

        {/* Logo */}
        <Image
          style={styles.logo1Icon}
          resizeMode="contain"
          source={require('../assets/logo-11.png')}
        />

        {/* Contenido Principal */}
        <View style={styles.mainContent}>
          <View style={styles.bienvenidoAResetParent}>
            <Text style={styles.bienvenidoAResetContainer}>
              <Text style={styles.bienvenidoA}>{`Bienvenido a `}</Text>
              <Text style={styles.reset}>RESET</Text>
            </Text>
            <View style={styles.noTieneCuentaContainer}>
              <Text style={styles.noTieneCuenta}>{`¿No tienes cuenta? `}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.registrarse}>Entrar</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={[styles.registro, styles.registroTypo]}>Registro</Text>

          {/* Formulario de Registro */}
          <View style={styles.formContainer}>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
              />
              <TextInput
                style={styles.input}
                placeholder="Apellido"
                value={apellido}
                onChangeText={setApellido}
              />
            </View>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="Usuario"
                value={usuario}
                onChangeText={setUsuario}
              />
              <TextInput
                style={styles.input}
                placeholder="Correo"
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                value={contraseña}
                onChangeText={setContraseña}
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                placeholder="Teléfono"
                value={telefono}
                onChangeText={setTelefono}
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.inputRow}>
              <TextInput
                style={[styles.input, styles.fullWidthInput]}
                placeholder="WhatsApp"
                value={whatsapp}
                onChangeText={setWhatsapp}
                keyboardType="phone-pad"
              />
            </View>

            {/* Botón de Registro */}
            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
              <Text style={styles.registerButtonText}>Registrar</Text>
            </TouchableOpacity>

            {/* Botón de Google */}
            <View style={styles.googleButtonContainer}>
              <Buttonmediumprimarytruenor />
            </View>
          </View>

          {/* Texto de Política de Privacidad y Términos de Uso */}
          <Text style={[styles.entrar, styles.registroTypo]}>
            <Text style={styles.alIniciarSesion}>{`Al iniciar sesión o registrarte, aceptas la `}</Text>
            <Text style={styles.politicaDePrivacidad}>Política de privacidad</Text>
            <Text style={styles.alIniciarSesion}>{` y los `}</Text>
            <Text style={styles.politicaDePrivacidad}>Términos de uso </Text>
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
  registroMovil: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Color.grayWhite,
  },
  icon: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
  },
  registroMovilChild: {
    position: 'absolute',
    top: 88,
    borderRadius: Border.br_21xl,
    backgroundColor: Color.colorGray_200,
    width: 379,
    height: 709,
    left: '50%',
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
  bienvenidoAResetParent: {
    alignItems: 'center',
    marginTop: 20,
  },
  bienvenidoAResetContainer: {
    fontSize: FontSize.bodyRegular_size,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsRegular,
  },
  bienvenidoA: {
    color: Color.grayBlack,
  },
  reset: {
    fontWeight: '600',
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorOlivedrab,
  },
  noTieneCuentaContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  noTieneCuenta: {
    color: '#8d8d8d',
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_smi,
  },
  registrarse: {
    color: Color.colorOlivedrab,
    fontFamily: FontFamily.poppinsSemiBold,
    fontSize: FontSize.size_smi,
    textDecorationLine: 'underline',
  },
  registro: {
    fontSize: 40,
    color: Color.grayBlack,
    textAlign: 'center',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    marginTop: 20,
  },
  registroTypo: {
    fontFamily: FontFamily.poppinsRegular,
  },
  formContainer: {
    width: '100%',
    marginTop: 20,
  },
  inputRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: '48%',
    height: 50,
    backgroundColor: '#FFF',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  fullWidthInput: {
    width: '100%',
  },
  registerButton: {
    backgroundColor: '#779341',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleButtonContainer: {
    marginTop: 20,
    width: '100%',
  },
  entrar: {
    fontSize: FontSize.bodySmall_size,
    textAlign: 'center',
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

export default RegistroMovil;
