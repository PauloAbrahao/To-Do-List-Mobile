import {TouchableOpacity} from "react-native";
import React from "react";
import {AddIcon} from "../../../assets/icons/";
import {styles} from "./style";

const index = () => {
  return (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.7}>
      <AddIcon />
    </TouchableOpacity>
  );
};

export default index;
