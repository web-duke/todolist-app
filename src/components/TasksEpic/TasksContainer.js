import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/selectors";
import FloatingButton from "../_Shared/FloatingButton";
import CountersContainer from "./CountersContainer";
import TaskForm from "./TaskForm";
import TasksList from "./TasksList";

function TasksContainer(props) {
  const tasks = useSelector(getTasks);

  const [isFormOpened, setIsFormOpened] = useState(true);

  const onChangeStatus = (id) => {};

  const onDeleteTask = (id) => {};

  const getTasksCompleted = () => {
    let counter = 0;

    tasks.forEach((task) => {
      if (task.completed) {
        counter++;
      }
    });

    return counter;
  };

  const toggleForm = () => {
    setIsFormOpened(!isFormOpened);
  };

  return (
    <View style={styles.container}>
      {isFormOpened && <TaskForm />}
      <CountersContainer
        nbTasks={tasks.length}
        nbTasksCompleted={() => getTasksCompleted()}
      />
      <TasksList
        tasks={tasks}
        onChangeStatus={onChangeStatus}
        onDeleteTask={onDeleteTask}
      />
      <FloatingButton toggleForm={toggleForm} isFormOpened={isFormOpened} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
});

export default TasksContainer;
