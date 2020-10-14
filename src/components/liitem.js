import React from "react";
import { toggleTodo } from "../actions/index";
import ChangeItem from "../containers/changeitem/changeitem";

class LiItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("PROPS >>>>>", this.props);
    return (
      <li
        key={this.key}
        text={this.text}
        style={{ display: this.props.item.display }}
        className={
          this.props.item.flag ? "current-task complited" : "current-task"
        }
      >
        <input
          id={this.props.index}
          className="checkbox"
          type="checkbox"
          style={
            !this.props.item.formDisplay ? { display: "" } : { display: "none" }
          }
          onChange={(e) => this.props.handleFlag(e, this.props.index)}
          checked={this.props.item.flag}
        />
        <div
          className="item"
          onDoubleClick={(e) => this.props.handleNewPick(e, this.props.index)}
          onClick={(e) => this.props.handleNewDeactivate(e)}
        >
          <form>
            <label className="text">{this.props.text}</label>
          </form>
          <button
            onClick={(e) => this.props.handleDelete(e, this.props.index)}
            className="destroy"
          ></button>
        </div>
        <ChangeItem
          item={this.props.item}
          index={this.props.index}
          handleNewPick={this.props.handleNewPick}
        />
      </li>
    );
  }
}

export default LiItem;
