import React from "react";
import connect from "./connect";
import LiItem from "../../components/liitem/liitem.js";
import "./style.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFlag = (e, index) => {
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

  handleNewDeactivate = (e) => {
    e.preventDefault();
    this.props.deactivateNewChange();
  };

  filterChange = () => {
    let { showFilter, items } = this.props;

    switch (showFilter) {
      case 1:
        return items;
      case 2:
        return items.filter((item) => !item.flag);
      case 3:
        return items.filter((item) => item.flag);
    }
  };

  render() {
    let list = this.filterChange();
    return (
      <ul>
        {list.map((item) => (
          <LiItem
            handleNewDeactivate={this.handleNewDeactivate}
            handleFlag={this.handleFlag}
            handleDelete={this.handleDelete}
            handleNewPick={this.handleNewPick}
            key={item.id}
            item={item}
            allin={this.props.allin}
          />
        ))}
      </ul>
    );
  }
}

export default connect(TodoList);
