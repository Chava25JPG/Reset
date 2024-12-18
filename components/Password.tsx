import * as React from "react";
import { StyleSheet, View } from "react-native";
import Input1 from "./Input1";
import { Border } from "../GlobalStyles";

export type PasswordType = {
  /** Variant props */
  filled?: boolean;
  size?: string;
  visible?: boolean;
};

const Password = ({
  filled = false,
  size = "medium",
  visible = false,
}: PasswordType) => {
  return (
    <View style={styles.password}>
      <Input1
        addon={false}
        addon2={false}
        filled={false}
        prefix={false}
        size="medium"
        state="normal"
        suffix
        inputAlignSelf="unset"
        inputFlex={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  password: {
    alignSelf: "stretch",
    borderRadius: Border.br_9xs,
    flexDirection: "row",
    zIndex: 1,
  },
});

export default Password;
