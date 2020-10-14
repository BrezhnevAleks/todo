import { connect } from "react-redux";
import * as todoActions from "../../actions";

const mapStateToProps = (todos) => ({
  items: todos.items,
  allin: todos.allin,
});
const mapDispatchToProps = {
  ...todoActions,
};

export default (container) =>
  connect(mapStateToProps, mapDispatchToProps)(container);
