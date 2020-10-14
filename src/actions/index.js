//let nextTodoId = 0;
export const addTodo = (text) => ({
  type: "ADD_TODO",
  id: Date.now(),
  text: text,
});

export const setVisibilityFilter = (filter) => ({
  type: "SET_VISIBILITY_FILTER",
  filter,
});

export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  id: id,
});

export const toggleAll = () => ({
  type: "TOGGLE_ALL",
});

export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  id: id,
});

export const pickNewChange = (id) => ({
  type: "PICK_CHANGE_TODO",
  id: id,
});
export const createNewChange = (id, text) => ({
  type: "CHANGE_TODO",
  id: id,
  text,
});
export const deactivateNewChange = () => ({
  type: "CHANGE_DEACTIVE",
});

export const deleteCompleted = () => ({
  type: "DELETE_COMPLETED",
});

export const changeFilter = (id) => ({ type: "CHANGE_FILTER", id: id });
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE",
};
