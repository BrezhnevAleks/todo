export const todos = (state = {}, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,

        id: action.id,
        text: action.text,
        flag: true,
        display: "flex",
        formDisplay: false,
      };
    case "TOGGLE_TODO":
      return state.map((item) =>
        item.id === action.id ? { ...item, flag: !item.flag } : item
      );
    default:
      return state;
  }
};
