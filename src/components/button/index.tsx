import {TouchableOpacity} from "react-native";
import React from "react";
import {AddIcon} from "../../../assets/icons/";
import {styles} from "./style";
import { ButtonProps } from "../../config/interfaces";

const index = ({onPress}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <AddIcon />
    </TouchableOpacity>
  );
};

export default index;
