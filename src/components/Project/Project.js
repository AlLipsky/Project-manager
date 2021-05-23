import React from "react";
import { ProjectContainer } from "./style";

const Project = ({ id, name }) => {
  return (
    <ProjectContainer>
      <p>{id}</p>
      <p>{name}</p>
      <button>Tasks</button>
    </ProjectContainer>
  );
};
export default Project;
