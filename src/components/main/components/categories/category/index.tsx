import {View, Text} from "react-native";
import React from "react";
import {styles} from "./style";
import {CategoryProps} from "../../../../../config/interfaces";

export const Category = ({type, color, value}: CategoryProps) => {
  return (
    <View style={styles.categoryItem}>
      <Text style={[styles.created, {color}]}>{type}</Text>
      <View style={styles.circle}>
        <Text style={styles.number}>{value || 0}</Text>
      </View>
    </View>
  );
};
