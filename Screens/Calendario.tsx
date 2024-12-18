import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Date1 from "../components/Date1";
import TimePicker from "../components/TimePicker";
import CabeceraMobile from "../components/CabeceraMobile";
import {
  FontSize,
  Color,
  FontFamily,
  Gap,
  Padding,
  Border,
} from "../GlobalStyles";

const Calendario = () => {
  return (
    <View style={styles.calendario}>
      <Image
        style={styles.openmojireturnBackButtonIcon}
        resizeMode="cover"
        source={require("../assets/openmojireturnbackbutton.png")}
      />
      <Text style={styles.momentoRelajante}>{`Momento
Relajante`}</Text>
      <Text
        style={[styles.seleccionarHorarioDisponible, styles.avisoNoPuedesTypo]}
      >
        Seleccionar Horario Disponible:
      </Text>
      <Text style={[styles.avisoNoPuedes, styles.avisoNoPuedesTypo]}>
        Aviso: No puedes agendar 3 horas antes de la cita.
      </Text>
      <View style={styles.continuarWrapper}>
        <Text style={styles.continuar}>CONTINUAR</Text>
      </View>
      <View style={styles.legalesParent}>
        <Text style={[styles.legales, styles.legalesTypo]}>Legales</Text>
        <Text style={[styles.contacto, styles.legalesTypo]}>Contacto</Text>
      </View>
      <Text style={[styles.devolucionesYCambios, styles.legalesTypo]}>
        Devoluciones y cambios gratuitos
      </Text>
      <View style={[styles.monthYearLine, styles.lineFlexBox]}>
        <Image
          style={styles.chevronLeftIcon}
          resizeMode="cover"
          source={require("../assets/chevronleft.png")}
        />
        <Text style={styles.mes}>Mes</Text>
        <Image
          style={styles.chevronLeftIcon}
          resizeMode="cover"
          source={require("../assets/chevronright1.png")}
        />
      </View>
      <View style={styles.calendarioChild} />
      <View style={[styles.dayDate, styles.dayDateLayout]}>
        <View style={styles.dayLine}>
          <View style={styles.day}>
            <Text style={styles.day1}>Lun</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.day1}>Mar</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.day1}>mier</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.day1}>jue</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.day1}>vie</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.day1}>sab</Text>
          </View>
          <View style={styles.day}>
            <Text style={styles.day1}>dom</Text>
          </View>
        </View>
        <View style={styles.dateLine}>
          <View style={[styles.dateNumberLine04, styles.lineFlexBox]}>
            <Date1 property1="default" prop="1" />
            <Date1 property1="default" prop="2" />
            <Date1 property1="default" prop="3" />
            <Date1 property1="default" prop="4" />
            <Date1 property1="default" prop="5" />
            <Date1 property1="default" prop="6" />
            <Date1 property1="default" prop="7" />
          </View>
          <View style={[styles.dateNumberLine04, styles.lineFlexBox]}>
            <Date1 property1="default" prop="8" />
            <Date1 property1="default" prop="9" />
            <Date1 property1="default" prop="10" />
            <Date1 property1="default" prop="11" />
            <Date1 property1="default" prop="12" />
            <Date1 property1="default" prop="13" />
            <Date1 property1="default" prop="14" />
          </View>
          <View style={[styles.dateNumberLine04, styles.lineFlexBox]}>
            <Date1 property1="default" prop="15" />
            <Date1 property1="default" prop="16" />
            <Date1 property1="default" prop="17" />
            <Date1 property1="default" prop="18" />
            <Date1 property1="default" prop="19" />
            <Date1 property1="default" prop="20" />
            <Date1 property1="default" prop="21" />
          </View>
          <View style={[styles.dateNumberLine04, styles.lineFlexBox]}>
            <Date1 property1="default" prop="22" />
            <Date1 property1="default" prop="23" />
            <Date1 property1="default" prop="24" />
            <Date1 property1="default" prop="25" />
            <Date1 property1="clicked" prop="26" />
            <Date1 property1="default" prop="27" />
            <Date1 property1="default" prop="28" />
          </View>
          <View style={[styles.dateNumberLine04, styles.lineFlexBox]}>
            <Date1 property1="default" prop="29" />
            <Date1 property1="default" prop="30" />
            <Date1 property1="default" prop="31" />
            <Date1 property1="default" />
            <Date1 property1="default" />
            <Date1 property1="default" />
            <Date1 property1="default" />
          </View>
        </View>
      </View>
      <TimePicker
        filled={false}
        ranged={false}
        size="medium"
        state="normal"
        validation="normal"
      />
      <CabeceraMobile
        icon={require("../assets/icon4.png")}
        hora="09:41"
        container={require("../assets/container.png")}
        cabeceraMobileMarginLeft={-207}
        cabeceraMobileLeft="50%"
        cabeceraMobileMarginTop="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avisoNoPuedesTypo: {
    height: 64,
    width: 129,
    fontSize: FontSize.size_smi,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  legalesTypo: {
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    left: "50%",
    textAlign: "center",
    position: "absolute",
  },
  lineFlexBox: {
    gap: Gap.gap_sm,
    paddingHorizontal: Padding.p_13xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  dayDateLayout: {
    width: 326,
    position: "absolute",
  },
  openmojireturnBackButtonIcon: {
    top: 176,
    left: 41,
    width: 35,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  momentoRelajante: {
    top: 168,
    left: 136,
    fontSize: FontSize.size_11xl,
    textAlign: "center",
    color: Color.grayBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  seleccionarHorarioDisponible: {
    top: 620,
    left: 123,
  },
  avisoNoPuedes: {
    top: 707,
    left: 124,
  },
  continuar: {
    top: 7,
    left: 55,
    fontSize: FontSize.bodyRegular_size,
    color: Color.colorSnow,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    position: "absolute",
  },
  continuarWrapper: {
    top: 761,
    left: 89,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod,
    width: 212,
    height: 33,
    position: "absolute",
  },
  legales: {
    marginLeft: -105,
    top: 0,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
  },
  contacto: {
    marginLeft: 56,
    top: 0,
    color: Color.colorDimgray_100,
    fontFamily: FontFamily.m3BodyLarge,
  },
  legalesParent: {
    marginLeft: -112,
    top: 850,
    width: 210,
    height: 14,
    left: "50%",
    position: "absolute",
  },
  devolucionesYCambios: {
    marginLeft: -90,
    top: 817,
  },
  chevronLeftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  mes: {
    fontSize: FontSize.size_xl,
    fontWeight: "600",
    fontFamily: FontFamily.latoBold,
    color: Color.gray3,
    textAlign: "center",
    flex: 1,
  },
  monthYearLine: {
    top: 231,
    left: 42,
    paddingVertical: Padding.p_base,
    width: 326,
    position: "absolute",
  },
  calendarioChild: {
    top: 295,
    left: 27,
    borderStyle: "solid",
    borderColor: "#bdbdbd",
    borderTopWidth: 1,
    width: 356,
    height: 1,
    position: "absolute",
  },
  day1: {
    letterSpacing: 0.4,
    lineHeight: 12,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.latoLight,
    textAlign: "left",
    fontSize: FontSize.size_xs,
    color: Color.grayBlack,
  },
  day: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  dayLine: {
    paddingVertical: Padding.p_5xs,
    gap: 11,
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_13xl,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  dateNumberLine04: {
    paddingVertical: Padding.p_9xs,
    alignSelf: "stretch",
  },
  dateLine: {
    alignSelf: "stretch",
  },
  dayDate: {
    top: 304,
    left: 45,
    gap: Gap.gap_2xs,
  },
  calendario: {
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: {
      width: 0,
      height: 100,
    },
    shadowRadius: 80,
    elevation: 80,
    shadowOpacity: 1,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.grayWhite,
    width: "100%",
    height: 896,
    overflow: "hidden",
    flex: 1,
  },
});

export default Calendario;
