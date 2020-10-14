import { connect } from "react-redux";
import todos from "../../reducers";
import * as todoActions from "../../actions";
import AddTodo from "../addtodo/addtodo";
import TodoList from "../todolist/todolist";

const mapStateToProps = (todos) => ({
  items: todos.items,
  allin: todos.allin,
});
const mapDispatchToProps = {
  ...todoActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
