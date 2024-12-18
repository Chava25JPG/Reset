import * as React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Color, FontSize, FontFamily, Border } from '../GlobalStyles';


const Bienvenida = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.bienvenida}>
      <Image
        style={styles.icon}
        resizeMode="cover"
        source={require("../assets/6621435-1.png")}
      />
      <Text style={styles.entrar}>
        <Text
          style={styles.alIniciarSesin}
        >{`Al iniciar sesión o registrarte, aceptas la `}</Text>
        <Text style={styles.polticaDePrivacidad}>Política de privacidad</Text>
        <Text style={styles.alIniciarSesin}>{` y los `}</Text>
        <Text style={styles.polticaDePrivacidad}>{`Términos de uso `}</Text>
        <Text style={styles.alIniciarSesin}>de RESET.</Text>
      </Text>
      <TouchableOpacity
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate('EntrarMovil')} // Navegar a EntrarMovil
      >
        <View style={styles.groupShadowBox} />
        <Text style={[styles.entrar1, styles.entrar1Typo]}>Entrar</Text>
      </TouchableOpacity>
     
      <TouchableOpacity
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate('RegistroMovil')}
      >
        <View style={styles.groupShadowBox} />
        <Text style={[styles.registro, styles.entrar1Typo]}>Registro</Text>
      </TouchableOpacity>
      <Image
        style={styles.logo1Icon}
        resizeMode="cover"
        source={require("../assets/logo-1.png")}
      />
      <View style={styles.groupParent}>
        <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <Image
            style={[styles.googleIcon, styles.googlePosition]}
            resizeMode="cover"
            source={require("../assets/google.png")}
          />
          <Text style={[styles.entrarConGoogle, styles.googlePosition]}>
            Entrar con Google
          </Text>
        </View>
        <Image
          style={[styles.groupIcon, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-52.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupLayout]}
          resizeMode="cover"
          source={require("../assets/group-51.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleLayout: {
    height: 54,
    width: 319,
    position: "absolute",
  },
  entrar1Typo: {
    color: Color.colorGoldenrod,
    textDecoration: "underline",
    fontSize: FontSize.size_xl,
    top: 12,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  groupInnerLayout: {
    height: 64,
    width: 209,
    left: 0,
    position: "absolute",
  },
  googlePosition: {
    top: 22,
    position: "absolute",
  },
  groupLayout: {
    width: 42,
    height: 64,
    position: "absolute",
  },
  icon: {
    top: -1,
    left: -752,
    width: 1369,
    position: "absolute",
    height: 896,
  },
  alIniciarSesin: {
    color: Color.colorWhite,
  },
  polticaDePrivacidad: {
    color: Color.colorOlive,
  },
  entrar: {
    marginTop: 360,
    marginLeft: -160,
    top: "50%",
    fontSize: 14,
    textAlign: "center",
    width: 319,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: "50%",
    position: "absolute",
  },
  groupShadowBox: {
    borderWidth: 1,
    borderColor: Color.colorGoldenrod,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 19,
    shadowRadius: 19,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(119, 147, 65, 0.3)",
    left: 0,
    top: 0,
    height: 54,
    width: 319,
    position: "absolute",
    backgroundColor: Color.colorDarkslategray,
  },
  entrar1: {
    marginLeft: -35.5,
    width: 70,
    textAlign: "left",
  },
  rectangleParent: {
    top: 453,
    left: 47,
  },
  iphoneXsBarsStatusDe: {
    height: "5.63%",
    width: "99.83%",
    top: "-0.11%",
    right: "-0.1%",
    bottom: "94.49%",
    left: "0.27%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  registro: {
    marginLeft: -43.5,
    width: 86,
    textAlign: "left",
  },
  rectangleGroup: {
    top: 555,
    left: 51,
  },
  logo1Icon: {
    marginLeft: -129,
    top: 149,
    width: 257,
    height: 257,
    left: "50%",
    position: "absolute",
  },
  groupInner: {
    borderRadius: 10,
    backgroundColor: "#e9f1ff",
    top: 0,
  },
  googleIcon: {
    left: 20,
    width: 21,
    height: 22,
    overflow: "hidden",
  },
  entrarConGoogle: {
    left: 55,
    fontSize: 12,
    fontFamily: FontFamily.poppinsRegular,
    color: "#4285f4",
    width: 133,
    height: 21,
    textAlign: "left",
  },
  rectangleContainer: {
    top: 1,
  },
  groupIcon: {
    left: 223,
    top: 1,
  },
  groupChild1: {
    left: 274,
    top: 0,
  },
  groupParent: {
    top: 646,
    left: 54,
    width: 316,
    height: 65,
    position: "absolute",
  },
  bienvenida: {
    borderRadius: 0,
    flex: 1,
    width: "100%",
    overflow: "hidden",
    height: 896,
    backgroundColor: Color.colorDarkslategray,
  },
});

export default Bienvenida;
