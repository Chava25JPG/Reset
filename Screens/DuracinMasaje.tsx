import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import CabeceraMobile from "../components/CabeceraMobile";
import { Color, FontFamily, FontSize, Gap, Border } from "../GlobalStyles";

const DuracinMasaje = () => {
  return (
    <View style={styles.duracinMasaje}>
      <Image
        style={[styles.duracinMasajeChild, styles.image5IconPosition]}
        resizeMode="cover"
        source={require("../assets/rectangle-53.png")}
      />
      <Text style={styles.duracin}>DURACIÓN</Text>
      <Text style={[styles.minMxn, styles.minTypo]}>{`60 MIN
$ MXN`}</Text>
      <Text style={[styles.minMxn1, styles.minTypo]}>{`90 MIN
$ MXN`}</Text>
      <Text style={[styles.minMxn2, styles.minTypo]}>{`120 MIN
$ MXN`}</Text>
      <View style={[styles.duracinMasajeItem, styles.duracinLayout]} />
      <View style={[styles.duracinMasajeInner, styles.duracinLayout]} />
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle-56.png")}
      />
      <Text style={[styles.continuar, styles.continuarTypo]}>CONTINUAR</Text>
      <Text
        style={[styles.fechaYHora, styles.fechaYHoraTypo]}
      >{`FECHA Y HORA `}</Text>
      <Text style={[styles.gneroDelTerapeuta, styles.fechaYHoraTypo]}>
        GÉNERO DEL TERAPEUTA
      </Text>
      <View style={[styles.vectorParent, styles.parentPosition]}>
        <Image
          style={styles.groupChild}
          resizeMode="cover"
          source={require("../assets/rectangle-531.png")}
        />
        <Image
          style={[styles.genderMaleIcon, styles.genderIconPosition]}
          resizeMode="cover"
          source={require("../assets/gendermale.png")}
        />
        <View style={styles.masculinoWrapper}>
          <Text style={[styles.masculino, styles.ambosTypo]}>Masculino</Text>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.parentPosition]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.genderFemaleIcon, styles.genderIconPosition]}
          resizeMode="cover"
          source={require("../assets/genderfemale.png")}
        />
        <Text style={[styles.femenino, styles.ambosTypo]}>Femenino</Text>
      </View>
      <View style={[styles.rectangleGroup, styles.parentPosition]}>
        <View style={styles.groupShadowBox} />
        <Image
          style={[styles.genderAmbiguousIcon, styles.genderIconPosition]}
          resizeMode="cover"
          source={require("../assets/genderambiguous.png")}
        />
        <Text style={[styles.ambos, styles.ambosTypo]}>Ambos</Text>
      </View>
      <Image
        style={styles.groupIcon}
        resizeMode="cover"
        source={require("../assets/group-123.png")}
      />
      <Image
        style={[styles.image5Icon, styles.image5IconPosition]}
        resizeMode="cover"
        source={require("../assets/image-5.png")}
      />
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container.png")}
        cabeceraMobileMarginLeft={-207}
        cabeceraMobileLeft="50%"
        cabeceraMobileMarginTop="unset"
      />
      <Text style={[styles.agregar15, styles.continuarTypo]}>
        AGREGAR + 15 MIN EXTRAS DE:
      </Text>
      <View style={styles.componentscheckboxParent}>
        <View
          style={[styles.componentscheckbox, styles.componentscheckboxPosition]}
        >
          <View style={styles.bg} />
          <Text style={styles.text}>Zona descontractural</Text>
        </View>
        <View
          style={[
            styles.componentscheckbox1,
            styles.componentscheckboxPosition,
          ]}
        >
          <View style={styles.bg} />
          <Text style={styles.text}>Craneo facial</Text>
        </View>
        <View
          style={[
            styles.componentscheckbox2,
            styles.componentscheckboxPosition,
          ]}
        >
          <View style={styles.bg} />
          <Text style={styles.text}>Masaje de pies</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image5IconPosition: {
    width: 396,
    left: 9,
    position: "absolute",
  },
  minTypo: {
    color: Color.yellow300,
    top: 474,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: "50%",
    position: "absolute",
  },
  duracinLayout: {
    height: 87,
    width: 2,
    borderRightWidth: 2,
    borderColor: Color.yellow300,
    backgroundColor: Color.yellow300,
    top: 454,
    borderStyle: "solid",
    position: "absolute",
  },
  continuarTypo: {
    color: Color.grayWhite,
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  fechaYHoraTypo: {
    color: Color.colorDimgray_100,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    left: "50%",
    position: "absolute",
  },
  parentPosition: {
    top: 784,
    height: 37,
    width: 123,
    position: "absolute",
  },
  genderIconPosition: {
    height: 26,
    top: 6,
    position: "absolute",
    overflow: "hidden",
  },
  ambosTypo: {
    fontSize: FontSize.size_base_4,
    height: 17,
    color: Color.grayWhite,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  componentscheckboxPosition: {
    gap: Gap.gap_xs,
    flexDirection: "row",
    backgroundColor: Color.hitBox,
    marginTop: -8,
    top: "50%",
    position: "absolute",
  },
  duracinMasajeChild: {
    top: 412,
    height: 204,
  },
  duracin: {
    marginLeft: -75,
    top: 429,
    color: Color.colorGainsboro_200,
    width: 150,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  minMxn: {
    marginLeft: -169,
  },
  minMxn1: {
    marginLeft: -39,
  },
  minMxn2: {
    marginLeft: 87,
  },
  duracinMasajeItem: {
    left: 274,
  },
  duracinMasajeInner: {
    left: 133,
  },
  rectangleIcon: {
    top: 839,
    left: 142,
    height: 37,
    width: 123,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  continuar: {
    marginLeft: -77,
    top: 848,
    width: 150,
  },
  fechaYHora: {
    top: 625,
    marginLeft: -70,
  },
  gneroDelTerapeuta: {
    marginLeft: -191,
    top: 753,
    width: 383,
    height: 35,
  },
  groupChild: {
    left: 0,
    top: 0,
    height: 37,
    width: 123,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  genderMaleIcon: {
    left: 10,
    width: 27,
    height: 26,
    top: 6,
  },
  masculino: {
    marginLeft: -40,
    width: 80,
    fontSize: FontSize.size_base_4,
    top: 0,
  },
  masculinoWrapper: {
    marginLeft: -20.5,
    height: 17,
    width: 80,
    top: 10,
    left: "50%",
    position: "absolute",
  },
  vectorParent: {
    left: 21,
  },
  groupShadowBox: {
    backgroundColor: Color.yellow600,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    top: 0,
    height: 37,
    width: 123,
    borderRadius: Border.br_xl,
    position: "absolute",
    shadowOpacity: 1,
  },
  genderFemaleIcon: {
    left: 7,
    width: 27,
    height: 26,
    top: 6,
  },
  femenino: {
    marginLeft: -23.5,
    width: 70,
    top: 10,
    fontSize: FontSize.size_base_4,
  },
  rectangleParent: {
    left: 147,
  },
  genderAmbiguousIcon: {
    left: 8,
    width: 26,
    height: 26,
    top: 6,
  },
  ambos: {
    marginLeft: -21.5,
    width: 69,
    top: 10,
    fontSize: FontSize.size_base_4,
  },
  rectangleGroup: {
    left: 276,
  },
  groupIcon: {
    top: 658,
    width: 140,
    height: 85,
    marginLeft: -70,
    left: "50%",
    position: "absolute",
  },
  image5Icon: {
    top: 163,
    height: 249,
  },
  agregar15: {
    marginLeft: -117,
    top: 548,
  },
  bg: {
    borderRadius: Border.br_9xs,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 16,
    height: 16,
    borderStyle: "solid",
    backgroundColor: Color.grayWhite,
  },
  text: {
    fontSize: FontSize.size_xs,
    color: Color.yellow600,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  componentscheckbox: {
    left: 233,
  },
  componentscheckbox1: {
    marginLeft: -65,
    left: "50%",
  },
  componentscheckbox2: {
    left: 0,
  },
  componentscheckboxParent: {
    marginTop: 132,
    left: 23,
    width: 372,
    height: 16,
    top: "50%",
    position: "absolute",
  },
  duracinMasaje: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowRadius: 80,
    elevation: 80,
    borderRadius: Border.br_11xl,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.grayWhite,
    shadowOpacity: 1,
  },
});

export default DuracinMasaje;
