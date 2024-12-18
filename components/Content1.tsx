// Content1.js
import * as React from "react";
import { StyleSheet, View } from "react-native";
import Texttitle from "./Texttitle";
import FormItem from "./FormItem";
import Actions from "./Actions";
import Texttext from "./Texttext";
import { Gap } from "../GlobalStyles";

const Content1 = ({
  nombre,
  setNombre,
  apellido,
  setApellido,
  usuario,
  setUsuario,
  correo,
  setCorreo,
  contraseña,
  setContraseña,
  telefono,
  setTelefono,
  whatsapp,
  setWhatsapp,
}) => {
  return (
    <View style={styles.content}>
      <View style={styles.rowFlexBox}>
        <Texttitle
          badge={false}
          fillContainer={false}
          iconLeft={false}
          iconRight={false}
          subtitle
          title="REGISTRO"
          textColor="#212529"
          showSubtitle={false}
        />
      </View>
      <View style={styles.content1}>
        <View style={styles.form}>
          <View style={styles.row}>
            <FormItem
              inputPrefix={require("../assets/inputprefix.png")}
              placeholder="Nombre"
              inputSuffix={require("../assets/inputsuffix2.png")}
              value={nombre}
              onChangeText={setNombre}
            />
            <FormItem
              inputPrefix={require("../assets/inputprefix.png")}
              placeholder="Apellido"
              inputSuffix={require("../assets/inputsuffix2.png")}
              value={apellido}
              onChangeText={setApellido}
            />
          </View>
          <View style={styles.row}>
            <FormItem
              inputPrefix={require("../assets/inputprefix.png")}
              placeholder="Usuario"
              inputSuffix={require("../assets/inputsuffix2.png")}
              value={usuario}
              onChangeText={setUsuario}
            />
            <FormItem
              inputPrefix={require("../assets/inputprefix.png")}
              placeholder="Correo"
              inputSuffix={require("../assets/inputsuffix2.png")}
              value={correo}
              onChangeText={setCorreo}
            />
          </View>
          <View style={styles.row}>
            <FormItem
              inputPrefix={require("../assets/inputprefix.png")}
              placeholder="Contraseña"
              inputSuffix={require("../assets/inputsuffix2.png")}
              value={contraseña}
              onChangeText={setContraseña}
              // Añade secureTextEntry si es necesario
            />
            <FormItem
              inputPrefix={require("../assets/inputprefix.png")}
              placeholder="Teléfono"
              inputSuffix={require("../assets/inputsuffix2.png")}
              value={telefono}
              onChangeText={setTelefono}
            />
          </View>
          <FormItem
            inputPrefix={require("../assets/inputprefix.png")}
            placeholder="WhatsApp"
            inputSuffix={require("../assets/inputsuffix2.png")}
            value={whatsapp}
            onChangeText={setWhatsapp}
            formItemWidth="100%"
          />
        </View>
        {/* Puedes añadir el componente Actions si es necesario */}
      </View>
      <View style={[styles.row, styles.rowFlexBox]}>
        <Texttext
          fillContainer={false}
          hierarchy="muted"
          hovered={false}
          iconLeft={false}
          iconRight={false}
          list={false}
          text="¿Ya tienes una cuenta? "
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
          text="Entrar"
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
  content: {
    width: '100%',
    alignItems: 'center',
  },
  rowFlexBox: {
    alignItems: "center",
    alignSelf: "stretch",
  },
  form: {
    alignSelf: "stretch",
  },
  content1: {
    gap: Gap.gap_xs,
    alignSelf: "stretch",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: 'wrap',
  },
});

export default Content1;
