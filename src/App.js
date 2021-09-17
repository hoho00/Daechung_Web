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

const con_style = {
  margin: "55px 90px 55px 90px",
};

const loc = {
  border: "1px solid #5D5D5D",
  width: "166px",
  height: "35px",
};

const type = {
  border: "1px solid #5D5D5D",
  marginLeft: "5px",
  width: "240px",
  height: "35px",
};

const cal = {
  border: "1px solid #5D5D5D",
  marginLeft: "5px",
  width: "391px",
  height: "35px",
};

const reportList = {
  border: "1px solid #5D5D5D",
  width: "396px",
  height: "771px",
};

const maps = {
  border: "1px solid #5D5D5D",
};

const row_Down = {
  marginTop: "22px",
};

export default App;
