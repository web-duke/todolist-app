const { ADD_TASK } = require("./actionsType");

export const addTask = (title) => ({
  type: ADD_TASK,
  payload: {
    id: new Date().getTime(),
    title,
    completed: false,
  },
});
