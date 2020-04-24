import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import TaskForm from "./TaskForm";
import TasksList from "./TasksList";
import CountersContainer from "./CountersContainer";
import FloatingButton from "../_Shared/FloatingButton";

function TasksContainer(props) {
  const [tasks, setTasks] = useState([
    { id: new Date().getTime(), title: "Nouvelle tâches", completed: false },
  ]);
  const [isFormOpened, setIsFormOpened] = useState(true);

  const onAddTask = (title) => {
    const newTask = {
      id: new Date().getTime(),
      title: title,
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  const onChangeStatus = (id) => {
    let newTasks = [];

    tasks.forEach((task) => {
      if (task.id === id) {
        newTasks.push({
          id: id,
          title: task.title,
          completed: !task.completed,
        });
      } else {
        newTasks.push(task);
      }
    });

    setTasks(newTasks);
  };

  const onDeleteTask = (id) => {
    let newTasks = [];

    tasks.forEach((task) => {
      if (task.id !== id) {
        newTasks.push(task);
      }
    });

    setTasks(newTasks);
  };

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
      {isFormOpened && <TaskForm onAddTask={onAddTask} />}
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
