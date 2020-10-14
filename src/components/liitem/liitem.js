import React from "react";
import { toggleTodo } from "../../actions/index";
import ChangeItem from "../../containers/changeitem/changeitem";
import "./style.css";

class LiItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <li className={item.flag ? "current-task complited" : "current-task"}>
        {!item.formDisplay && (
          <input
            id={item.id}
            className="checkbox"
            type="checkbox"
            onChange={(e) => this.props.handleFlag(e, item.id)}
            checked={item.flag}
          />
        )}
        <div
          className="item"
          onDoubleClick={(e) => this.props.handleNewPick(e, item.id)}
          onClick={(e) => this.props.handleNewDeactivate(e)}
        >
          <form>
            <label className="text">{item.text}</label>
          </form>
          <button
            onClick={(e) => this.props.handleDelete(e, item.id)}
            className="destroy"
          ></button>
        </div>
        <ChangeItem
          item={item}
          index={item.id}
          handleNewPick={this.props.handleNewPick}
        />
      </li>
    );
  }
}

export default LiItem;
