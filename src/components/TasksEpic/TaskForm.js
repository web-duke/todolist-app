import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/actions";

const TaskFrom = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const _onChangeText = (value) => {
    setTitle(value);
  };

  const _onPressBtn = () => {
    if (title.length > 0) {
      dispatch(addTask(title));
      setTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput value={title} onChangeText={_onChangeText} />
      </View>
      <Button onPress={_onPressBtn} title="Ajouter" color="#841584" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  containerInput: {
    width: "75%",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 4,
    paddingLeft: 7,
  },
});

export default TaskFrom;
