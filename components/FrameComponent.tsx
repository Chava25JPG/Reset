import * as React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const FrameComponent = () => {
  return (
    <View style={styles.serviciosInner}>
      <View style={styles.component4Wrapper}>
        <ScrollView style={styles.component4}>
          <View
            style={[styles.component4Child, styles.component4ChildShadowBox]}
          />
          <View
            style={[styles.component4Item, styles.component4ChildShadowBox]}
          />
          <Image
            style={[styles.untitledDesign11, styles.untitledLayout]}
            resizeMode="cover"
            source={require("../assets/untitled-design-1-11.png")}
          />
          <Text
            style={[styles.masajeDescontracturante, styles.masajeTypo]}
          >{`Masaje
descontracturante`}</Text>
          <View style={styles.rectangleViewPosition} />
          <Text style={[styles.text, styles.textTypo]}>$55</Text>
          <View style={[styles.rectangleView, styles.rectangleViewPosition]} />
          <Image
            style={[styles.untitledDesign41, styles.untitledLayout]}
            resizeMode="cover"
            source={require("../assets/untitled-design-4-11.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>$55</Text>
          <View
            style={[styles.component4Child1, styles.component4ChildShadowBox]}
          />
          <Image
            style={[styles.untitledDesign51, styles.untitledLayout]}
            resizeMode="cover"
            source={require("../assets/untitled-design-5-11.png")}
          />
          <Text style={[styles.masajeLomiLomi, styles.masajeTypo]}>{`Masaje 
lomi lomi`}</Text>
          <Text style={[styles.masajeRelajante, styles.masajeTypo]}>{`Masaje
 relajante`}</Text>
          <Text style={[styles.text2, styles.textTypo]}>$50</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  component4ChildShadowBox: {
    backgroundColor: Color.colorGainsboro_300,
    bottom: "0%",
    top: "0%",
    width: "28.92%",
    height: "100%",
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    elevation: 80,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowColor: "rgba(0, 0, 0, 0.07)",
    position: "absolute",
  },
  untitledLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "47.5%",
    height: "52.5%",
    top: "0%",
    position: "absolute",
  },
  masajeTypo: {
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
  rectangleViewPosition: {
    left: "33.69%",
    right: "37.39%",
    backgroundColor: Color.colorGainsboro_300,
    borderRadius: Border.br_3xs,
    bottom: "0%",
    top: "0%",
    width: "28.92%",
    height: "100%",
    shadowOpacity: 1,
    elevation: 80,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowColor: "rgba(0, 0, 0, 0.07)",
    position: "absolute",
  },
  component4Child: {
    left: "0%",
    right: "71.08%",
    backgroundColor: Color.colorGainsboro_300,
    bottom: "0%",
    top: "0%",
    width: "28.92%",
    height: "100%",
  },
  component4Item: {
    left: "0%",
    right: "71.08%",
    backgroundColor: Color.colorGainsboro_300,
    bottom: "0%",
    top: "0%",
    width: "28.92%",
    height: "100%",
  },
  untitledDesign11: {
    right: "71.13%",
    left: "-0.03%",
    borderRadius: Border.br_mini,
    width: "28.89%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "47.5%",
    height: "52.5%",
  },
  masajeDescontracturante: {
    left: "0.58%",
    top: "56.19%",
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  text: {
    left: "10.5%",
  },
  rectangleView: {
    display: "none",
  },
  untitledDesign41: {
    right: "37.44%",
    left: "33.67%",
    width: "28.89%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "47.5%",
    height: "52.5%",
    borderRadius: Border.br_3xs,
  },
  text1: {
    left: "44.2%",
  },
  component4Child1: {
    right: "3.69%",
    left: "67.39%",
    backgroundColor: Color.colorGainsboro_300,
    bottom: "0%",
    top: "0%",
    width: "28.92%",
    height: "100%",
  },
  untitledDesign51: {
    width: "28.82%",
    right: "4.05%",
    left: "67.14%",
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_mini,
    borderBottomRightRadius: Border.br_mini,
    borderBottomLeftRadius: Border.br_mini,
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "47.5%",
    height: "52.5%",
  },
  masajeLomiLomi: {
    width: "21.51%",
    left: "37.29%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    top: "56.19%",
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  masajeRelajante: {
    top: "56.75%",
    left: "74.95%",
  },
  text2: {
    left: "78.59%",
  },
  component4: {
    width: "100%",
    height: 160,
    maxHeight: 160,
  },
  component4Wrapper: {
    top: 10,
    left: 10,
    padding: Padding.p_3xs,
    position: "absolute",
  },
  serviciosInner: {
    top: 417,
    left: 0,
    width: 418,
    height: 180,
    shadowOpacity: 1,
    elevation: 80,
    shadowRadius: 80,
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowColor: "rgba(0, 0, 0, 0.07)",
    position: "absolute",
  },
});

export default FrameComponent;
