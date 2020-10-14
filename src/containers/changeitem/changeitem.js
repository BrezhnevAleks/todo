import React from "react";
import connect from "./connect";

class ChangeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.item.text,
    };
  }

  handleNewChange = (e) => {
    e.preventDefault();
    this.setState({ text: e.target.value });
  };

  handleNewSubmit = (e, index) => {
    console.log("SUBMIT >>>>");
    e.preventDefault();
    this.props.createNewChange(index, this.state.text);
    this.props.pickNewChange(index);
  };

  handleNewBlur = (e) => {
    e.preventDefault();
    this.setState({ text: this.props.item.text });
  };

  render() {
    if (this.props.item.formDisplay) {
      return (
        <div className="change-item">
          <form
            onSubmit={(e) => this.handleNewSubmit(e, this.props.index)}
            onKeyDown={(e) => {
              if (e.keyCode === 27) {
                this.props.handleNewPick(e, this.props.index);
                this.setState({ text: this.props.item.text });
              }
            }}
          >
            <input
              onChange={(e) => this.handleNewChange(e)}
              onBlur={(e) => this.handleNewBlur(e)}
              type="text"
              value={this.state.text}
              autoFocus={true}
            />
          </form>
        </div>
      );
    }
    return null;
  }
}
export default connect(ChangeItem);
