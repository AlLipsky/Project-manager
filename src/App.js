import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProjectList from "./components/Project";
import TaskList from "./components/Task";

const App = ({ projects, tasks }) => (
  <div>
    <NavBar />
    <Switch>
      <Route exact path={"/"}>
        <ProjectList />
      </Route>
      <Route path={"/tasks"}>
        <TaskList />
      </Route>
      <Route path={"*"}>404</Route>
    </Switch>
  </div>
);
export default App;
