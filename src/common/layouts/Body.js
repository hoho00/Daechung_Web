import React from "react";
import { Route } from "react-router-dom";
import MenuSelecterBar from "../../components/menuSelectBar/MenuSelecterBar";
import { AccountManagePage, DataOrganizePage } from "../../pages";
import { MapPage } from "../../pages/";
import Header from "./Header";

const Body = () => {
  return (
    <div style={container}>
      <Header />
      <div
        style={{
          paddingLeft: "70px",
          paddingRight: "70px",
          paddingTop: "4vh",
          paddingBottom: "5vh",
          width: "100%",
        }}
      >
        <div style={{ heigth: "4vh" }}>
          <MenuSelecterBar />
        </div>
        <div style={{ heigth: "4vh" }}>
          <Route exact path="/home/map_page" component={MapPage} />
          <Route path="/home/data_organize" component={DataOrganizePage} />
          <Route path="/home/account_manage" component={AccountManagePage} />
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
};
const container = {
  height: "100vh",
};
export default Body;
