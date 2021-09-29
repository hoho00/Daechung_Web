import { Route, Switch } from "react-router-dom";
import { Login } from "./pages";
import Body from "./common/layouts/Body";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Body} />{" "}
      </Switch>
    </div>
  );
}

export default App;
