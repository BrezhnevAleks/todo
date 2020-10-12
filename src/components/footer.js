import React from "react";
import FooterMenu from "./footermenu.js";
import ClearButton from "./clearbutton.js";

class Footer extends React.Component {
  render() {
    return (
      <div
        style={
          this.props.items.length ? { display: "flex" } : { display: "none" }
        }
        className="footer"
      >
        <button>
          {this.props.items.filter((item) => item.flag).length}
          {" item"}
          {this.props.items.filter((item) => item.flag).length === 1
            ? " left"
            : "s left"}
        </button>
        <FooterMenu
          items={this.props.items}
          handleShow={this.props.handleShow}
          showSwitch={this.props.showSwitch}
        />
        <ClearButton
          items={this.props.items}
          handleComplited={this.props.handleComplited}
        />
      </div>
    );
  }
}
export default Footer;
