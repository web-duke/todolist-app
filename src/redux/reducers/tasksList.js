import { ADD_TASK } from "../actionsType";

const defaultState = [{ id: 1, title: "new task", completed: false }];

export const tasksList = (state = defaultState, action) => {
  // action = {type: NOM_ACTION, payload}
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
};
