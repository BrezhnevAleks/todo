import React from "react";
import FooterMenu from "../../components/footermenu.js";
import ClearButton from "../../components/clearbutton.js";
import connect from "./connect";

class Footer extends React.Component {
  handleFilter = (e, index) => {
    e.preventDefault();
    this.props.changeFilter(index);
    console.log(this.props);
  };

  handleCompleted = (e) => {
    e.preventDefault();
    this.props.deleteCompleted();
  };

  render() {
    return (
      <div
        style={
          this.props.items.length ? { display: "flex" } : { display: "none" }
        }
        className="footer"
      >
        <button>
          {this.props.items.filter((item) => !item.flag).length}
          {" item"}
          {this.props.items.filter((item) => !item.flag).length === 1
            ? " left"
            : "s left"}
        </button>
        <FooterMenu
          items={this.props.items}
          handleFilter={this.handleFilter}
          showFilter={this.props.showFilter}
        />

        <ClearButton
          handleCompleted={this.handleCompleted}
          items={this.props.items}
        />
      </div>
    );
  }
}
export default connect(Footer);
