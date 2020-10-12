import React from "react";
import LiItem from "./liitem.js";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul

      // onKeyDown={(e) => this.props.handleNewBack(e)}
      >
        {this.props.items.map((item, index) => (
          <LiItem
            flagChange={this.props.flagChange}
            key={item.id}
            text={item.text}
            items={this.props.items}
            index={index}
            deleteElement={this.props.deleteElement}
            handleChangeElement={this.props.handleChangeElement}
            changeDisplay={this.props.changeDisplay}
            handleNewText={this.props.handleNewText}
            handleNewChange={this.props.handleNewChange}
            handleNewSubmit={this.props.handleNewSubmit}
            handleNewTextDeactive={this.props.handleNewTextDeactive}
            handleNewBlur={this.props.handleNewBlur}
            refArray={this.props.refArray}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
