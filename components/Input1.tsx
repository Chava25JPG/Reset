import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import InputBase from "./InputBase";
import { Border } from "../GlobalStyles";

export type Input1Type = {
  /** Variant props */
  addon?: boolean;
  addon2?: boolean;
  filled?: boolean;
  prefix?: boolean;
  size?: string;
  state?: string;
  suffix?: boolean;

  /** Style props */
  inputAlignSelf?: string;
  inputFlex?: number;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Input1 = ({
  addon = true,
  addon2 = true,
  filled = true,
  prefix = true,
  size = "small",
  state = "disabled",
  suffix = true,
  inputAlignSelf,
  inputFlex,
}: Input1Type) => {
  const inputStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", inputAlignSelf),
      ...getStyleValue("flex", inputFlex),
    };
  }, [inputAlignSelf, inputFlex]);

  const getInputContainerStyle = () => {
    if (
      !addon &&
      !addon2 &&
      !filled &&
      !prefix &&
      size === "medium" &&
      state === "normal" &&
      suffix
    )
      return styles.inputContainerVar;
  };

  return (
    <View style={[styles.root, getInputContainerStyle(), inputStyle]}>
      <InputBase
        filled={false}
        size="medium"
        state="normal"
        validation="normal"
        placeholderText="Correo o usuario"
        inputSuffix={require("../assets/inputsuffix.png")}
        prefix={false}
        suffix={false}
        showInputSuffixIcon={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerVar: {
    zIndex: 0,
  },
  root: {
    alignSelf: "stretch",
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    alignItems: "center",
    zIndex: 1,
  },
});

export default Input1;
