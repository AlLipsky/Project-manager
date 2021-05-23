import { NavLink } from "react-router-dom";
import "./style.css";
import { NavBarContainer } from "./style";

const NavBar = () => {
  return (
    <NavBarContainer>
      <NavLink exact activeClassName={"selected"} to={"/"}>
        <div className="projectHeader">Projects</div>
      </NavLink>
      <NavLink activeClassName={"selected"} to={"/tasks"}>
        <div className="taskHeader">Tasks</div>
      </NavLink>
    </NavBarContainer>
  );
};

export default NavBar;
