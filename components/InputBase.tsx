// InputBase.js
import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  ImageSourcePropType,
  KeyboardTypeOptions,
} from "react-native";
import Spacer from "./Spacer";
import {
  FontSize,
  FontFamily,
  Color,
  Gap,
  Border,
  Padding,
} from "../GlobalStyles";

export type InputBaseType = {
  placeholderText?: string;
  prefix?: boolean;
  suffix?: boolean;
  inputSuffix?: ImageSourcePropType;
  showInputSuffixIcon?: boolean;

  /** Variant props */
  filled?: boolean;
  size?: string;
  state?: string;
  validation?: string;

  /** Style props */
  inputSuffixIconWidth?: number | string;
  inputSuffixIconHeight?: number | string;

  /** Input props */
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const InputBase = ({
  filled = true,
  size = "small",
  state = "disabled",
  validation = "invalid",
  placeholderText = "Correo o usuario",
  prefix = false,
  suffix = false,
  inputSuffix,
  showInputSuffixIcon,
  inputSuffixIconWidth,
  inputSuffixIconHeight,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType,
  autoCapitalize,
}: InputBaseType) => {
  const inputSuffixIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", inputSuffixIconWidth),
      ...getStyleValue("height", inputSuffixIconHeight),
    };
  }, [inputSuffixIconWidth, inputSuffixIconHeight]);

  return (
    <View style={[styles.inputBase, styles.inputBaseFlexBox]}>
      {prefix && (
        <Image
          style={styles.inputPrefixIcon}
          resizeMode="cover"
          source={require("../assets/inputprefix.png")}
        />
      )}
      <TextInput
        style={styles.textInput}
        placeholder={placeholderText}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
      {showInputSuffixIcon && (
        <Image
          style={[styles.inputPrefixIcon, inputSuffixIconStyle]}
          resizeMode="cover"
          source={inputSuffix}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputBaseFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  inputPrefixIcon: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  textInput: {
    flex: 1,
    fontSize: FontSize.bodyRegular_size,
    lineHeight: 24,
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.themeSecondary,
    textAlign: "left",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
  },
  inputBase: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default InputBase;
