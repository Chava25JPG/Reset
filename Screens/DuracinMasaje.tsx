import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CabeceraMobile from "../components/CabeceraMobile";
import { Color, FontFamily, FontSize, Gap, Padding, Border } from "../GlobalStyles";
import { useRoute, useNavigation } from '@react-navigation/native';

const DuracinMasaje = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { category, service } = route.params || {};

  const [duration, setDuration] = React.useState("60");
  const [gender, setGender] = React.useState("Masculino");
  const [extras, setExtras] = React.useState({
    descontractural: false,
    craneo: false,
    pies: false,
  });

  const handleExtraToggle = (extra) => {
    setExtras(prev => ({ ...prev, [extra]: !prev[extra] }));
  };

  const handleContinue = () => {
    navigation.navigate("Terapeutas", {
      category,
      service,
      duration,
      gender,
      extras
    });
  };

  return (
    <View style={styles.duracinMasaje}>
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container.png")}
      />
      <Text style={[styles.duracin, styles.textCenter]}>DURACIÓN</Text>

      {/* Opciones de duración */}
      <View style={styles.durationContainer}>
        <TouchableOpacity onPress={() => setDuration("60")}>
          <Text style={[styles.minOption, duration==="60" && styles.selectedOption]}>{`60 MIN\n$ MXN`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDuration("90")}>
          <Text style={[styles.minOption, duration==="90" && styles.selectedOption]}>{`90 MIN\n$ MXN`}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDuration("120")}>
          <Text style={[styles.minOption, duration==="120" && styles.selectedOption]}>{`120 MIN\n$ MXN`}</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.agregar15}>AGREGAR + 15 MIN EXTRAS DE:</Text>
      {/* Extras */}
      <View style={styles.extrasContainer}>
        <TouchableOpacity style={styles.extraRow} onPress={() => handleExtraToggle('descontractural')}>
          <View style={[styles.checkbox, extras.descontractural && styles.checked]} />
          <Text style={styles.extraText}>Zona descontractural</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.extraRow} onPress={() => handleExtraToggle('craneo')}>
          <View style={[styles.checkbox, extras.craneo && styles.checked]} />
          <Text style={styles.extraText}>Craneo facial</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.extraRow} onPress={() => handleExtraToggle('pies')}>
          <View style={[styles.checkbox, extras.pies && styles.checked]} />
          <Text style={styles.extraText}>Masaje de pies</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.fechaYHora}>FECHA Y HORA</Text>
      <Text style={styles.gneroDelTerapeuta}>GÉNERO DEL TERAPEUTA</Text>

      {/* Selección de género */}
      <View style={styles.genderContainer}>
        <TouchableOpacity style={[styles.genderOption, gender==="Masculino" && styles.genderSelected]} onPress={() => setGender("Masculino")}>
          <Text style={styles.genderText}>Masculino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.genderOption, gender==="Femenino" && styles.genderSelected]} onPress={() => setGender("Femenino")}>
          <Text style={styles.genderText}>Femenino</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.genderOption, gender==="Ambos" && styles.genderSelected]} onPress={() => setGender("Ambos")}>
          <Text style={styles.genderText}>Ambos</Text>
        </TouchableOpacity>
      </View>

      {/* Botón continuar */}
      <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
        <Text style={styles.continuar}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  duracinMasaje: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: { width: 0, height: 100 },
    shadowRadius: 80,
    elevation: 80,
    borderRadius: 0,
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.grayWhite,
    shadowOpacity: 1,
    alignItems: 'center',
    paddingTop: 150
  },
  textCenter: {
    textAlign: 'center'
  },
  duracin: {
    color: Color.colorGainsboro_200,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    marginBottom: 20
  },
  durationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 30
  },
  minOption: {
    color: Color.yellow300,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0'
  },
  selectedOption: {
    backgroundColor: Color.yellow600,
    color: '#fff',
  },
  agregar15: {
    marginTop: 10,
    color: Color.grayWhite,
    fontSize: FontSize.bodyRegular_size,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    marginBottom: 10
  },
  extrasContainer: {
    width: '80%',
    marginBottom: 30,
  },
  extraRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  checkbox: {
    width: 16,
    height: 16,
    borderRadius: Border.br_9xs,
    borderColor: Color.colorGray_300,
    borderWidth: 1,
    backgroundColor: Color.grayWhite,
    marginRight: 10
  },
  checked: {
    backgroundColor: Color.yellow600,
    borderColor: Color.yellow600
  },
  extraText: {
    fontSize: FontSize.size_xs,
    color: Color.yellow600,
    fontFamily: FontFamily.robotoBold,
  },
  fechaYHora: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    marginBottom: 20
  },
  gneroDelTerapeuta: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
    textAlign: "center",
    marginBottom: 20
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 30
  },
  genderOption: {
    backgroundColor: Color.yellow600,
    width: 100,
    height: 37,
    borderRadius: Border.br_xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  genderText: {
    color: Color.grayWhite,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700"
  },
  genderSelected: {
    backgroundColor: Color.yellow300,
  },
  continueBtn: {
    backgroundColor: Color.colorGoldenrod,
    width: 200,
    height: 40,
    borderRadius: Border.br_3xs,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  continuar: {
    color: Color.colorSnow,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700"
  }
});

export default DuracinMasaje;
