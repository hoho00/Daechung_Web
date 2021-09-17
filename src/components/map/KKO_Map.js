/*global kakao*/
import axios from "axios";
import React, { useEffect, useState } from "react";

const Map = (props) => {
  const [reports, setReports] = useState([
    {
      "rp_id": 23,
      "rp_type": "방치 쓰레기",
      "rp_date": "2021/09/17 14:20",
      "rp_lat": "35.145058189008545",
      "rp_lon": "129.03630664406754",
      "rp_add": "부산광역시 부산진구 가야3동 산21-10",
      "rp_con1": "ㅇㄹㄹㅇㅇ",
      "rp_con2": "ㄹㄹㄹㄹㄹ",
      "user_seq": 3,
      "user_local": "군북1",
      "user_nm": "마체테3"
  },
  {
      "rp_id": 2,
      "rp_type": "방치 쓰레기",
      "rp_date": "2021/09/09 10:44",
      "rp_lat": "35.14808066437207",
      "rp_lon": "129.03312530368567",
      "rp_add": "부산광역시 부산진구 가야동 459-10",
      "rp_con1": "신고내용신고내용신고내용신고내용신고내용신고내용신고내용신고내용신고내용",
      "rp_con2": "조치사항조치사항조치사항조치사항조치사항조치사항",
      "user_seq": 1,
      "user_local": "문의",
      "user_nm": "updatedName"
  },
  {
      "rp_id": 1,
      "rp_type": "방치 쓰레기",
      "rp_date": "2021/07/09 10:40",
      "rp_lat": "35.1450502180419",
      "rp_lon": "129.03630640357733",
      "rp_add": "부산광역시 부산진구 가야3동 산21-10",
      "rp_con1": "신고내용신고내용신고내용신고내용신고내용신고내용신고내용신고내용신고내용",
      "rp_con2": "조치사항조치사항조치사항조치사항조치사항조치사항",
      "user_seq": 1,
      "user_local": "문의",
      "user_nm": "updatedName"
  }
  ]);
  const [searchKeyword, setSearchKeyword] = useState({
    search_type: "방치 쓰레기",
    search_start_date: "2020/10/10 00:00",
    search_end_date: "2022/09/09 10:40",
    search_local: "전체",
  });

  const getReports = async (s) => {
    //console.log(searchKeyword);
    return await axios.post('/report/search', searchKeyword, {
      "headers" : {
        "content-type": "text/plain",
      }
    }).then((e) => {
      s(e.data.data);
      console.log(e.data.data);
    })
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.14505, 129.0363),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);
    //await getReports(setReports);
    reports.map((e) => {
      console.log("reports :", Number(e.rp_lat), Number(e.rp_lon));
      const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(Number(e.rp_lat), Number(e.rp_lon)),
      });
      marker.setMap(map);
    });
  }, [reports]);

  return (
    <div>
      <div id="map" style={{ width: "1326px", height: "769px" }}></div>
    </div>
  );
};

export default Map;
