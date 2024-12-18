import * as React from "react";
import { Image, StyleSheet, View } from "react-native";
import GroupComponent from "../components/GroupComponent";
import CabeceraMobile from "../components/CabeceraMobile";
import { Border, Color } from "../GlobalStyles";

const TarjetaNueva = () => {
  return (
    <View style={styles.tarjetaNueva}>
      <Image
        style={styles.imagenDeWhatsapp20240909}
        resizeMode="cover"
        source={require("../assets/imagen-de-whatsapp-20240909-a-las-232250-79c3d0f3-1.png")}
      />
      <GroupComponent
        pAGARAHORA="Continuar"
        groupViewTop={728}
        pAGARAHORAMarginLeft={-35.5}
      />
      <Image
        style={[styles.image1Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={styles.image2Icon}
        resizeMode="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={[styles.image3Icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/image-3.png")}
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
  iconLayout: {
    height: 34,
    width: 65,
    position: "absolute",
  },
  imagenDeWhatsapp20240909: {
    marginLeft: -205,
    top: 231,
    left: "50%",
    width: 415,
    height: 465,
    position: "absolute",
  },
  image1Icon: {
    top: 197,
    left: 89,
  },
  image2Icon: {
    top: 194,
    left: 239,
    height: 42,
    width: 65,
    position: "absolute",
  },
  image3Icon: {
    top: 198,
    left: 162,
  },
  tarjetaNueva: {
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

export default TarjetaNueva;
