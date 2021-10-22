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
      center: new kakao.maps.LatLng(36.414685, 127.559674),
      level: 8,
    };
    const map = new kakao.maps.Map(container, options);

    searchResult.map((e) => {
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(Number(e.rp_lat), Number(e.rp_lon)),
      });
      marker.setMap(map);

      var infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;">${
          e.rp_type
        }<br><a href="https://map.kakao.com/link/to/${e.rp_con1},${Number(
          e.rp_lat
        )},${Number(
          e.rp_lon
        )}" style="color:blue" target="_blank">길찾기</a> </div>`,
      });
      infowindow.open(map, marker);
      // kakao.maps.event.addListener(
      //   marker,
      //   "mouseover",
      //   makeOverListener(map, marker, infowindow)
      // );
      // kakao.maps.event.addListener(
      //   marker,
      //   "mouseout",
      //   makeOutListener(infowindow)
      // );
    });
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
  }, [searchResult]);

  return (
    <div style={{ width: "100%", height: "70vh" }}>
      <div id="map" style={{ width: "100%", height: "100%" }}></div>
    </div>
  );
};

export default Map;
