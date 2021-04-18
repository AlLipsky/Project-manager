import "./App.css";
import { connect } from "react-redux";
import { projectsSelector } from "./model/project";
import { tasksSelector } from "./model/task";

const App = ({ projects, tasks }) => (
  <div>
    {projects.map((item) => item.name)}
    {tasks.map((item) => item.name)}
  </div>
);
export default connect((state) => ({
  projects: projectsSelector(state),
  tasks: tasksSelector(state),
}))(App);
