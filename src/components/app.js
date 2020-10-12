import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./todolist";
import Footer from "./footer";
import { addTodo } from "../actions/index";
import AddTodo from "../containers/addtodo";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.refArray = [];
    this.state = {
      items: [],
      text: "",

      allin: true,
      elementDisplay: true,
      showSwitch: 1,
    };
  }

  handleNewChange = (e, index) => {
    e.preventDefault();
    let { items } = this.state;

    items[index].formText = e.target.value;
    this.setState((state) => ({ items }));
  };

  handleNewSubmit = (e, index) => {
    e.preventDefault();
    let { items } = this.state;
    items[index].formDisplay = !items[index].formDisplay;
    items[index].text = items[index].formText;
    this.setState((state) => ({
      items,
    }));
  };

  handleNewText = (e, index) => {
    e.preventDefault();
    console.log("KEK >>>", this.refArray);

    let { items } = this.state;
    if (e.keyCode === 27) {
      items[index].formDisplay = !items[index].formDisplay;
    } else {
      items.forEach((item) => (item.formDisplay = false));

      items[index].formDisplay = !items[index].formDisplay;
    }
    this.setState(
      (state) => ({ items }),
      () => this.refArray[index].focus()
    );
  };

  handleNewTextDeactive = (e) => {
    e.preventDefault();
    let { items } = this.state;
    items.forEach((item) =>
      item.formDisplay === true
        ? (item.formDisplay = false)
        : (item.formDisplay = item.formDisplay)
    );
    this.setState((state) => ({ items }));
  };

  handleNewBlur = (e, index) => {
    let { items } = this.state;
    items[index].formText = items[index].text;
    this.setState({ index });
  };

  handleFlag = (e, index) => {
    const { items } = this.state;
    let { allin } = this.state;
    items[index].flag = !items[index].flag;
    this.setState((state) => ({
      items,
    }));
    if (!this.state.items.filter((item) => item.flag).length) {
      allin = false;
    } else {
      allin = true;
    }
    this.setState((state) => ({ allin }));
  };

  handleChangeAll = (e) => {
    const { items } = this.state;
    let { allin } = this.state;
    if (items.length) {
      items.forEach((item) => {
        item.flag = !allin;
      });
      allin = !allin;
      this.setState((state) => ({
        items,
      }));
      this.setState((state) => ({
        allin,
      }));
    }
  };

  handleShow = (e, key) => {
    const { items } = this.state;

    items.forEach((item) => {
      switch (key) {
        case 1:
          item.display = "flex";
          this.setState((state) => ({
            showSwitch: 1,
          }));
          break;
        case 2:
          item.display = item.flag ? "flex" : "none";
          this.setState((state) => ({
            showSwitch: 2,
          }));
          break;
        case 3:
          item.display = item.flag ? "none" : "flex";
          this.setState((state) => ({
            showSwitch: 3,
          }));
          break;
      }
      this.setState((state) => ({ items }));
    });
  };

  handleDelete = (e, index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState((state) => ({
      items,
    }));
  };

  handleComplited = (e) => {
    let { items } = this.state;
    items = items.filter((item) => item.flag);
    this.setState((state) => ({
      items,
    }));
  };

  render() {
    return (
      <div
        className="container"
        style={
          this.state.items.length
            ? {
                boxShadow:
                  "0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)",
              }
            : { boxShadow: "" }
        }
      >
        <h1>todos</h1>

        <AddTodo
          allin={this.state.allin}
          // items={this.state.items}
          handleChangeAll={this.handleChangeAll}
          text={this.state.text}
        />

        <TodoList
          changeDisplay={this.state.changeDisplay}
          items={this.state.items}
          flagChange={this.handleFlag}
          deleteElement={this.handleDelete}
          handleNewSubmit={this.handleNewSubmit}
          handleNewText={this.handleNewText}
          handleNewChange={this.handleNewChange}
          handleNewTextDeactive={this.handleNewTextDeactive}
          handleNewBlur={this.handleNewBlur}
          refArray={this.refArray}
        />
        <Footer
          showSwitch={this.state.showSwitch}
          items={this.state.items}
          handleShow={this.handleShow}
          handleComplited={this.handleComplited}
        />
      </div>
    );
  }
}

//ReactDOM.render(<TodoApp />, document.getElementById("root"));

export default TodoApp;
