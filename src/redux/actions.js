const { ADD_TASK, TOGGLE_TASK } = require("./actionsType");

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: new Date().getTime(),
    title,
    completed: false,
  },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
  },
});
