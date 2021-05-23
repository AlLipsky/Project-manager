import React from "react";
import { ProjectContainer, Button } from "./style";

const Project = ({ id, name }) => {
  return (
    <ProjectContainer>
      <p>{id}</p>
      <p>{name}</p>
      <Button onClick={() => console.log('click')}>Tasks</Button>
    </ProjectContainer>
  );
};
export default Project;
