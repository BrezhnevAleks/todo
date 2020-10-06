class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

        <TodoList items={this.state.items} />
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    };
    this.setState((state) => ({
      items: state.items.concat(newItem),
      text: "",
    }));
  }
}

class LiItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isChecked: false };
    this.handleDone = this.handleDone.bind(this);
  }

  render() {
    return (
      <li
        key={this.key}
        text={this.text}
        className={this.state.isChecked ? "complited" : "active"}
      >
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onClick={this.handleDone}
        />
        <label>{this.props.text}</label>
      </li>
    );
  }

  handleDone(e) {
    this.setState((state) => ({ isChecked: !state.isChecked }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item) => (
          <LiItem key={item.id} text={item.text} />
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById("app"));
