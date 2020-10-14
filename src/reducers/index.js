export const todos = (
  state = { showFilter: 1, allin: false, items: [] },
  action
) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        allin: false,
        items: [
          ...state.items,
          { text: action.text, id: action.id, flag: false, formDisplay: false },
        ],
      };

    case "TOGGLE_ALL":
      return {
        ...state,
        allin: state.allin ? false : true,
        items: state.items.map((item) =>
          item.flag === state.allin ? { ...item, flag: !item.flag } : item
        ),
      };

    case "TOGGLE_TODO":
      let newItems = state.items.map((item) =>
        item.id === action.id ? { ...item, flag: !item.flag } : item
      );
      return {
        ...state,
        items: newItems,
        allin: !newItems.filter((item) => !item.flag).length,
      };

    case "DELETE_TODO":
      return {
        ...state,
        items:
          state.items.length !== 1
            ? state.items.filter((item) => item.id !== action.id)
            : [],
      };

    case "PICK_CHANGE_TODO":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id
            ? { ...item, formDisplay: !item.formDisplay }
            : item
        ),
      };

    case "CHANGE_TODO":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, text: action.text } : item
        ),
      };

    case "CHANGE_DEACTIVE":
      return {
        ...state,
        items: state.items.map((item) =>
          item.formDisplay ? { ...item, formDisplay: false } : item
        ),
      };

    case "CHANGE_FILTER":
      return {
        ...state,
        showFilter: action.id,
      };

    case "DELETE_COMPLETED":
      return {
        ...state,
        items: state.items.filter((item) => !item.flag),
      };
    default:
      return state;
  }
};
