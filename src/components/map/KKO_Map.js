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
    var clusterer = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 5, // 클러스터 할 최소 지도 레벨
    });

    var markers = searchResult.map((e) => {
      const marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(Number(e.rp_lat), Number(e.rp_lon)),
      });
      marker.setMap(map);
      //clusterer.addMarkers(marker);

      var infowindow = new kakao.maps.InfoWindow({
        content: `<div style="padding:5px;">
        신고 항목 : ${e.rp_type} <br>
        신고 권역 : ${e.user_local} <br>
        신고 주소 : ${e.rp_add} <br>
        신고 날짜 : ${e.rp_date}
        <br><a href="https://map.kakao.com/link/to/${e.rp_con1},${Number(
          e.rp_lat
        )},${Number(
          e.rp_lon
        )}" style="color:blue" target="_blank">길찾기</a> </div>`,
        removable: true,
      });
      //infowindow.open(map, marker);
      kakao.maps.event.addListener(
        marker,
        "click",
        makeOverListener(map, marker, infowindow)
      );
      // kakao.maps.event.addListener(
      //   marker,
      //   "mouseout",
      //   makeOutListener(infowindow)
      // );
      return marker;
    });
    clusterer.addMarkers(markers);

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
