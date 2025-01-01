// Component.js (rebautizado o simplificado como SearchBar.js)
import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar..."
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_11xl,
    // Ajusta padding a tu gusto
    paddingHorizontal: 15,
    paddingVertical: 8,
    // Puedes añadir sombras si quieres
    shadowColor: "rgba(0, 0, 0, 0.07)",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
    shadowOpacity: 1,
  },
  searchInput: {
    fontSize: FontSize.bodyRegular_size,
    fontFamily: FontFamily.m3BodyLarge,
    color: "#000",
  },
});

export default SearchBar;
