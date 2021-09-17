import React, { useState } from "react";
import Footer from "../common/layouts/Footer";
import Header from "../common/layouts/Header";
import Map from "../components/map/KKO_Map";
import MenuSelecterBar from "../components/menuSelectBar/MenuSelecterBar";
import SearchBar from "../components/search/SearchBar";
const MapPage = () => {
  const [local_, setLocal] = useState("");
  const [type_, setType] = useState("");
  const [startDate_, setStartDate] = useState("");
  const [endDate_, setEndDate] = useState("");
  return (
    <div>
      <div>
        <SearchBar />
        <Map />
      </div>
    </div>
  );
};

export default MapPage;
