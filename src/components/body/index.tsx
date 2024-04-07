import {View, Text, FlatList} from "react-native";
import React from "react";
import {styles} from "./style";
import {PasteIcon} from "../../../assets/icons";
import {useTaskContext} from "../../context";
import {Task} from "../tasks/";
import {Separator} from "../separator";

export const Body = () => {
  const {tasks} = useTaskContext();

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({item}) => (
          <Task
            task={item}
            key={item.id}
          />
        )}
        keyExtractor={(index) => index.id.toString()}
        ListEmptyComponent={() => (
          <>
            <Separator />
            <View style={styles.emptyContainer}>
              <PasteIcon />
              <Text style={styles.title}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.subtitle}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          </>
        )}
      />
    </View>
  );
};
