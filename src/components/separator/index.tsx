import {View} from "react-native";
import React from "react";
import {styles} from "./style";

export const Separator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
    </View>
  );
};