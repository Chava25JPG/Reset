import * as React from "react";
import { Text, StyleSheet, Image, Pressable, View } from "react-native";
import GroupComponent3 from "../components/GroupComponent3";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import CabeceraMobile from "../components/CabeceraMobile";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PerfilDeCliente = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.perfilDeCliente}>
      <Text style={[styles.legales, styles.legalesTypo]}>Legales</Text>
      <Text style={[styles.contacto, styles.legalesTypo]}>Contacto</Text>
      <Text style={[styles.tocaParaCambiar, styles.legalesTypo]}>
        TOCA PARA CAMBIAR TU IMAGEN DE PERFIL
      </Text>
      <Text style={[styles.bebozzogmailcom, styles.legalesTypo]}>
        bebozzo@gmail.com
      </Text>
      <Text style={[styles.avisoDePrivacidad, styles.ayudaChat1Typo]}>
        Aviso de privacidad
      </Text>
      <Text style={[styles.brigitteBozzo, styles.ayudaChat1Typo]}>
        Brigitte Bozzo
      </Text>
      <Image
        style={[styles.sample091Icon, styles.ayudaChatPosition]}
        resizeMode="cover"
        source={require("../assets/sample09-11.png")}
      />
      <GroupComponent3 />
      <Pressable
        style={[styles.ayudaChat, styles.ayudaChatPosition]}
        onPress={() => navigation.navigate("Mensajes")}
      >
        <Text style={[styles.ayudaChat1, styles.ayudaChat1Typo]}>
          AYUDA (Chat)
        </Text>
      </Pressable>
      <Image
        style={styles.image4Icon}
        resizeMode="cover"
        source={require("../assets/image-4.png")}
      />
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container.png")}
        cabeceraMobileMarginLeft={-207}
        cabeceraMobileLeft="50%"
        cabeceraMobileMarginTop="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  legalesTypo: {
    textAlign: "center",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  ayudaChat1Typo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorDimgray_100,
  },
  ayudaChatPosition: {
    left: "50%",
    position: "absolute",
  },
  legales: {
    marginLeft: -106,
    top: 834,
    textAlign: "center",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
  },
  contacto: {
    marginLeft: 55,
    top: 834,
    textAlign: "center",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
  },
  tocaParaCambiar: {
    marginLeft: -122,
    top: 311,
  },
  bebozzogmailcom: {
    marginLeft: -55,
    top: 434,
  },
  avisoDePrivacidad: {
    marginLeft: -71,
    top: 798,
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  brigitteBozzo: {
    marginLeft: -51,
    top: 404,
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  sample091Icon: {
    marginLeft: -48,
    top: 186,
    width: 111,
    height: 114,
  },
  ayudaChat1: {
    marginLeft: -139,
    fontSize: FontSize.bodySmall_size,
  },
  ayudaChat: {
    top: 765,
  },
  image4Icon: {
    top: 543,
    left: 88,
    width: 36,
    height: 33,
    position: "absolute",
  },
  perfilDeCliente: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowRadius: 80,
    elevation: 80,
    shadowOpacity: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.grayWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
  },
});

export default PerfilDeCliente;
