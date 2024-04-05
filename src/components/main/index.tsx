import {View} from "react-native";
import React from "react";
import {styles} from "./style";
import {Header} from "../header";
import {Categories} from "./components/categories";
import {Separator} from "../separator";

export const Main = () => {
  return (
    <View style={styles.mainComponent}>
      <Header />
      <Categories />
      <Separator />
    </View>
  );
};
