import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

const { width } = Dimensions.get('window');

const Bienvenida = () => {
  const navigation = useNavigation();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email', 'profile'],
      webClientId: '246084948942-depdd4e9ruqsb0080rjllvjp2k4pkhdb.apps.googleusercontent.com', // Reemplaza con tu Web client ID
      forceCodeForRefreshToken: false,
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      // Verificar Play Services
      const playServicesAvailable = await GoogleSignin.hasPlayServices({ 
        showPlayServicesUpdateDialog: true 
      });
      console.log('Play Services disponible:', playServicesAvailable);

      // Intentar sign in
      const userInfo = await GoogleSignin.signIn();
      console.log('UserInfo:', userInfo);

      if (!userInfo.idToken) {
        throw new Error('No se pudo obtener el idToken');
      }

      // Crear credencial de Firebase
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      
      // Sign in con Firebase
      const userCredential = await auth().signInWithCredential(googleCredential);
      console.log('Usuario autenticado:', userCredential.user);

      navigation.navigate('Home');

    } catch (error) {
      console.error('Error completo:', error);

      switch (error.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          Alert.alert('Aviso', 'Inicio de sesión cancelado');
          break;

        case statusCodes.IN_PROGRESS:
          Alert.alert('Aviso', 'La operación de inicio de sesión está en progreso');
          break;

        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          Alert.alert('Error', 'Google Play Services no está disponible');
          break;

        case statusCodes.DEVELOPER_ERROR:
          Alert.alert(
            'Error de configuración',
            'Verifica:\n' +
            '1. SHA-1 y SHA-256 en Firebase Console\n' +
            '2. ID del paquete en AndroidManifest.xml\n' +
            '3. google-services.json actualizado\n' +
            '4. webClientId correctamente configurado'
          );
          break;

        default:
          Alert.alert('Error', 'Error al iniciar sesión: ' + error.message);
      }
    }
  };

  return (
    <View style={styles.bienvenida}>
      <Image
        style={styles.background}
        resizeMode="cover"
        source={require("../assets/6621435-1.png")}
      />
      <View style={styles.overlay}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../assets/logo-1.png")}
        />
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('EntrarMovil')}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegistroMovil')}>
            <Text style={styles.buttonText}>Registro</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.googleButton} onPress={signInWithGoogle}>
            <Image
              style={styles.googleIcon}
              resizeMode="cover"
              source={require("../assets/google.png")}
            />
            <Text style={styles.googleButtonText}>Entrar con Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
            <Image
              style={styles.socialIcon}
              resizeMode="cover"
              source={require("../assets/group-52.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
            <Image
              style={styles.socialIcon}
              resizeMode="cover"
              source={require("../assets/group-51.png")}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>
          Al iniciar sesión o registrarte, aceptas la{" "}
          <Text style={styles.linkText}>Política de privacidad</Text>
          {" "}y los{" "}
          <Text style={styles.linkText}>{`Términos de uso `}</Text>
          de RESET.
        </Text>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  bienvenida: {
    flex: 1,
    backgroundColor: Color.colorDarkslategray,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: width * 0.7,
    height: width * 0.7,
    marginBottom: 40,
  },
  buttonsContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    height: 54,
    backgroundColor: Color.colorDarkslategray,
    borderRadius: Border.br_3xs,
    borderWidth: 1,
    borderColor: Color.colorGoldenrod,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: Color.colorGoldenrod,
    fontSize: FontSize.size_xl,
    textDecorationLine: 'underline',
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  googleButton: {
    flexDirection: 'row',
    width: '60%',
    height: 64,
    backgroundColor: '#e9f1ff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  googleIcon: {
    width: 21,
    height: 22,
    marginRight: 10,
  },
  googleButtonText: {
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorDodgerblue,
  },
  socialButton: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appleButton: {
    marginRight: 10,
  },
  facebookButton: {},
  socialIcon: {
    width: 42,
    height: 64,
  },
  footerText: {
    fontSize: FontSize.bodySmall_size,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: '500',
    color: Color.grayWhite,
    textAlign: 'center',
  },
  linkText: {
    color: Color.colorOlive,
    textDecorationLine: 'underline',
  },
});

export default Bienvenida;
