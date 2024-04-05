import {View} from "react-native";
import React from "react";
import {styles} from "./style";
import {Category} from "./category";
import {Config} from "../../../../config/theme";

export const Categories = () => {
  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.container}>
        <Category type="Criadas" color={Config.colors.product.blue} value={0} />
        <Category
          type="Concluídas"
          color={Config.colors.product.purple}
          value={0}
        />
      </View>
    </View>
  );
};
