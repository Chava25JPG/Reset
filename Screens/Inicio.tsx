import * as React from "react";
import { 
  Text, 
  StyleSheet, 
  View, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  useWindowDimensions 
} from "react-native";
import CabeceraMobile from "../components/CabeceraMobile";
import { Color, Border, FontFamily } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const categories = [
  { 
    title: "Bambú", 
    img: require("../assets/outputonlinepngtools-2-1.png"),
    imageStyle: { width: '63%', height: '62%', left: '18%', top: '10%' }
  },
  { 
    title: "Ventosas", 
    img: require("../assets/outputonlinepngtools-3-1.png"),
    imageStyle: { width: '64%', height: '62%', left: '17%', top: '10%' }
  },
  { 
    title: "Prenatal", 
    img: require("../assets/outputonlinepngtools2-1.png"),
    imageStyle: { width: '71%', height: '62%', left: '14%', top: '10%' }
  },
  { 
    title: "Descontracturante", 
    img: require("../assets/relax-1.png"),
    imageStyle: { width: '80%', height: '62%', left: '8%', top: '10%' }
  },
  { 
    title: "Relajante", 
    img: require("../assets/outputonlinepngtools-1-1.png"),
    imageStyle: { width: '43%', height: '62%', left: '28%', top: '10%' }
  },
  { 
    title: "Deportivo", 
    img: require("../assets/outputonlinepngtools-1.png"),
    imageStyle: { width: '56%', height: '62%', left: '22%', top: '10%' }
  },
];

const Inicio = () => {
  const navigation = useNavigation();
  const { width, height } = useWindowDimensions();

  // Dimensiones responsivas
  const headerHeight = Math.min(height * 0.2, 157); // 20% de la altura o 157px máximo
  const horizontalPadding = width * 0.05; // 5% del ancho de la pantalla
  const iconSpacing = width * 0.02; // 2% del ancho de la pantalla
  const verticalMargin = height * 0.02; // 2% de la altura de la pantalla

  // Cálculos para la cuadrícula de categorías
  const totalHorizontalSpace = width - (horizontalPadding * 2);
  const itemWidth = (totalHorizontalSpace - (iconSpacing * 2)) / 3;
  const itemHeight = itemWidth;

  // Tamaños de fuente dinámicos
  const titleFontSize = Math.max(16, width * 0.06);
  const categoryFontSize = Math.max(12, itemWidth * 0.15);

  // Dimensiones de la imagen promocional
  const promotionImageWidth = Math.min(386, width - (horizontalPadding * 2));
  const promotionImageHeight = (promotionImageWidth * 384) / 386; // mantener relación de aspecto

  const handleCategoryPress = (category) => {
    navigation.navigate("Servicios", { category });
  };

  // Función para obtener el tamaño de fuente para categorías específicas
  const getCategoryFontSize = (title) => {
    if (title === "Descontracturante") {
      return Math.min(categoryFontSize, itemWidth * 0.12);
    }
    return categoryFontSize;
  };

  return (
    <View style={styles.container}>
      {/* Header fijo */}
      <View style={[styles.headerContainer, { height: headerHeight }]}>
        <CabeceraMobile
          icon={require("../assets/icon4.png")}
          hora="09:41"
          container={require("../assets/container2.png")}
        />
      </View>
      
      {/* Contenido scrolleable */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={{
          paddingTop: headerHeight + verticalMargin,
          paddingBottom: verticalMargin * 2,
        }}
      >
        {/* Título de Categorías */}
        <Text style={[styles.categoryTitle, { fontSize: titleFontSize }]}>
          Categorías
        </Text>

        {/* Contenedor de categorías */}
        <View style={[
          styles.categoriesGrid,
          {
            paddingHorizontal: horizontalPadding,
            marginTop: verticalMargin
          }
        ]}>
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryCard,
                {
                  width: itemWidth,
                  height: itemHeight,
                  marginBottom: verticalMargin
                }
              ]}
              onPress={() => handleCategoryPress(category.title)}
            >
              <View style={styles.cardContent}>
                <Image
                  style={[
                    styles.categoryImage,
                    category.imageStyle,
                    {
                      position: 'absolute',
                      resizeMode: 'contain'
                    }
                  ]}
                  source={category.img}
                />
                <Text 
                  style={[
                    styles.categoryText,
                    {
                      fontSize: getCategoryFontSize(category.title),
                      position: 'absolute',
                      bottom: '10%'
                    }
                  ]}
                  numberOfLines={2}
                  adjustsFontSizeToFit
                >
                  {category.title}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Imagen promocional */}
        <View style={[styles.promotionContainer, { paddingHorizontal: horizontalPadding }]}>
          <Image
            style={[
              styles.promotionImage,
              {
                width: promotionImageWidth,
                height: promotionImageHeight
              }
            ]}
            resizeMode="cover"
            source={require("../assets/post-instagram-promocion-masajes-tono-tierra-1.png")}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.grayWhite,
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    backgroundColor: Color.grayWhite,
  },
  scrollView: {
    flex: 1,
  },
  categoryTitle: {
    fontWeight: "600",
    color: Color.grayBlack,
    textAlign: "center",
    fontFamily: FontFamily.robotoBold,
    width: '100%',
    paddingHorizontal: 10,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryCard: {
    backgroundColor: Color.yellow700,
    borderRadius: Border.br_11xl,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    elevation: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 1,
  },
  cardContent: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  categoryImage: {
    position: 'absolute',
  },
  categoryText: {
    fontWeight: '700',
    color: Color.grayWhite,
    fontFamily: FontFamily.robotoBold,
    textAlign: 'center',
    width: '100%',
    paddingHorizontal: 5,
  },
  promotionContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  promotionImage: {
    borderRadius: 25,
  },
});

export default Inicio;