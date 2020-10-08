class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      text: "",
      allin: true,
      elementDisplay: true,
      showSwitch: 1,
    };
  }

  render() {
    return (
      <div className="container">
        <h1>todos</h1>

        <form onSubmit={this.handleSubmit}>
          <div
            className="choose-all"
            onClick={this.handleChangeAll}
            style={
              this.state.items.length ? { opacity: "1" } : { opacity: "0" }
            }
            style={this.state.allin ? { color: "" } : { color: "#737373" }}
          >
            <span className="marker">❯</span>
          </div>
          <input
            placeholder="What needs to be done?"
            id="new-todo"
            className="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </form>

        <TodoList
          changeDisplay={this.state.changeDisplay}
          items={this.state.items}
          flagChange={this.handleFlag}
          deleteElement={this.handleDelete}
          handleNewSubmit={this.handleNewSubmit}
          handleNewText={this.handleNewText}
          handleNewChange={this.handleNewChange}
          handleNewTextDeactive={this.handleNewTextDeactive}
        />
        <Footer
          showSwitch={this.state.showSwitch}
          items={this.state.items}
          handleShow={this.handleShow}
          handleComplited={this.handleComplited}
        />
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleNewChange = (e, index) => {
    e.preventDefault();
    let { items } = this.state;

    items[index].formText = e.target.value;
    this.setState((state) => ({ items }));
  };

  handleNewSubmit = (e, index) => {
    e.preventDefault();
    let { items } = this.state;
    items[index].formDisplay = !items[index].formDisplay;
    items[index].text = items[index].formText;
    this.setState((state) => ({
      items,
    }));
  };

  handleNewText = (e, index) => {
    e.preventDefault();

    let { items } = this.state;
    items.forEach((item) => (item.formDisplay = false));
    this.setState((state) => ({ items }));
    items[index].formDisplay = !items[index].formDisplay;
    this.setState((state) => ({ items }));
  };

  handleNewTextDeactive = (e) => {
    e.preventDefault();
    let { items } = this.state;
    items.forEach((item) =>
      item.formDisplay === true
        ? (item.formDisplay = false)
        : (item.formDisplay = item.formDisplay)
    );
    this.setState((state) => ({ items }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
      flag: true,
      display: "flex",
      formDisplay: false,
      formText: this.state.text,
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  };

  handleFlag = (e, index) => {
    const { items } = this.state;
    let { allin } = this.state;
    items[index].flag = !items[index].flag;
    this.setState((state) => ({
      items,
    }));
    if (!this.state.items.filter((item) => item.flag).length) {
      allin = false;
    } else {
      allin = true;
    }
    this.setState((state) => ({ allin }));
  };

  handleChangeAll = (e) => {
    const { items } = this.state;
    let { allin } = this.state;
    items.forEach((item) => {
      item.flag = !allin;
    });
    allin = !allin;
    this.setState((state) => ({
      items,
    }));
    this.setState((state) => ({
      allin,
    }));
  };

  handleShow = (e, key) => {
    const { items } = this.state;

    items.forEach((item) => {
      switch (key) {
        case 1:
          item.display = "flex";
          this.setState((state) => ({
            showSwitch: 1,
          }));
          break;
        case 2:
          item.display = item.flag ? "flex" : "none";
          this.setState((state) => ({
            showSwitch: 2,
          }));
          break;
        case 3:
          item.display = item.flag ? "none" : "flex";
          this.setState((state) => ({
            showSwitch: 3,
          }));
          break;
      }
      this.setState((state) => ({ items }));
    });
  };

  handleDelete = (e, index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState((state) => ({
      items,
    }));
  };

  handleComplited = (e) => {
    let { items } = this.state;
    items = items.filter((item) => item.flag);
    this.setState((state) => ({
      items,
    }));
  };
}

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
          />
        ))}
      </ul>
    );
  }
}

class LiItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li
        key={this.key}
        text={this.text}
        style={{ display: this.props.items[this.props.index].display }}
        className={
          !!this.props.items[this.props.index].flag ? "active" : "complited"
        }
      >
        <input
          className="checkbox"
          type="checkbox"
          checked={!this.props.items[this.props.index].flag}
          onChange={(e) => this.props.flagChange(e, this.props.index)}
        />
        <div
          className={"item"}
          onDoubleClick={(e) => this.props.handleNewText(e, this.props.index)}
          onClick={(e) => this.props.handleNewTextDeactive(e)}
        >
          <form>
            <label className={"text"}>{this.props.text}</label>
          </form>
          <button
            onClick={(e) => this.props.deleteElement(e, this.props.index)}
            className="destroy"
          ></button>
        </div>
        <form
          onSubmit={(e) => this.props.handleNewSubmit(e, this.props.index)}
          onKeyDown={(e) => {
            if (e.keyCode === 27) this.props.handleNewText(e, this.props.index);
          }}
        >
          <input
            onSubmit={(e) => this.props.handleNewText(e, this.props.index)}
            onChange={(e) => this.props.handleNewChange(e, this.props.index)}
            onKeyDown={(e) => {
              if (e.keyCode === 27)
                this.props.handleNewText(e, this.props.index);
            }}
            type="text"
            className={"change-item"}
            style={
              this.props.items[this.props.index].formDisplay
                ? { display: "block" }
                : { display: "none" }
            }
            autoFocus={this.props.items[this.props.index].formDisplay}
            value={this.props.items[this.props.index].formText}
          />
        </form>
      </li>
    );
  }
}

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

class FooterMenu extends React.Component {
  render() {
    return (
      <ul className="footer-menu">
        <button
          className={this.props.showSwitch === 1 ? "active-button" : ""}
          onClick={(e) => this.props.handleShow(e, 1)}
        >
          All
        </button>
        <button
          className={this.props.showSwitch === 2 ? "active-button" : ""}
          onClick={(e) => this.props.handleShow(e, 2)}
        >
          Active
        </button>
        <button
          className={this.props.showSwitch === 3 ? "active-button" : ""}
          onClick={(e) => this.props.handleShow(e, 3)}
        >
          Complited
        </button>
      </ul>
    );
  }
}

class ClearButton extends React.Component {
  render() {
    return (
      <button
        style={
          this.props.items.filter((item) => !item.flag).length
            ? { opacity: "1" }
            : { opacity: "0" }
        }
        onClick={(e) => this.props.handleComplited(e)}
      >
        Clear completed [{this.props.items.filter((item) => !item.flag).length}]
      </button>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("app"));
