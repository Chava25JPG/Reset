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
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
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

  // Calcula dimensiones responsivas
  const headerHeight = Math.min(height * 0.2, 157); // 20% de la altura de la pantalla o 157px máximo
  const searchBarHeight = Math.min(height * 0.05, 32); // 5% de la altura o 32px máximo
  const iconSize = Math.min(width * 0.09, 36); // 9% del ancho o 36px máximo
  const logoSize = Math.min(width * 0.13, 55); // 13% del ancho o 55px máximo

  const navigation = useNavigation();

  // Datos de los servicios (para la barra de búsqueda)
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

  // Estado para la búsqueda
  const [searchText, setSearchText] = useState('');
  const [filteredServices, setFilteredServices] = useState([]);

  const handleSearchChange = (text: string) => {
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

  const handleServiceSelect = (service: any) => {
    // Navega a la pantalla de duración del masaje con el servicio seleccionado
    navigation.navigate('DuracionMasaje', { service });
    setSearchText('');
    setFilteredServices([]);
  };

  // Estado para mostrar/ocultar menú lateral
  const [showMenu, setShowMenu] = useState(false);

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
        {/* Ícono que al presionar abre/cierra el menú */}
        <TouchableOpacity
          style={styles.leadingIcon}
          onPress={() => setShowMenu(!showMenu)}
        >
          <View style={styles.containerIcon}>
            <Image 
              style={[styles.icon, { width: iconSize, height: iconSize }]} 
              resizeMode="contain" 
              source={icon} 
            />
          </View>
        </TouchableOpacity>
        
        {/* Logo central */}
        <View style={styles.leadingIcon}>
          <View style={styles.containerIcon}>
            <View style={styles.stateLayer}>
              <Image
                style={[styles.logo1Icon, { width: logoSize, height: logoSize }]}
                resizeMode="contain"
                source={require("../assets/logo-12.png")}
              />
            </View>
          </View>
        </View>
        
        {/* Otro ícono (campanita, etc.) */}
        <View style={styles.leadingIcon}>
          <View style={styles.containerIcon}>
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

      {/* Menú Lateral (overlay + contenedor) */}
      {showMenu && (
        <View style={styles.menuOverlay}>
          {/* Al tocar la parte difuminada se cierra el menú */}
          <TouchableWithoutFeedback onPress={() => setShowMenu(false)}>
            <View style={styles.overlayBackground} />
          </TouchableWithoutFeedback>

          {/* Contenedor del menú en sí */}
          <View style={styles.sideMenuContainer}>
            {/* Cabecera del menú (imagen y datos del usuario) */}
            <View style={styles.sideMenuHeader}>
              <Image
                style={styles.userImage}
                source={require("../assets/sample09-2.png")}
                resizeMode="cover"
              />
              <Text style={styles.userName}>Brigitte Bozzo</Text>
              <Text style={styles.userEmail}>bebozzo@gmail.com</Text>
            </View>

            {/* Opciones del menú */}
            <View style={styles.menuItemsWrapper}>
              <MenuItem text="SERVICIOS" />
              <MenuItem text="MIS RESERVACIONES" />
              <MenuItem text="MIS DIRECCIONES" />
              <MenuItem text="MÉTODOS DE PAGO" />
              <MenuItem text="ACERCA DE" />

              {/* Contacto / Cerrar sesión */}
              <MenuItem text="CONTACTO POR WHATSAPP" color={Color.colorGoldenrod} />
              <MenuItem text="CONTACTO POR EMAIL" color={Color.colorGoldenrod} />
              <MenuItem text="CERRAR SESIÓN" color={Color.colorGoldenrod} />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

/**
 * Componente simple para representar un ítem del menú lateral.
 * Recibe la etiqueta y un color opcional para el texto.
 */
const MenuItem = ({ text, color = Color.colorGoldenrod }) => {
  return (
    <View style={styles.menuItem}>
      <Text style={[styles.menuItemText, { color }]}>{text}</Text>
      <Image
        style={styles.arrowIcon}
        resizeMode="cover"
        source={require("../assets/arrow-drop-down.png")}
      />
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
  containerIcon: {
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

  /* Overlay que cubre toda la pantalla cuando el menú está abierto */
  menuOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999,
    flexDirection: 'row',
  },
  /* Fondo semitransparente para cerrar el menú al hacer tap */
  overlayBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  /* Contenedor lateral del menú */
  sideMenuContainer: {
    width: 300,
    backgroundColor: Color.grayBlack,
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  /* Cabecera del menú: foto y datos de usuario */
  sideMenuHeader: {
    alignItems: 'center',
    marginBottom: 30,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  userName: {
    color: Color.grayWhite,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    textAlign: 'center',
  },
  userEmail: {
    color: Color.grayWhite,
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    textAlign: 'center',
  },

  /* Lista de items del menú */
  menuItemsWrapper: {
    borderTopColor: Color.colorDimgray_100,
    borderTopWidth: 0.5,
    paddingTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  menuItemText: {
    fontFamily: FontFamily.m3BodyLarge,
    fontSize: FontSize.size_xs,
    color: Color.colorGoldenrod,
  },
  arrowIcon: {
    width: 24,
    height: 24,
    tintColor: Color.colorGoldenrod,
  },
});

export default CabeceraMobile;
