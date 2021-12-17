import { Route, Switch } from "react-router-dom";
import { Login } from "./pages";
import Body from "./common/layouts/Body";
import { CssBaseline } from "@material-ui/core";
import React from "react";
import { DownloadImagePage } from "./pages";

function App() {
  return (
    <div>
      {/* <CssBaseline /> */}
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Body} />{" "}
        <Route path="/DownloadImagePage" component={DownloadImagePage} />
      </Switch>
    </div>
  );
}

export default App;
