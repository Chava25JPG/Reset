import React, { useMemo, useState } from "react";
import {
  TextInput,
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
  Dimensions,
  useWindowDimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

export type CabeceraMobileType = {
  icon?: ImageSourcePropType;
  hora?: string;
  container?: ImageSourcePropType;
};

const CabeceraMobile = ({
  icon,
  hora,
  container,
}: CabeceraMobileType) => {
  const { width, height } = useWindowDimensions();
  const navigation = useNavigation();

  // Calcula dimensiones responsivas
  const headerHeight = Math.min(height * 0.2, 157);
  const searchBarHeight = Math.min(height * 0.05, 32);
  const iconSize = Math.min(width * 0.09, 36);
  const logoSize = Math.min(width * 0.13, 55);

  // Datos de los servicios
  const serviciosData = [
    { title: "Masaje con pindas", price: "$55" },
    { title: "Masaje geotermal", price: "$60" },
    { title: "Masaje podal", price: "$45" },
    { title: "Masaje descontracturante", price: "$55" },
    { title: "Masaje lomi lomi", price: "$55" },
    { title: "Masaje relajante", price: "$50" },
    { title: "Moment relax", price: "$110" },
    { title: "Masaje craneo facial", price: "$35" },
    { title: "Masaje cuatro manos", price: "$55" },
  ];

  const [searchText, setSearchText] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);

  const handleSearchChange = (text) => {
    setSearchText(text);
    if (text) {
      const filtered = serviciosData.filter(service =>
        service.title.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredServices(filtered);
    } else {
      setFilteredServices([]);
    }
  };

  const handleServiceSelect = (service) => {
    navigation.navigate('DuracionMasaje', { service });
    setSearchText('');
    setFilteredServices([]);
  };

  // Nueva función para manejar la apertura del menú lateral
  const handleMenuPress = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={[styles.cabeceraMobile, { height: headerHeight }]}>
      {/* Barra de búsqueda */}
      <View style={[styles.searchBarContainer, { height: headerHeight * 0.36 }]}>
        <View style={[styles.buscarWrapper, { height: searchBarHeight }]}>
          <TextInput
            style={styles.buscar}
            placeholder="Buscar..."
            placeholderTextColor={Color.colorDimgray_100}
            value={searchText}
            onChangeText={handleSearchChange}
          />
        </View>
        {/* Lista de sugerencias */}
        {filteredServices.length > 0 && (
          <View style={styles.suggestionsContainer}>
            {filteredServices.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={styles.suggestionItem}
                onPress={() => handleServiceSelect(service)}
              >
                <Text style={styles.suggestionText}>{service.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>

      {/* Top App Bar */}
      <View style={[styles.topAppBar, { height: headerHeight * 0.41 }]}>
        <TouchableOpacity 
          style={styles.leadingIcon}
          onPress={handleMenuPress}
        >
          <View style={styles.container}>
            <Image 
              style={[styles.icon, { width: iconSize, height: iconSize }]} 
              resizeMode="contain" 
              source={icon} 
            />
          </View>
        </TouchableOpacity>
        
        <View style={styles.leadingIcon}>
          <View style={styles.container}>
            <View style={styles.stateLayer}>
              <Image
                style={[styles.logo1Icon, { width: logoSize, height: logoSize }]}
                resizeMode="contain"
                source={require("../assets/logo-12.png")}
              />
            </View>
          </View>
        </View>
        
        <View style={styles.leadingIcon}>
          <View style={styles.container}>
            <View style={styles.stateLayer}>
              <Image
                style={[styles.combinedShapeIcon, { 
                  width: iconSize * 0.83, 
                  height: iconSize * 0.83 
                }]}
                resizeMode="contain"
                source={require("../assets/combinedshape.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cabeceraMobile: {
    width: '100%',
    backgroundColor: Color.grayWhite,
  },
  searchBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: Color.colorGainsboro_400,
    paddingHorizontal: Padding.p_18xl,
    paddingVertical: Padding.p_2xs,
    zIndex: 2, // Asegura que la lista de sugerencias aparezca sobre otros elementos
  },
  buscarWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Padding.p_mini,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_11xl,
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: { width: 0, height: 100 },
    shadowRadius: 80,
    elevation: 80,
    shadowOpacity: 1,
    width: '100%',
  },
  buscar: {
    flex: 1,
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.colorDimgray_100,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  topAppBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: Color.grayBlack,
    paddingHorizontal: Padding.p_mini,
    paddingVertical: Padding.p_5xs,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leadingIcon: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderRadius: Border.br_81xl,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stateLayer: {
    padding: Padding.p_5xs,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },
  logo1Icon: {
    resizeMode: 'contain',
  },
  combinedShapeIcon: {
    resizeMode: 'contain',
  },
  // Estilos para las sugerencias de búsqueda
  suggestionsContainer: {
    backgroundColor: Color.colorGainsboro_100,
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    zIndex: 3,
    borderRadius: Border.br_11xl,
    maxHeight: 150,
    marginTop: 5,
    paddingHorizontal: Padding.p_mini,
  },
  suggestionItem: {
    paddingVertical: Padding.p_7xs,
    borderBottomWidth: 1,
    borderBottomColor: Color.colorGainsboro_400,
  },
  suggestionText: {
    fontSize: FontSize.bodyRegular_size,
    color: Color.colorDimgray_100,
  },
});

export default CabeceraMobile;
