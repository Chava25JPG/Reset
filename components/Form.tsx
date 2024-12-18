import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import FormItemverticalinput from "./FormItemverticalinput";
import Texttext from "./Texttext";
import Password from "./Password";
import {
  FontSize,
  FontFamily,
  Color,
  Border,
  Padding,
  Gap,
} from "../GlobalStyles";

export type FormType = {
  /** Variant props */
  button?: boolean;
  items?: 2;
  layout?: string;
  size?: string;
};

const Form = ({
  button = true,
  items = 10,
  layout = "inline",
  size = "small",
}: FormType) => {
  return (
    <View style={styles.form}>
      <FormItemverticalinput
        state="normal"
        formText={false}
        required={false}
        tooltip={false}
      />
      <View style={styles.formItem}>
        <View style={styles.label}>
          <Texttext
            fillContainer={false}
            hierarchy="primary"
            hovered={false}
            iconLeft={false}
            iconRight={false}
            list={false}
            text="Contraseña"
            showSubtitle
            subtitleWidth="unset"
            subtitleHeight="unset"
            subtitleAlignSelf="unset"
            subtitlePaddingTop="unset"
            textFontSize={16}
            textFontWeight="unset"
          />
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
        </View>
        <Password filled={false} size="medium" visible={false} />
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
      </View>
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
    zIndex: 0,
    backgroundColor: Color.hitBox,
    alignSelf: "stretch",
  },
  form: {
    alignSelf: "stretch",
  },
});

export default Form;
