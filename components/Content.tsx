import * as React from "react";
import { StyleSheet, View } from "react-native";
import Texttitle from "./Texttitle";
import Form from "./Form";
import Componentscheckbox from "./Componentscheckbox";
import Texttext from "./Texttext";
import Actions from "./Actions";
import { Padding, Gap } from "../GlobalStyles";

const Content = () => {
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Texttitle
          badge={false}
          fillContainer={false}
          iconLeft={false}
          iconRight={false}
          subtitle
          title="ENTRAR"
          showSubtitle
        />
      </View>
      <View style={styles.content1}>
        <Form button={false} items={2} layout="vertical" size="medium" />
        <View style={[styles.row, styles.rowFlexBox]}>
          <Componentscheckbox
            checked={false}
            disabled={false}
            focused={false}
            indeterminate={false}
            validation="normal"
          />
          <Texttext
            fillContainer={false}
            hierarchy="link"
            hovered={false}
            iconLeft={false}
            iconRight={false}
            list={false}
            text="Olvide la contraseña"
            showSubtitle
            subtitleWidth="unset"
            subtitleHeight="unset"
            subtitleAlignSelf="unset"
            subtitlePaddingTop="unset"
            textFontSize={16}
            textFontWeight="unset"
          />
        </View>
        <Actions showSubtitle iconLeft={false} iconRight={false} />
      </View>
      <View style={[styles.row1, styles.rowFlexBox]}>
        <Texttext
          fillContainer={false}
          hierarchy="muted"
          hovered={false}
          iconLeft={false}
          iconRight={false}
          list={false}
          text="No tengo una cuenta "
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
          hierarchy="link"
          hovered={false}
          iconLeft={false}
          iconRight={false}
          list={false}
          text="Registrarse"
          showSubtitle
          subtitleWidth="unset"
          subtitleHeight="unset"
          subtitleAlignSelf="unset"
          subtitlePaddingTop="unset"
          textFontSize={16}
          textFontWeight="unset"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowFlexBox: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
  },
  header: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  row: {
    justifyContent: "space-between",
    paddingBottom: Padding.p_5xs,
  },
  content1: {
    gap: Gap.gap_xs,
    alignSelf: "stretch",
  },
  row1: {
    justifyContent: "center",
    gap: Gap.gap_2xs,
  },
  content: {
    position: "absolute",
    marginLeft: -176,
    top: 282,
    left: "50%",
    width: 351,
    gap: Gap.gap_2xl,
  },
});

export default Content;
