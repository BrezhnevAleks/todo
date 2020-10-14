import React from "react";
import connect from "./connect";
import LiItem from "../../components/liitem.js";

class TodoList extends React.Component {
  handleFlag = (e, index) => {
    console.log(this.props.index);
    console.log(this.props);
    console.log(this.props.toggleTodo);
    this.props.toggleTodo(index);
  };

  handleNewPick = (e, index) => {
    e.preventDefault();
    this.props.pickNewChange(index);
  };

  handleDelete = (e, index) => {
    e.preventDefault();
    this.props.deleteTodo(index);
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

  handleNewDeactivate = (e) => {
    e.preventDefault();
    this.props.deactivateNewChange();
  };

  filterChange = () => {
    switch (this.props.showFilter) {
      case 1:
        return this.props.items;
      case 2:
        return this.props.items.filter((item) => !item.flag);
      case 3:
        return this.props.items.filter((item) => item.flag);
    }
  };

  render() {
    let list = this.filterChange();

    return (
      <ul>
        {list.map((item, index) => (
          <LiItem
            handleNewDeactivate={this.handleNewDeactivate}
            handleFlag={this.handleFlag}
            handleDelete={this.handleDelete}
            handleNewPick={this.handleNewPick}
            key={item.id}
            text={item.text}
            item={item}
            index={item.id}
            allin={this.props.allin}
          />
        ))}
      </ul>
    );
  }
}

export default connect(TodoList);
