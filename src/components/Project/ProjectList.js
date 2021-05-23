import Project from "./Project";

const ProjectList = ({ projects }) => {
  return (
    <div>
      {projects &&
        projects.map((item) => <Project id={item.id} name={item.name} />)}
    </div>
  );
};
export default ProjectList;
