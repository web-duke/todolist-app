import { ADD_TASK, TOGGLE_TASK } from "../actionsType";

const defaultState = [{ id: 1, title: "new task", completed: false }];

export const tasksList = (state = defaultState, action) => {
  // action = {type: NOM_ACTION, payload}
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case TOGGLE_TASK:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return { id: task.id, title: task.title, completed: !task.completed };
        } else {
          return task;
        }
      });
    default:
      return state;
  }
};
