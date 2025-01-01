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
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { FontFamily, Color, Border, FontSize } from '../GlobalStyles';

const RegistroMovil = () => {
  const navigation = useNavigation();

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [usuario, setUsuario] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [telefono, setTelefono] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const handleRegister = async () => {
    if (!nombre || !apellido || !usuario || !correo || !contraseña || !telefono) {
      Alert.alert('Error', 'Por favor, completa todos los campos.');
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword(correo, contraseña);
      const currentUser = userCredential.user;

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
        <Image
          style={styles.backgroundImage}
          resizeMode="cover"
          source={require('../assets/9145354-1.png')}
        />

        {/* Tarjeta semi-transparente */}
        <View style={styles.overlayCard}>
          <Image
            style={styles.logo}
            resizeMode="contain"
            source={require('../assets/logo-11.png')}
          />

          <Text style={styles.bienvenidoAReset}>
            Bienvenido a <Text style={styles.highlightText}>RESET</Text>
          </Text>
          <View style={styles.tienesCuentaContainer}>
            <Text style={styles.textGray}>¿No tienes cuenta? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('EntrarMovil')}>
              <Text style={styles.linkText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.titulo}>Registro</Text>

          {/* Formulario */}
          <View style={styles.formContainer}>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="Nombre"
                placeholderTextColor="#666"
                value={nombre}
                onChangeText={setNombre}
              />
              <TextInput
                style={styles.input}
                placeholder="Apellido"
                placeholderTextColor="#666"
                value={apellido}
                onChangeText={setApellido}
              />
            </View>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="Usuario"
                placeholderTextColor="#666"
                value={usuario}
                onChangeText={setUsuario}
              />
              <TextInput
                style={styles.input}
                placeholder="Correo"
                placeholderTextColor="#666"
                value={correo}
                onChangeText={setCorreo}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputRow}>
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor="#666"
                value={contraseña}
                onChangeText={setContraseña}
                secureTextEntry
              />
              <TextInput
                style={styles.input}
                placeholder="Teléfono"
                placeholderTextColor="#666"
                value={telefono}
                onChangeText={setTelefono}
                keyboardType="phone-pad"
              />
            </View>
            <TextInput
              style={[styles.input, {width:'100%'}]}
              placeholder="WhatsApp"
              placeholderTextColor="#666"
              value={whatsapp}
              onChangeText={setWhatsapp}
              keyboardType="phone-pad"
            />

            <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
              <Text style={styles.registerButtonText}>Registrar</Text>
            </TouchableOpacity>

            {/* Botón de Google (Si lo requieres) */}
            <TouchableOpacity style={styles.googleButton}>
              <Text style={styles.googleButtonText}>G</Text>
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
  backgroundImage: {
    position: 'absolute',
    width:'100%',
    height:'100%',
    top:0,
    left:0
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
  bienvenidoAReset: {
    fontSize: FontSize.bodyRegular_size,
    textAlign:'center',
    fontFamily: FontFamily.robotoBold,
    fontWeight:"700",
    marginBottom:10,
    color:Color.grayBlack
  },
  highlightText: {
    color: '#779341'
  },
  tienesCuentaContainer: {
    flexDirection:'row',
    alignItems:'center',
    marginBottom:20
  },
  textGray: {
    color:'#8d8d8d'
  },
  linkText: {
    color:'#779341',
    textDecorationLine:'underline'
  },
  titulo: {
    fontSize:30,
    color:Color.grayBlack,
    fontFamily:FontFamily.robotoBold,
    fontWeight:'700',
    marginBottom:30,
    textAlign:'center'
  },
  formContainer: {
    width:'100%'
  },
  inputRow: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  input: {
    backgroundColor:'#FFF',
    borderColor:'#CCC',
    borderWidth:1,
    borderRadius:8,
    height:50,
    marginBottom:15,
    paddingHorizontal:10,
    color:'#000',
    width:'48%'
  },
  registerButton: {
    backgroundColor:'#779341',
    paddingVertical:15,
    borderRadius:8,
    alignItems:'center',
    marginTop:10
  },
  registerButtonText:{
    color:'#FFF',
    fontSize:16,
    fontWeight:'bold'
  },
  googleButton:{
    marginTop:20,
    borderWidth:1,
    borderColor:'#999',
    borderRadius:8,
    paddingVertical:10,
    alignItems:'center'
  },
  googleButtonText:{
    fontSize:20,
    fontWeight:'bold',
    color:'#666'
  },
  footerText:{
    fontSize: FontSize.bodySmall_size,
    textAlign:'center',
    marginTop:20,
    color:Color.grayBlack
  }
});

export default RegistroMovil;
