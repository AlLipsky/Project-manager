import { connect } from "react-redux";
import { projectsSelector, getProjectList } from "../../model/project";
import ProjectList from "./ProjectList";

export default connect((state) => ({
  projects: projectsSelector(state),
}), {getProjectList})(ProjectList);
