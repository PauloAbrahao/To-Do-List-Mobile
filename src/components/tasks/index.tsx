import {View, Text, TouchableOpacity} from "react-native";
import React from "react";
import {styles} from "./style";
import {CheckIcon, TrashIcon, VerifiedIcon} from "../../../assets/icons";
import {useTaskContext} from "../../context";
import {TaskProps} from "../../config/interfaces";

export const Task: React.FC<{task: TaskProps}> = ({task}) => {
  const {markAsDone, deleteTask} = useTaskContext();

  return (
    <View style={styles.container}>
      <View style={styles.insideContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => markAsDone(task.id)}
        >
          {!task.check ? (
            <CheckIcon width={28} height={28} />
          ) : (
            <VerifiedIcon width={28} height={28} />
          )}
        </TouchableOpacity>
        {!task.check ? (
          <Text style={styles.task}>{task.task}</Text>
        ) : (
          <Text style={[styles.task, styles.verified]}>{task.task}</Text>
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => deleteTask(task.id)}
        >
          <TrashIcon width={40} height={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
