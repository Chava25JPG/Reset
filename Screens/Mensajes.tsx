import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Bar from "../components/Bar";
import CabeceraMobile from "../components/CabeceraMobile";
import {
  Color,
  FontFamily,
  FontSize,
  Padding,
  Border,
  Gap,
} from "../GlobalStyles";

const Mensajes = () => {
  return (
    <View style={styles.mensajes}>
      <Text style={[styles.legales, styles.legalesTypo]}>Legales</Text>
      <Text style={[styles.contacto, styles.legalesTypo]}>Contacto</Text>
      <Text style={[styles.avisoDePrivacidad, styles.ayudaTypo]}>
        Aviso de privacidad
      </Text>
      <View style={styles.messageWthLink}>
        <View style={styles.messageCard}>
          <Image
            style={styles.screenshot29891}
            resizeMode="cover"
            source={require("../assets/screenshot-2989-1.png")}
          />
          <View style={styles.textContent}>
            <Text style={styles.mira} numberOfLines={1}>
              Mira...
            </Text>
          </View>
        </View>
        <View style={[styles.sendChatBubble, styles.bubbleFlexBox]}>
          <Text style={[styles.chatText, styles.textTypo]}>
            Me dejaron en visto...
          </Text>
        </View>
      </View>
      <View style={styles.replyMessage}>
        <Image
          style={styles.imageIcon}
          resizeMode="cover"
          source={require("../assets/image.png")}
        />
        <View style={[styles.sendChatBubble1, styles.bubbleFlexBox]}>
          <Text style={[styles.chatText1, styles.textTypo]}>
            Lo estamos solucionando...
          </Text>
        </View>
      </View>
      <Bar />
      <View style={styles.predicitiveResponses}>
        <View style={[styles.bubble3, styles.bubbleFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}>Grax!</Text>
        </View>
      </View>
      <Image
        style={[styles.arrowBackIcon, styles.ayudaPosition]}
        resizeMode="cover"
        source={require("../assets/arrow-back.png")}
      />
      <Text style={[styles.ayuda, styles.ayudaPosition]}>Ayuda</Text>
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
    top: 834,
    position: "absolute",
  },
  ayudaTypo: {
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
  },
  bubbleFlexBox: {
    minHeight: 44,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  textTypo: {
    lineHeight: 24,
    letterSpacing: 1,
    textAlign: "left",
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.m3BodyLarge,
  },
  ayudaPosition: {
    top: 205,
    position: "absolute",
  },
  legales: {
    marginLeft: -106,
  },
  contacto: {
    marginLeft: 55,
  },
  avisoDePrivacidad: {
    marginLeft: -70,
    top: 801,
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "700",
    position: "absolute",
  },
  screenshot29891: {
    height: 198,
    width: 200,
  },
  mira: {
    fontSize: FontSize.bodySmall_size,
    letterSpacing: 0,
    lineHeight: 20,
    color: Color.schemesOnBackground,
    textAlign: "left",
    width: 200,
    fontFamily: FontFamily.m3BodyLarge,
    overflow: "hidden",
  },
  textContent: {
    width: 200,
  },
  messageCard: {
    borderRadius: Border.br_xs,
    padding: Padding.p_xs,
    gap: 6,
    backgroundColor: Color.yellow600,
    overflow: "hidden",
  },
  chatText: {
    color: Color.grayWhite,
    flex: 1,
  },
  sendChatBubble: {
    borderBottomRightRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_xl,
    maxWidth: 380,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    minHeight: 44,
    backgroundColor: Color.yellow600,
  },
  messageWthLink: {
    top: 248,
    left: 0,
    width: 419,
    height: 341,
    alignItems: "flex-end",
    justifyContent: "center",
    gap: Gap.gap_2xs,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    position: "absolute",
    backgroundColor: Color.grayWhite,
  },
  imageIcon: {
    borderRadius: 36,
    width: 36,
    height: 36,
  },
  chatText1: {
    color: Color.m3SysLightOnSurfaceVariant,
    flex: 1,
  },
  sendChatBubble1: {
    borderBottomRightRadius: Border.br_xl,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.yellow200,
    maxWidth: 336,
    borderTopRightRadius: Border.br_xl,
    borderTopLeftRadius: Border.br_xl,
    minHeight: 44,
  },
  replyMessage: {
    top: 583,
    left: -2,
    width: 464,
    height: 65,
    gap: Gap.gap_xs,
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    position: "absolute",
    backgroundColor: Color.grayWhite,
  },
  text: {
    color: Color.m3SysLightOnSecondaryContainer,
  },
  bubble3: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 20,
    backgroundColor: Color.yellow600,
  },
  predicitiveResponses: {
    top: 644,
    left: 6,
    width: 406,
    height: 71,
    justifyContent: "flex-end",
    paddingTop: Padding.p_base,
    paddingBottom: Padding.p_xs,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    position: "absolute",
    backgroundColor: Color.grayWhite,
  },
  arrowBackIcon: {
    left: 26,
    width: 24,
    height: 26,
  },
  ayuda: {
    marginLeft: -154,
    fontSize: FontSize.size_xl,
    width: 57,
    height: 25,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    textAlign: "center",
    color: Color.colorDimgray_100,
    left: "50%",
  },
  mensajes: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowRadius: 80,
    elevation: 80,
    shadowOpacity: 1,
    borderRadius: Border.br_11xl,
    width: "100%",
    height: 896,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.grayWhite,
  },
});

export default Mensajes;
