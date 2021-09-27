import { useState, useEffect } from "react";
import Map from "./components/map/KKO_Map";
import Location from "./components/search/Location";
import Report from "./components/report/Report";
import Type from "./components/search/Type";

import { Row } from "reactstrap";
import SearchBar from "./components/search/SearchBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Login } from "./pages";
import Header from "./common/layouts/Header";
import Footer from "./common/layouts/Footer";
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
