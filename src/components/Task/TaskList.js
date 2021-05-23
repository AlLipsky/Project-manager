import React from "react";

const TaskList = ({ tasks }) => {
  return <div>{tasks.map((task) => task.name)}</div>;
};
export default TaskList;
