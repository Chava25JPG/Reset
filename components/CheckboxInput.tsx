import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

export type CheckboxInputType = {
  /** Variant props */
  checked?: boolean;
  disabled?: boolean;
  focused?: boolean;
  indeterminate?: boolean;
  validation?: string;
};

const CheckboxInput = ({
  checked = true,
  disabled = true,
  focused = false,
  indeterminate = false,
  validation = "normal",
}: CheckboxInputType) => {
  return (
    <View style={styles.checkboxInput}>
      <View style={styles.bg} />
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    width: 16,
    height: 16,
  },
  checkboxInput: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CheckboxInput;
