import { useState } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import MenuSelecterBar from "../../components/menuSelectBar/MenuSelecterBar";
import { AccountManagePage, DataOrganizePage, Home } from "../../pages";
import { MapPage } from "../../pages/";
import Footer from "./Footer";
import Header from "./Header";

const Body = () => {
  return (
    <div>
      <Header />
      <div>
        <MenuSelecterBar />
      </div>
      <div>
        <Route exact path="/home/map_page" component={MapPage} />
        <Route path="/home/data_organize" component={DataOrganizePage} />
        <Route path="/home/account_manage" component={AccountManagePage} />
      </div>

      <Footer />
    </div>
  );
};
export default Body;
