import React, { useMemo } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  ImageSourcePropType,
} from "react-native";
import Text1 from "./Text1";
import AvatarBlock from "./AvatarBlock";
import { StyleVariable, FontSize, FontFamily, Color } from "../GlobalStyles";

export type ReviewCardType = {
  star?: ImageSourcePropType;
  star1?: ImageSourcePropType;
  star2?: ImageSourcePropType;
  star3?: ImageSourcePropType;
  star4?: ImageSourcePropType;

  /** Style props */
  reviewCardTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ReviewCard = ({
  star,
  star1,
  star2,
  star3,
  star4,
  reviewCardTop,
}: ReviewCardType) => {
  const reviewCardStyle = useMemo(() => {
    return {
      ...getStyleValue("top", reviewCardTop),
    };
  }, [reviewCardTop]);

  return (
    <View style={[styles.reviewCard, reviewCardStyle]}>
      <View style={styles.rating}>
        <Image style={styles.starIcon} resizeMode="cover" source={star} />
        <Image style={styles.starIcon} resizeMode="cover" source={star1} />
        <Image style={styles.starIcon} resizeMode="cover" source={star2} />
        <Image style={styles.starIcon} resizeMode="cover" source={star3} />
        <Image style={styles.starIcon} resizeMode="cover" source={star4} />
      </View>
      <View style={styles.reviewBody}>
        <View style={styles.textHeading}>
          <Text style={styles.textHeading1}>Resena</Text>
        </View>
        <Text1 text="BUENA CLIENTA." />
      </View>
      <AvatarBlock description="Fecha: 07/10/2024" />
    </View>
  );
};

const styles = StyleSheet.create({
  starIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  rating: {
    alignItems: "center",
    gap: StyleVariable.space100,
    flexDirection: "row",
  },
  textHeading1: {
    fontSize: FontSize.heading_size,
    letterSpacing: -0.5,
    lineHeight: 29,
    fontWeight: "600",
    fontFamily: FontFamily.bodyStrong,
    color: Color.textDefaultDefault,
    textAlign: "left",
  },
  textHeading: {
    display: "none",
    flexDirection: "row",
  },
  reviewBody: {
    alignSelf: "stretch",
    gap: StyleVariable.space100,
  },
  reviewCard: {
    position: "absolute",
    marginLeft: -140,
    top: 388,
    left: "50%",
    borderRadius: StyleVariable.radius200,
    backgroundColor: Color.grayWhite,
    borderStyle: "solid",
    borderColor: Color.borderDefaultDefault,
    borderWidth: 1,
    width: 281,
    height: 362,
    padding: StyleVariable.space600,
    gap: StyleVariable.space600,
    minWidth: 240,
  },
});

export default ReviewCard;
