import {View, TextInput} from "react-native";
import React from "react";
import {styles} from "./style";

const Input = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Adicione uma nova tarefa" placeholderTextColor="#999" style={styles.inputColor} />
    </View>
  );
};

export default Input;
