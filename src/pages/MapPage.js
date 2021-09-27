import React, { useState, useEffect } from "react";
import { getDefaultState } from "../common/functions/getDefaultState";
import Footer from "../common/layouts/Footer";
import Header from "../common/layouts/Header";
import Map from "../components/map/KKO_Map";
import MenuSelecterBar from "../components/menuSelectBar/MenuSelecterBar";
import SearchBar from "../components/search/SearchBar";
const MapPage = () => {
  const [searchResult, setSearchResult] = useState(getDefaultState());
  const [local_, setLocal] = useState("");
  const [type_, setType] = useState("");
  const [startDate_, setStartDate] = useState("");
  const [endDate_, setEndDate] = useState("");

  useEffect(() => {
    console.log(local_, type_, startDate_, endDate_);
  }, [local_, type_, startDate_, endDate_])
  return (
    <div>
      <div>
        <SearchBar settingLocal={setLocal} settingType={setType} settingStartDate={setStartDate} settingEndDate={setEndDate} />
        {/* <Map searchResult = {searchResult}/> */}
        {/* 맵 */}
        <div style={{ width: "1326px", height: "769px", backgroundColor: "yellow" }}></div>
      </div>
    </div>
  );
};

export default MapPage;
