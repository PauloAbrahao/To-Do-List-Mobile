import {View, TextInput} from "react-native";
import React from "react";
import {styles} from "./style";
import {useTaskContext} from "../../../../context";
import Button from "../../../button";

const Input = () => {
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [value, setValue] = React.useState<string>("");
  const {addTask} = useTaskContext();

  const handleAddTask = () => {
    addTask(value); 
    setValue(""); 
  };

  return (
    <>
      <View style={[styles.inputContainer, isFocused && styles.inputFocused]}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#999"
          style={styles.inputColor}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={(text) => setValue(text)}
          value={value}
        />
      </View>
      <Button onPress={handleAddTask}/>
    </>
  );
};

export default Input;