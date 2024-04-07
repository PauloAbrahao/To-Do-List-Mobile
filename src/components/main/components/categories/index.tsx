import {View} from "react-native";
import React from "react";
import {styles} from "./style";
import {Category} from "./category";
import {Config} from "../../../../config/theme";
import { useTaskContext } from "../../../../context";

export const Categories = () => {
  const { tasks } = useTaskContext();
  const [numOfTasksDone, setNumOfTasksDone] = React.useState<number>(0);

  const completedTasks = tasks.filter(task => task.check);
  React.useEffect(() => {
    setNumOfTasksDone(completedTasks.length);
  }, [completedTasks]);

  return (
    <View style={styles.categoriesContainer}>
      <View style={styles.container}>
        <Category type="Criadas" color={Config.colors.product.blue} value={tasks.length} />
        <Category
          type="Concluídas"
          color={Config.colors.product.purple}
          value={numOfTasksDone}
        />
      </View>
    </View>
  );
};
