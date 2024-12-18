import * as React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { Color, Border, FontFamily, FontSize, Padding } from "../GlobalStyles";

const FrameComponent1 = () => {
  return (
    <View style={styles.serviciosInner}>
      <View style={styles.component4Wrapper}>
        <ScrollView style={styles.component4}>
          <View
            style={[styles.component4Child, styles.rectangleViewShadowBox]}
          />
          <Image
            style={[styles.untitledDesign11, styles.untitledLayout]}
            resizeMode="cover"
            source={require("../assets/untitled-design-1-12.png")}
          />
          <Text style={[styles.momentRelax, styles.momentRelaxTypo]}>{`Moment 
relax`}</Text>
          <View style={styles.component4Position} />
          <Text style={[styles.text, styles.textTypo]}>$110</Text>
          <View style={[styles.component4Inner, styles.component4Position]} />
          <Image
            style={[styles.untitledDesign41, styles.untitledLayout]}
            resizeMode="cover"
            source={require("../assets/untitled-design-4-12.png")}
          />
          <Text style={[styles.text1, styles.textTypo]}>$35</Text>
          <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
          <Image
            style={[styles.untitledDesign51, styles.untitledLayout]}
            resizeMode="cover"
            source={require("../assets/untitled-design-5-12.png")}
          />
          <Text
            style={[styles.masajeCraneoFacial, styles.momentRelaxTypo]}
          >{`Masaje 
craneo facial`}</Text>
          <Text style={styles.masajeCuatroManos}>{`Masaje
 cuatro manos`}</Text>
          <Text style={[styles.text2, styles.textTypo]}>$55</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewShadowBox: {
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
  untitledLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "47.5%",
    height: "52.5%",
    borderRadius: Border.br_3xs,
    top: "0%",
    position: "absolute",
  },
  momentRelaxTypo: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
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
  component4Position: {
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
    right: "71.08%",
    left: "0%",
  },
  untitledDesign11: {
    right: "71.13%",
    left: "-0.03%",
    width: "28.89%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "47.5%",
    height: "52.5%",
  },
  momentRelax: {
    marginTop: 9.9,
    top: "50%",
    left: "3.59%",
  },
  text: {
    left: "9.5%",
  },
  component4Inner: {
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
  },
  text1: {
    left: "44.2%",
  },
  rectangleView: {
    right: "3.69%",
    left: "67.39%",
  },
  untitledDesign51: {
    width: "28.82%",
    right: "3.84%",
    left: "67.34%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    bottom: "47.5%",
    height: "52.5%",
  },
  masajeCraneoFacial: {
    top: "56.19%",
    left: "37.29%",
  },
  masajeCuatroManos: {
    top: "56.75%",
    left: "71.18%",
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
  component4: {
    width: "100%",
    height: 160,
    maxHeight: 160,
  },
  component4Wrapper: {
    top: 10,
    left: 10,
    padding: Padding.p_3xs,
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
  serviciosInner: {
    top: 621,
    left: -5,
    width: 418,
    height: 180,
    position: "absolute",
  },
});

export default FrameComponent1;
