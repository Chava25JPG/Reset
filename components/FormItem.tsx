// FormItem.js
import React, { useMemo } from "react";
import { StyleSheet, View, Image, TextInput, ImageSourcePropType } from "react-native";
import Texttext from "./Texttext";
import Spacer from "./Spacer";
import { Padding, Gap, Color, FontSize, FontFamily, Border } from "../GlobalStyles";

export type FormItemType = {
  inputPrefix?: ImageSourcePropType;
  placeholder?: string;
  inputSuffix?: ImageSourcePropType;

  /** Style props */
  formItemWidth?: number | string;
  formItemPosition?: string;
  formItemTop?: number | string;
  formItemLeft?: number | string;
  inputBaseWidth?: number | string;

  // Nuevas propiedades para manejar el estado
  value?: string;
  onChangeText?: (text: string) => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};

const FormItem = ({
  formItemWidth,
  formItemPosition,
  formItemTop,
  formItemLeft,
  inputBaseWidth,
  inputPrefix,
  placeholder,
  inputSuffix,
  value,
  onChangeText,
}: FormItemType) => {
  const formItemStyle = useMemo(() => {
    return {
      ...getStyleValue("width", formItemWidth),
      ...getStyleValue("position", formItemPosition),
      ...getStyleValue("top", formItemTop),
      ...getStyleValue("left", formItemLeft),
    };
  }, [formItemWidth, formItemPosition, formItemTop, formItemLeft]);

  const inputBaseStyle = useMemo(() => {
    return {
      ...getStyleValue("width", inputBaseWidth),
    };
  }, [inputBaseWidth]);

  return (
    <View style={[styles.formItem, formItemStyle]}>
      <View style={styles.label}>
        <Texttext
          fillContainer={false}
          hierarchy="primary"
          hovered={false}
          iconLeft={false}
          iconRight={false}
          list={false}
          text={placeholder}
          showSubtitle
          subtitleWidth="unset"
          subtitleHeight="unset"
          subtitleAlignSelf="unset"
          subtitlePaddingTop="unset"
          textFontSize={16}
          textFontWeight="unset"
        />
        <Texttext
          fillContainer={false}
          hierarchy="primary"
          hovered={false}
          iconLeft={false}
          iconRight={false}
          list={false}
          text="*"
          showSubtitle
          subtitleWidth="unset"
          subtitleHeight="unset"
          subtitleAlignSelf="unset"
          subtitlePaddingTop="unset"
          textFontSize={16}
          textFontWeight="unset"
        />
      </View>
      <View style={[styles.input, styles.inputFlexBox]}>
        <View style={[styles.inputBase, styles.inputFlexBox, inputBaseStyle]}>
          {inputPrefix && (
            <Image
              style={styles.inputPrefixIcon}
              resizeMode="cover"
              source={inputPrefix}
            />
          )}
          <TextInput
            style={styles.textInput}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
          />
          {inputSuffix && (
            <Image
              style={styles.inputSuffixIcon}
              resizeMode="cover"
              source={inputSuffix}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  label: {
    width: 183,
    alignItems: "flex-end",
    paddingBottom: Padding.p_5xs,
    gap: Gap.gap_2xs,
    flexDirection: "row",
    backgroundColor: Color.hitBox,
  },
  inputPrefixIcon: {
    width: 18,
    height: 18,
    overflow: "hidden",
  },
  inputSuffixIcon: {
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
    textAlign: 'left',
  },
  inputBase: {
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_9xs,
    alignItems: "center",
  },
  input: {
    width: '100%',
    borderRadius: Border.br_9xs,
    alignItems: "center",
  },
  formItem: {
    width: '48%',
    paddingBottom: Padding.p_base,
    backgroundColor: Color.hitBox,
  },
});

export default FormItem;
