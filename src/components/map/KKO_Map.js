/*global kakao*/
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

const Map = (props) => {
  const [reports, setReports] = useState([
    {
      rp_id: 23,
      rp_type: "방치 쓰레기",
      rp_date: "2021/09/17 14:20",
      rp_lat: "35.145058189008545",
      rp_lon: "129.03630664406754",
      rp_add: "부산광역시 부산진구 가야3동 산21-10",
      rp_con1: "ㅇㄹㄹㅇㅇ",
      rp_con2: "ㄹㄹㄹㄹㄹ",
      user_seq: 3,
      user_local: "군북1",
      user_nm: "마체테3",
    },
  ]);
  const [searchKeyword, setSearchKeyword] = useState({
    search_type: "전체",
    search_start_date: "2020/10/10 00:00",
    search_end_date: "2022/09/17 10:40",
    search_local: "전체",
  });
  const location = useLocation();

  const getReports = async (s) => {
    //console.log(searchKeyword);
    return await axios
      .post("/report/search", searchKeyword, {
        headers: {
          "content-type": "text/plain",
        },
      })
      .then((e) => {
        s(e.data.data);
      });
  };

  const setKey = (s) => {
    const keys = location.state;
    console.log(keys);
    s({
      search_type: keys.search.search_type,
      search_start_date: keys.search.search_start_date,
      search_end_date: keys.search.search_end_date,
      search_local: keys.search.search_local,
    });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setKey(setSearchKeyword);
    getReports(setReports);
    
    console.log("setting : ", searchKeyword);
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.14505, 129.0363),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    reports.map((e) => {
      console.log("reports :", Number(e.rp_lat), Number(e.rp_lon));
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(Number(e.rp_lat), Number(e.rp_lon)),
      });
      marker.setMap(map);
    });
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "1326px", height: "769px" }}></div>
    </div>
  );
};

export default Map;
