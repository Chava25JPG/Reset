import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import CabeceraMobile from "../components/CabeceraMobile";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Inicio = () => {
  return (
    <View style={styles.inicio}>
      <Text style={styles.categoras}>Categorías</Text>
      <View style={[styles.categorias, styles.categoriasPosition]}>
        <View style={styles.groupParent}>
          <View style={[styles.rectangleParent, styles.groupParentShadowBox]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.prenatal, styles.prenatalLayout]}>
              Prenatal
            </Text>
            <Image
              style={[styles.outputOnlinepngtools21Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/outputonlinepngtools2-1.png")}
            />
          </View>
          <View style={[styles.rectangleGroup, styles.imageGroupSpaceBlock]}>
            <View style={[styles.groupItem, styles.imageGroupSpaceBlock]} />
            <Text style={[styles.prenatal, styles.prenatalLayout]}>
              Ventosas
            </Text>
            <Image
              style={[styles.outputOnlinepngtools31, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/outputonlinepngtools-3-1.png")}
            />
          </View>
          <View
            style={[styles.rectangleContainer, styles.groupParentShadowBox]}
          >
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text
              style={[styles.bamb, styles.imageGroupSpaceBlock]}
            >{`Bambú `}</Text>
            <Image
              style={[styles.outputOnlinepngtools21, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/outputonlinepngtools-2-1.png")}
            />
          </View>
        </View>
        <View style={[styles.groupContainer, styles.parentGroupPosition]}>
          <View style={[styles.groupView, styles.groupParentShadowBox]}>
            <View style={[styles.groupChild, styles.groupChildPosition]} />
            <Text style={[styles.deportivo, styles.deportivoTypo]}>
              Deportivo
            </Text>
            <Image
              style={[styles.outputOnlinepngtools1Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/outputonlinepngtools-1.png")}
            />
          </View>
          <View style={[styles.imageParent, styles.imageGroupSpaceBlock]}>
            <View style={[styles.image, styles.imageGroupSpaceBlock]} />
            <Text style={[styles.relajante, styles.deportivoTypo]}>
              Relajante
            </Text>
            <Image
              style={[styles.outputOnlinepngtools11, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/outputonlinepngtools-1-1.png")}
            />
          </View>
          <View style={[styles.rectangleParent1, styles.parentGroupPosition]}>
            <View style={[styles.groupChild1, styles.groupChildPosition]} />
            <Text
              style={[styles.descontracturante, styles.imageGroupSpaceBlock]}
            >
              Descontracturante
            </Text>
            <Image
              style={[styles.relax1Icon, styles.iconPosition]}
              resizeMode="cover"
              source={require("../assets/relax-1.png")}
            />
          </View>
        </View>
      </View>
      <Image
        style={[styles.postInstagramPromocionMasaj, styles.categoriasPosition]}
        resizeMode="cover"
        source={require("../assets/post-instagram-promocion-masajes-tono-tierra-1.png")}
      />
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container2.png")}
        cabeceraMobileMarginLeft="unset"
        cabeceraMobileLeft={0}
        cabeceraMobileMarginTop="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categoriasPosition: {
    position: "absolute",
    width: 386,
  },
  groupParentShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
  },
  groupChildPosition: {
    backgroundColor: Color.yellow700,
    top: 0,
    height: 120,
    position: "absolute",
    borderRadius: Border.br_11xl,
  },
  prenatalLayout: {
    width: 101,
    marginLeft: -51,
  },
  iconPosition: {
    height: 75,
    top: 12,
    position: "absolute",
  },
  imageGroupSpaceBlock: {
    marginLeft: -60,
    width: 120,
  },
  parentGroupPosition: {
    top: 0,
    height: 120,
    position: "absolute",
  },
  deportivoTypo: {
    top: 94,
    color: Color.grayWhite,
    fontWeight: "700",
    fontSize: FontSize.size_mini,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    left: "50%",
    position: "absolute",
  },
  categoras: {
    marginLeft: -177,
    top: 166,
    fontSize: FontSize.size_11xl,
    fontWeight: "600",
    color: Color.grayBlack,
    width: 354,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    width: 120,
    left: 0,
  },
  prenatal: {
    marginTop: 33,
    top: "50%",
    color: Color.grayWhite,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    left: "50%",
    position: "absolute",
    fontSize: FontSize.size_mini,
  },
  outputOnlinepngtools21Icon: {
    left: 17,
    width: 86,
  },
  rectangleParent: {
    width: 120,
    left: 266,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    height: 120,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: Color.yellow700,
    top: 0,
    height: 120,
    position: "absolute",
    borderRadius: Border.br_11xl,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    left: "50%",
  },
  outputOnlinepngtools31: {
    left: 21,
    width: 77,
  },
  rectangleGroup: {
    top: 0,
    height: 120,
    position: "absolute",
    left: "50%",
  },
  bamb: {
    top: 93,
    color: Color.grayWhite,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    left: "50%",
    position: "absolute",
    fontSize: FontSize.size_mini,
  },
  outputOnlinepngtools21: {
    left: 22,
    width: 76,
  },
  rectangleContainer: {
    width: 120,
    top: 0,
    height: 120,
    position: "absolute",
    left: 0,
  },
  groupParent: {
    top: 134,
    height: 120,
    left: 0,
    width: 386,
    position: "absolute",
  },
  deportivo: {
    width: 101,
    marginLeft: -51,
  },
  outputOnlinepngtools1Icon: {
    left: 26,
    width: 68,
  },
  groupView: {
    width: 120,
    left: 266,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    height: 120,
    position: "absolute",
  },
  image: {
    backgroundColor: Color.yellow700,
    top: 0,
    height: 120,
    position: "absolute",
    borderRadius: Border.br_11xl,
    left: "50%",
  },
  relajante: {
    marginLeft: -60,
    width: 120,
  },
  outputOnlinepngtools11: {
    left: 34,
    width: 52,
  },
  imageParent: {
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    top: 0,
    height: 120,
    position: "absolute",
    left: "50%",
  },
  groupChild1: {
    width: 120,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    left: 0,
  },
  descontracturante: {
    top: 96,
    fontSize: 12,
    color: Color.grayWhite,
    fontWeight: "700",
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    left: "50%",
    position: "absolute",
  },
  relax1Icon: {
    left: 10,
    width: 96,
    overflow: "hidden",
  },
  rectangleParent1: {
    width: 120,
    left: 0,
  },
  groupContainer: {
    left: 0,
    width: 386,
  },
  categorias: {
    top: 220,
    left: 14,
    height: 254,
    width: 386,
  },
  postInstagramPromocionMasaj: {
    marginLeft: -193,
    top: 497,
    borderRadius: 25,
    height: 384,
    width: 386,
    left: "50%",
  },
  inicio: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowRadius: 80,
    elevation: 80,
    backgroundColor: Color.grayWhite,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
  },
});

export default Inicio;
