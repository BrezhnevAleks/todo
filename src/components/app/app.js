import React from "react";
import ReactDOM from "react-dom";
import TodoList from "../../containers/todolist/todolist";
import Footer from "../../containers/footer/footer";
import { addTodo } from "../../actions/index";
import AddTodo from "../../containers/addtodo/addtodo";
import "./style.css";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="container"
        style={{
          boxShadow:
            "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <h1>todos</h1>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    );
  }
}

export default TodoApp;
