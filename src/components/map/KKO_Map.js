/*global kakao*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Map = ({ searchResult }) => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    console.log("map : ", searchResult);
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.14505, 129.0363),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    searchResult.map((e) => {
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(Number(e.rp_lat), Number(e.rp_lon)),
      });
      marker.setMap(map);
    });
  }, [searchResult]);

  

  return (
    <div style={{width : "100%", height:"70vh"}}>
      <div id="map" style={{ width: "100%", height: "100%"}}></div>
    </div>
  );
};

export default Map;
