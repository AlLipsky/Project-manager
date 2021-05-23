import { connect } from "react-redux";
import { projectsSelector } from "../../model/project";
import ProjectList from "./ProjectList";

export default connect((state) => ({
  projects: projectsSelector(state),
}))(ProjectList);
