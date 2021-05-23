import Project from "./Project";
import {useEffect} from "react"

const ProjectList = ({ projects, getProjectList }) => {
  useEffect(() => {
    getProjectList()
  }, [getProjectList])
  return (
    <div>
      {projects &&
        projects.map((item) => <Project id={item.id} name={item.name} />)}
    </div>
  );
};
export default ProjectList;
