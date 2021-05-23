import { connect } from "react-redux";
import { tasksSelector } from "../../model/task";
import TaskList from "./TaskList";

export default connect((state) => ({
  tasks: tasksSelector(state),
}))(TaskList);
