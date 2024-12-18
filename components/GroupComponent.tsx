import React, { useMemo } from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

export type GroupComponentType = {
  pAGARAHORA?: string;

  /** Style props */
  groupViewTop?: number | string;
  pAGARAHORAMarginLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({
  pAGARAHORA,
  groupViewTop,
  pAGARAHORAMarginLeft,
}: GroupComponentType) => {
  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop),
    };
  }, [groupViewTop]);

  const pAGARAHORAStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", pAGARAHORAMarginLeft),
    };
  }, [pAGARAHORAMarginLeft]);

  return (
    <View
      style={[
        styles.pagosSegurosPorParent,
        styles.pagarAhoraWrapperPosition,
        groupViewStyle,
      ]}
    >
      <Text style={[styles.pagosSegurosPor, styles.pagarAhoraPosition]}>
        PAGOS SEGUROS POR
      </Text>
      <Text style={[styles.devolucionesYCambios, styles.pagarAhoraPosition]}>
        Devoluciones y cambios gratuitos
      </Text>
      <Text style={[styles.legales, styles.legalesPosition]}>Legales</Text>
      <Text style={[styles.contacto, styles.legalesPosition]}>Contacto</Text>
      <Image
        style={styles.stripeLogo1Icon}
        resizeMode="cover"
        source={require("../assets/stripelogo-1.png")}
      />
      <View
        style={[styles.pagarAhoraWrapper, styles.pagarAhoraWrapperPosition]}
      >
        <Text
          style={[
            styles.pagarAhora,
            styles.pagarAhoraPosition,
            pAGARAHORAStyle,
          ]}
        >
          {pAGARAHORA}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  pagarAhoraWrapperPosition: {
    width: 351,
    left: "50%",
    position: "absolute",
  },
  pagarAhoraPosition: {
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  legalesPosition: {
    top: 138,
    textAlign: "center",
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    position: "absolute",
  },
  pagosSegurosPor: {
    top: 106,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    marginLeft: -90.5,
    textAlign: "center",
  },
  devolucionesYCambios: {
    top: 72,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    marginLeft: -90.5,
    textAlign: "center",
  },
  legales: {
    marginLeft: -106.5,
  },
  contacto: {
    marginLeft: 54.5,
  },
  stripeLogo1Icon: {
    top: 99,
    left: 215,
    width: 50,
    height: 28,
    position: "absolute",
  },
  pagarAhora: {
    marginLeft: -55.5,
    top: 13,
    fontSize: FontSize.bodyRegular_size,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorSnow,
  },
  pagarAhoraWrapper: {
    marginLeft: -175.5,
    top: 0,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod,
    height: 45,
  },
  pagosSegurosPorParent: {
    marginLeft: -175,
    top: 696,
    height: 152,
  },
});

export default GroupComponent;
