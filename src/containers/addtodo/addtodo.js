import React from "react";
import connect from "./connect";
import { addTodo } from "../../actions/index";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    this.props.addTodo(this.state.text);
    this.setState({ text: "" });
  };

  handleChangeAll = (e) => {
    e.preventDefault();
    this.props.toggleAll();
  };
  render() {
    console.log("PROPS >>>>>", this.props);

    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div
          className="choose-all"
          onClick={this.handleChangeAll}
          style={this.props.allin ? { color: "#737373" } : { color: "" }}
        >
          <span
            style={this.props.items.length ? { color: "" } : { color: "white" }}
            className="marker"
          >
            ❯
          </span>
        </div>
        <input
          placeholder="What needs to be done?"
          id="new-todo"
          className="new-todo"
          onChange={(e) => this.handleChange(e)}
          value={this.state.text}
        />
      </form>
    );
  }
}
export default connect(AddTodo);
