import React from "react";
import FooterMenu from "../../components/footermenu.js";
import ClearButton from "../../components/clearbutton.js";
import connect from "./connect";
import "./style.css";

class Footer extends React.Component {
  handleFilter = (e, index) => {
    e.preventDefault();
    this.props.changeFilter(index);
  };

  handleCompleted = (e) => {
    e.preventDefault();
    this.props.deleteCompleted();
  };

  render() {
    const { items, showFilter } = this.props;
    if (items.length) {
      return (
        <div
          style={items.length ? { display: "flex" } : { display: "none" }}
          className="footer"
        >
          <button>
            {items.filter((item) => !item.flag).length}
            {" item"}
            {items.filter((item) => !item.flag).length === 1
              ? " left"
              : "s left"}
          </button>
          <FooterMenu
            items={items}
            handleFilter={this.handleFilter}
            showFilter={showFilter}
          />
          {!!items.filter((item) => item.flag).length && (
            <ClearButton handleCompleted={this.handleCompleted} items={items} />
          )}
        </div>
      );
    }
    return null;
  }
}

export default connect(Footer);
