import { connect } from "react-redux";
import todos from "../../reducers/todos";
import * as todoActions from "../../actions";

const mapStateToProps = ({ todos }) => ({
  items: todos.items,
});

const mapDispatchToProps = {
  ...todoActions,
};
export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
