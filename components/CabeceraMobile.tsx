import React, { useMemo } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type CabeceraMobileType = {
  icon?: ImageSourcePropType;
  hora?: string;
  container?: ImageSourcePropType;

  /** Style props */
  cabeceraMobileMarginLeft?: number | string;
  cabeceraMobileLeft?: number | string;
  cabeceraMobileTop?: number | string;
  cabeceraMobileMarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CabeceraMobile = ({
  icon,
  hora,
  container,
  cabeceraMobileMarginLeft,
  cabeceraMobileLeft,
  cabeceraMobileTop,
  cabeceraMobileMarginTop,
}: CabeceraMobileType) => {
  const cabeceraMobileStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", cabeceraMobileMarginLeft),
      ...getStyleValue("left", cabeceraMobileLeft),
      ...getStyleValue("top", cabeceraMobileTop),
      ...getStyleValue("marginTop", cabeceraMobileMarginTop),
    };
  }, [
    cabeceraMobileMarginLeft,
    cabeceraMobileLeft,
    cabeceraMobileTop,
    cabeceraMobileMarginTop,
  ]);

  return (
    <View style={[styles.cabeceraMobile, cabeceraMobileStyle]}>
      <View style={styles.cabeceraMobileInner}>
        <View style={[styles.buscarWrapper, styles.containerFlexBox]}>
          <Text style={styles.buscar}>Buscar...</Text>
        </View>
      </View>
      <View style={[styles.topAppBar, styles.horaWifiFlexBox]}>
        <View style={styles.leadingIcon}>
          <View style={[styles.container, styles.containerFlexBox]}>
            <Image style={styles.icon} resizeMode="cover" source={icon} />
          </View>
        </View>
        <View style={styles.leadingIcon}>
          <View style={[styles.container, styles.containerFlexBox]}>
            <View style={[styles.stateLayer, styles.containerFlexBox]}>
              <Image
                style={styles.logo1Icon}
                resizeMode="cover"
                source={require("../assets/logo-12.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.leadingIcon}>
          <View style={[styles.container, styles.containerFlexBox]}>
            <View style={[styles.stateLayer, styles.containerFlexBox]}>
              <Image
                style={styles.combinedShapeIcon}
                resizeMode="cover"
                source={require("../assets/combinedshape.png")}
              />
            </View>
          </View>
        </View>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlexBox: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  horaWifiFlexBox: {
    paddingHorizontal: Padding.p_mini,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  buscar: {
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.colorDimgray_100,
    textAlign: "left",
    width: 65,
  },
  buscarWrapper: {
    alignSelf: "stretch",
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowRadius: 80,
    elevation: 80,
    shadowOpacity: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGainsboro_100,
    height: 32,
    paddingHorizontal: Padding.p_118xl,
    paddingVertical: Padding.p_7xs,
  },
  cabeceraMobileInner: {
    height: "36.31%",
    top: "63.69%",
    bottom: "0%",
    paddingHorizontal: Padding.p_18xl,
    paddingVertical: Padding.p_2xs,
    justifyContent: "center",
    alignItems: "center",
    left: "0%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.colorGainsboro_400,
    position: "absolute",
  },
  icon: {
    width: 36,
    height: 36,
  },
  container: {
    borderRadius: Border.br_81xl,
    overflow: "hidden",
  },
  leadingIcon: {
    width: 48,
    height: 48,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  logo1Icon: {
    width: 55,
    height: 55,
  },
  stateLayer: {
    padding: Padding.p_5xs,
  },
  combinedShapeIcon: {
    width: 30,
    height: 30,
  },
  topAppBar: {
    height: "40.76%",
    top: "0%",
    bottom: "36.31%",
    backgroundColor: Color.grayBlack,
    paddingVertical: Padding.p_5xs,
  },
  hora: {
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: FontFamily.robotoSlabSemiBold,
    color: Color.grayBlack,
    textAlign: "center",
    width: 45,
    transform: [
      {
        rotate: "-0.1deg",
      },
    ],
  },
  containerIcon: {
    width: 67,
    height: 12,
  },
  horaWifi: {
    height: "22.93%",
    top: "0%",
    bottom: "77.07%",
    paddingVertical: Padding.p_4xs,
    backgroundColor: Color.colorGainsboro_400,
    paddingHorizontal: Padding.p_mini,
  },
  cabeceraMobile: {
    marginLeft: -207,
    top: 0,
    left: "50%",
    width: 414,
    height: 157,
    position: "absolute",
  },
});

export default CabeceraMobile;
