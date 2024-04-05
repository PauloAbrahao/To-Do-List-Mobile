import {View} from "react-native";
import React from "react";
import {styles} from "./style";
import {Header} from "../header";

export const Main = () => {
  return (
    <View style={styles.mainComponent}>
      <Header />
    </View>
  );
};
