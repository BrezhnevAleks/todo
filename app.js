class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
  }

  render() {
    return (
      <div className="container">
        <h1>todos</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="What needs to be done?"
            id="new-todo"
            className="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
        </form>

        <TodoList items={this.state.items} flagChange={this.handleFlag} />
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
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
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  };

  handleFlag = (e, index) => {
    const { items } = this.state;

    items[index].flag = !items[index].flag;
    this.setState((state) => ({
      items,
    }));
  };
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.value = this.props.items.filter((item) => item.flag).length;
  }

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <LiItem
            flagChange={this.props.flagChange}
            key={item.id}
            text={item.text}
            items={this.props.items}
            index={index}
          />
        ))}
        <span>
          {this.props.items.filter((item) => item.flag).length}
          {" item"}
          {this.props.items.filter((item) => item.flag).length === 1
            ? " left"
            : "s left"}
        </span>
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
        className={
          !!this.props.items[this.props.index].flag ? "active" : "complited"
        }
      >
        <input
          type="checkbox"
          onChange={(e) => this.props.flagChange(e, this.props.index)}
        />
        <label className={"text"}>{this.props.text}</label>
      </li>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("app"));
