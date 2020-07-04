const defaultState = [{ id: 1, title: "new task", completed: false }];

export const tasksList = (state = defaultState, action) => {
  // action = {type: NOM_ACTION, payload}
  switch (action.type) {
    default:
      return state;
  }
};
