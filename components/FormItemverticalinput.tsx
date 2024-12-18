import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Texttext from "./Texttext";
import Input1 from "./Input1";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

export type FormItemverticalinputType = {
  formText?: boolean;
  required?: boolean;
  tooltip?: boolean;

  /** Variant props */
  state?: string;
};

const FormItemverticalinput = ({
  state = "invalid",
  formText = false,
  required = false,
  tooltip = false,
}: FormItemverticalinputType) => {
  return (
    <View style={styles.formItem}>
      <View style={styles.label}>
        <Texttext
          fillContainer={false}
          hierarchy="primary"
          hovered={false}
          iconLeft={false}
          iconRight={false}
          list={false}
          text="Correo o usuario"
          showSubtitle
          subtitleWidth="unset"
          subtitleHeight="unset"
          subtitleAlignSelf="unset"
          subtitlePaddingTop="unset"
          textFontSize={16}
          textFontWeight="unset"
        />
        {tooltip && (
          <View style={[styles.lineHeight, styles.heightFlexBox]}>
            <View style={styles.helpIconWithTooltip}>
              <View style={[styles.zeroHeight, styles.heightFlexBox]}>
                <View style={[styles.zeroPixel, styles.zeroPixelTransform]}>
                  <View style={styles.tooltip}>
                    <View style={styles.body}>
                      <View style={styles.textparagraph}>
                        <Text style={styles.text}>Tooltip text</Text>
                        <View style={styles.minWidthChangeSizeHere}>
                          <View style={styles.ignore} />
                          <View style={styles.ignore} />
                        </View>
                      </View>
                    </View>
                    <View style={styles.arrowPositionScrubber}>
                      <Image
                        style={[
                          styles.arrowWrapperIcon,
                          styles.zeroPixelTransform,
                        ]}
                        resizeMode="cover"
                        source={require("../assets/arrowwrapper.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <Image
                style={styles.iconWrapper}
                resizeMode="cover"
                source={require("../assets/iconwrapper.png")}
              />
            </View>
          </View>
        )}
        {required && (
          <Texttext
            fillContainer={false}
            hierarchy="primary"
            hovered={false}
            iconLeft={false}
            iconRight={false}
            list={false}
            text="*"
            showSubtitle={false}
            subtitleWidth="unset"
            subtitleHeight="unset"
            subtitleAlignSelf="unset"
            subtitlePaddingTop="unset"
            textFontSize={16}
            textFontWeight="unset"
          />
        )}
      </View>
      <Input1
        addon={false}
        addon2={false}
        filled={false}
        prefix={false}
        size="medium"
        state="normal"
        suffix={false}
      />
      {formText && (
        <Texttext
          fillContainer={false}
          hierarchy="primary"
          hovered={false}
          iconLeft={false}
          iconRight={false}
          list={false}
          text="Form text lorem ipsum dolor sit amet"
          showSubtitle={false}
          subtitleWidth="unset"
          subtitleHeight="unset"
          subtitleAlignSelf="stretch"
          subtitlePaddingTop={4}
          textFontSize={14}
          textFontWeight="unset"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heightFlexBox: {
    display: "none",
    alignItems: "center",
  },
  zeroPixelTransform: {
    transform: [
      {
        rotate: "180deg",
      },
    ],
    width: 0,
  },
  text: {
    fontSize: FontSize.bodySmall_size,
    lineHeight: 21,
    fontFamily: FontFamily.bodySmall,
    color: Color.grayWhite,
    textAlign: "left",
  },
  ignore: {
    width: 0,
    height: 0,
  },
  minWidthChangeSizeHere: {
    overflow: "hidden",
    alignItems: "center",
    flexDirection: "row",
  },
  textparagraph: {
    overflow: "hidden",
    backgroundColor: Color.hitBox,
  },
  body: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.grayBlack,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    overflow: "hidden",
  },
  arrowWrapperIcon: {
    height: 7,
  },
  arrowPositionScrubber: {
    paddingHorizontal: Padding.p_sm,
    paddingVertical: 0,
    overflow: "hidden",
    alignItems: "center",
    alignSelf: "stretch",
  },
  tooltip: {
    position: "absolute",
    top: 36,
    opacity: 0.9,
    alignItems: "center",
  },
  zeroPixel: {
    height: 0,
  },
  zeroHeight: {
    justifyContent: "flex-end",
    height: 0,
    alignSelf: "stretch",
  },
  iconWrapper: {
    width: 14,
    height: 14,
    overflow: "hidden",
  },
  helpIconWithTooltip: {
    justifyContent: "center",
    alignItems: "center",
  },
  lineHeight: {
    height: 24,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_8xs,
    flexDirection: "row",
  },
  label: {
    alignItems: "flex-end",
    paddingBottom: Padding.p_5xs,
    gap: Gap.gap_2xs,
    zIndex: 2,
    flexDirection: "row",
    backgroundColor: Color.hitBox,
    alignSelf: "stretch",
  },
  formItem: {
    paddingBottom: Padding.p_base,
    zIndex: 1,
    backgroundColor: Color.hitBox,
    alignSelf: "stretch",
  },
});

export default FormItemverticalinput;
