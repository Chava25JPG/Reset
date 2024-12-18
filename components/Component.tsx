import * as React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Component = () => {
  return (
    <ScrollView style={styles.component3}>
      <View style={[styles.component3Child, styles.component3ChildShadowBox]} />
      <View style={[styles.component3Item, styles.component3ChildShadowBox]} />
      <Image
        style={[styles.untitledDesign11, styles.untitledLayout]}
        resizeMode="cover"
        source={require("../assets/untitled-design-1-1.png")}
      />
      <Text style={[styles.masajeConPindas, styles.masajeTypo]}>
        Masaje con pindas
      </Text>
      <View style={styles.rectangleViewPosition} />
      <Text style={[styles.text, styles.textTypo]}>$55</Text>
      <View style={styles.rectangleViewPosition} />
      <Image
        style={[styles.untitledDesign41, styles.untitledLayout]}
        resizeMode="cover"
        source={require("../assets/untitled-design-4-1.png")}
      />
      <Text style={[styles.text1, styles.textTypo]}>$60</Text>
      <View
        style={[styles.component3Child1, styles.component3Child1Position]}
      />
      <Image
        style={[styles.untitledDesign51, styles.component3Child1Position]}
        resizeMode="cover"
        source={require("../assets/untitled-design-5-1.png")}
      />
      <Text style={[styles.masajeGeotermal, styles.masajeTypo]}>
        Masaje geotermal
      </Text>
      <Text style={styles.masajePodal}>{`Masaje
 podal`}</Text>
      <Text style={[styles.text2, styles.textTypo]}>$45</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  component3ChildShadowBox: {
    backgroundColor: Color.colorGainsboro_300,
    shadowOpacity: 1,
    elevation: 80,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowColor: "rgba(0, 0, 0, 0.07)",
    bottom: "0%",
    height: "100%",
    borderRadius: Border.br_3xs,
  },
  untitledLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "47.31%",
    height: "52.69%",
  },
  masajeTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    top: "56.19%",
    width: "21.51%",
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.bodyRegular_size,
    top: "79.25%",
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  component3Child1Position: {
    left: "67.39%",
    right: "3.69%",
    top: "0%",
    width: "28.92%",
    position: "absolute",
  },
  component3Child: {
    left: "0%",
    right: "71.08%",
    top: "0%",
    width: "28.92%",
    position: "absolute",
    shadowOpacity: 1,
    elevation: 80,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowColor: "rgba(0, 0, 0, 0.07)",
    bottom: "0%",
    height: "100%",
  },
  component3Item: {
    left: "0%",
    right: "71.08%",
    top: "0%",
    width: "28.92%",
    position: "absolute",
    shadowOpacity: 1,
    elevation: 80,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowColor: "rgba(0, 0, 0, 0.07)",
    bottom: "0%",
    height: "100%",
  },
  untitledDesign11: {
    width: "28.44%",
    right: "70.83%",
    left: "0.73%",
    borderRadius: Border.br_3xs,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "47.31%",
    height: "52.69%",
    top: "0%",
    position: "absolute",
  },
  masajeConPindas: {
    left: "3.59%",
  },
  rectangleViewPosition: {
    left: "33.69%",
    right: "37.39%",
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 80,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowColor: "rgba(0, 0, 0, 0.07)",
    bottom: "0%",
    top: "0%",
    width: "28.92%",
    height: "100%",
    position: "absolute",
  },
  text: {
    left: "10.5%",
  },
  untitledDesign41: {
    width: "30.1%",
    right: "37.41%",
    left: "32.49%",
    borderRadius: Border.br_3xs,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "47.31%",
    height: "52.69%",
    top: "0%",
    position: "absolute",
  },
  text1: {
    left: "44.2%",
  },
  component3Child1: {
    backgroundColor: Color.colorGainsboro_300,
    shadowOpacity: 1,
    elevation: 80,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowColor: "rgba(0, 0, 0, 0.07)",
    bottom: "0%",
    height: "100%",
    borderRadius: Border.br_3xs,
    left: "67.39%",
    right: "3.69%",
  },
  untitledDesign51: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "47.31%",
    height: "52.69%",
  },
  masajeGeotermal: {
    left: "37.29%",
  },
  masajePodal: {
    top: "56.75%",
    left: "76.46%",
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  text2: {
    left: "78.59%",
  },
  component3: {
    width: "100%",
    height: 160,
    maxHeight: 160,
  },
});

export default Component;
