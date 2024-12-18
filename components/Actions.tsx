import * as React from "react";
import { StyleSheet, View } from "react-native";
import Button1 from "./Button1";
import Buttonmediumprimarytruenor from "./Buttonmediumprimarytruenor";
import { Gap } from "../GlobalStyles";

export type ActionsType = {
  showSubtitle?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
};

const Actions = ({ showSubtitle, iconLeft, iconRight }: ActionsType) => {
  return (
    <View style={styles.actions}>
      <Button1
        iconOnly={false}
        outline={false}
        size="medium"
        state="normal"
        type="primary"
        icon={require("../assets/icon.png")}
        icon2={require("../assets/icon2.png")}
        iconLeft={iconLeft}
        iconRight={iconRight}
      />
      <Buttonmediumprimarytruenor />
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    alignSelf: "stretch",
    gap: Gap.gap_lg,
  },
});

export default Actions;
