import React, { useState, useEffect } from "react";
import Map from "../components/map/KKO_Map";
import SearchBar from "../components/search/SearchBar";
import axios from "axios";
import Box from "@mui/material/Box";
import ReportList from "../components/reportList/ReportList";
import date from "date-and-time";
import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";

const endDay = new Date();
const startDay = new Date();

startDay.setMonth(startDay.getMonth() - 1);
const MapPage = () => {
  const [searchResult, setSearchResult] = useState({
    search_type: "전체",
    search_start_date: date.format(startDay, "YYYY/MM/DD"),
    search_local: "전체",
    search_end_date: date.format(endDay, "YYYY/MM/DD"),
  });
  const [local_, setLocal] = useState("");
  const [type_, setType] = useState("");
  const [startDate_, setStartDate] = useState("");
  const [endDate_, setEndDate] = useState("");

  const [reports, setReports] = useState([]);
  const [cluster, setCluster] = useState([]);

  const getReports = () => {
    if (searchResult.search_end_date === "") {
      setSearchResult({
        ...searchResult,
        search_end_date: date.format(endDay, "YYYY/MM/DD 23:59"),
      });
    }
    console.log(searchResult);
    axios
      .post("/report/search", searchResult, {
        headers: {
          "content-type": "text/plain",
        },
      })
      .then((e) => {
        setReports(e.data.data);
      });
  };
  useEffect(() => {
    getReports();
    console.log("default search result no array: ", searchResult);
  }, []);

  useEffect(() => {
    getReports();
    console.log("default search result : ", searchResult);
  }, [searchResult]);

  useEffect(() => {
    //getReports();
    console.log(local_, type_, startDate_, endDate_);
    setSearchResult({ ...searchResult, search_local: local_ });
  }, [local_]);

  useEffect(() => {
    //getReports();
    console.log(local_, type_, startDate_, endDate_);
    setSearchResult({ ...searchResult, search_type: type_ });
  }, [type_]);

  useEffect(() => {
    //getReports();
    console.log(local_, type_, startDate_, endDate_);
    setSearchResult({ ...searchResult, search_start_date: startDate_ });
  }, [startDate_]);

  useEffect(() => {
    //getReports();
    console.log(local_, type_, startDate_, endDate_);
    setSearchResult({ ...searchResult, search_end_date: endDate_ });
  }, [endDate_]);

  useEffect(() => {
    console.log("clusterer : ", cluster);
  }, [cluster]);

  return (
    <>
      <Box style={{ flexDirection: "row", display: "flex", height: "8vh" }}>
        <SearchBar
          settingLocal={setLocal}
          settingType={setType}
          settingStartDate={setStartDate}
          settingEndDate={setEndDate}
        />
        <label>
          <IconButton component="span" onClick={getReports}>
            <RefreshIcon />
          </IconButton>
        </label>
      </Box>

      <Box style={{ padding: "0" }} sx={{ border: 1 }}>
        <Box
          style={{
            flexDirection: "row",
            display: "flex",
            padding: "0",
            border: "black",
          }}
        >
          <Box style={{ height: "100%" }}>
            <ReportList searchResult={reports} clustererSelection={cluster} />
          </Box>
          <Map searchResult={reports} clustererSelection={setCluster} searchType={searchResult} />
        </Box>
      </Box>
    </>
  );
};

export default MapPage;
