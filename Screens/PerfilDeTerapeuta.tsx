import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import GroupComponent2 from "../components/GroupComponent2";
import CabeceraMobile from "../components/CabeceraMobile";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PerfilDeTerapeuta = () => {
  return (
    <View style={styles.perfilDeTerapeuta}>
      <Text style={[styles.legales, styles.legalesTypo]}>Legales</Text>
      <Text style={[styles.contacto, styles.legalesTypo]}>Contacto</Text>
      <Text style={[styles.tocaParaCambiar, styles.legalesTypo]}>
        TOCA PARA CAMBIAR TU IMAGEN DE PERFIL
      </Text>
      <Text style={[styles.dafrengmailcom, styles.dafrengmailcomPosition]}>
        dafren@gmail.com
      </Text>
      <Text style={[styles.avisoDePrivacidad, styles.ayudaChatTypo]}>
        Aviso de privacidad
      </Text>
      <Text style={[styles.danielRamos, styles.ayudaChatTypo]}>
        DANIEL RAMOS
      </Text>
      <Image
        style={[
          styles.perfilCirculo600x3981Icon,
          styles.dafrengmailcomPosition,
        ]}
        resizeMode="cover"
        source={require("../assets/perfilcirculo600x398-11.png")}
      />
      <GroupComponent2 />
      <Text style={[styles.ayudaChat, styles.ayudaChatTypo]}>AYUDA (Chat)</Text>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector.png")}
      />
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="12:41"
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
  },
  dafrengmailcomPosition: {
    marginLeft: -50,
    left: "50%",
    position: "absolute",
  },
  ayudaChatTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
    position: "absolute",
  },
  legales: {
    marginLeft: -106,
    left: "50%",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    position: "absolute",
    top: 834,
  },
  contacto: {
    marginLeft: 55,
    left: "50%",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    position: "absolute",
    top: 834,
  },
  tocaParaCambiar: {
    marginLeft: -122,
    top: 311,
    left: "50%",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  dafrengmailcom: {
    top: 434,
    textAlign: "center",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
  },
  avisoDePrivacidad: {
    marginLeft: -70,
    top: 801,
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "700",
  },
  danielRamos: {
    marginLeft: -57,
    top: 404,
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "700",
  },
  perfilCirculo600x3981Icon: {
    top: 197,
    width: 100,
    height: 100,
  },
  ayudaChat: {
    marginLeft: -139,
    top: 770,
    fontSize: FontSize.bodySmall_size,
  },
  vectorIcon: {
    height: "1.45%",
    width: "1.69%",
    top: "86.16%",
    right: "17.39%",
    bottom: "12.39%",
    left: "80.92%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  perfilDeTerapeuta: {
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

export default PerfilDeTerapeuta;
