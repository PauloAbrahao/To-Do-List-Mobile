import {View} from "react-native";
import React from "react";
import {styles} from "./style";
import {Header} from "../header";
import {Categories} from "./components/categories";
import {Body} from "../body/";
import {MainProps} from "../../config/interfaces";

export const Main = ({handleOnLayout}: MainProps) => {
  return (
    <View style={styles.mainComponent} onLayout={handleOnLayout}>
      <Header />
      <Categories />
      <Body />
    </View>
  );
};
