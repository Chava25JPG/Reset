import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import CabeceraMobile from "../components/CabeceraMobile";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { useRoute, useNavigation } from "@react-navigation/native";
import DateTimePicker from '@react-native-community/datetimepicker'; // Asegúrate de tenerlo instalado

const Calendario = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { category, service, duration, gender, extras, terapeuta } = route.params || {};

  const [date, setDate] = React.useState(new Date());
  const [showDatePicker, setShowDatePicker] = React.useState(false);
  const [showTimePicker, setShowTimePicker] = React.useState(false);

  const handleContinue = () => {
    navigation.navigate("ConfirmacionDePedido", {
      category,
      service,
      duration,
      gender,
      extras,
      terapeuta,
      date: date.toString()
    });
  };

  return (
    <View style={styles.calendario}>
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container.png")}
      />
      <Text style={styles.momentoRelajante}>{service?.title || "Servicio"}</Text>
      <Text style={styles.seleccionarHorarioDisponible}>Seleccionar Horario Disponible:</Text>
      <Text style={styles.avisoNoPuedes}>Aviso: No puedes agendar 3 horas antes de la cita.</Text>

      <TouchableOpacity style={styles.dateBtn} onPress={() => setShowDatePicker(true)}>
        <Text style={styles.dateText}>Seleccionar Fecha: {date.toDateString()}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.dateBtn} onPress={() => setShowTimePicker(true)}>
        <Text style={styles.dateText}>Seleccionar Hora: {date.toLocaleTimeString()}</Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={date}
          mode="date"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              const d = new Date(selectedDate);
              setDate(new Date(d.getFullYear(), d.getMonth(), d.getDate(), date.getHours(), date.getMinutes()));
            }
          }}
        />
      )}

      {showTimePicker && (
        <DateTimePicker
          value={date}
          mode="time"
          onChange={(event, selectedDate) => {
            setShowTimePicker(false);
            if (selectedDate) {
              const d = new Date(selectedDate);
              setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate(), d.getHours(), d.getMinutes()));
            }
          }}
        />
      )}

      <TouchableOpacity style={styles.continuarWrapper} onPress={handleContinue}>
        <Text style={styles.continuar}>CONTINUAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  calendario: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: { width: 0, height: 100 },
    shadowRadius: 80,
    elevation: 80,
    shadowOpacity: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.grayWhite,
    width: "100%",
    height: 896,
    overflow: "hidden",
    flex: 1,
    alignItems: 'center',
    paddingTop: 200
  },
  momentoRelajante: {
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    marginBottom: 20
  },
  seleccionarHorarioDisponible: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    marginBottom: 10
  },
  avisoNoPuedes: {
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    marginBottom: 20
  },
  dateBtn: {
    backgroundColor: Color.yellow600,
    borderRadius: Border.br_3xs,
    padding: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center'
  },
  dateText: {
    color: '#fff',
    fontFamily: FontFamily.robotoBold
  },
  continuarWrapper: {
    marginTop: 40,
    backgroundColor: Color.colorGoldenrod,
    width: 212,
    height: 33,
    borderRadius: Border.br_3xs,
    justifyContent: 'center',
    alignItems: 'center'
  },
  continuar: {
    fontSize: FontSize.bodyRegular_size,
    color: Color.colorSnow,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
});

export default Calendario;
