/*global kakao*/
import React, { useEffect } from "react";

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

    var mapTypeControl = new kakao.maps.MapTypeControl();

    // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
    // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPLEFT);

    // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
    var zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
    //clusterer
    var clustererGreenAlgae = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 5, // 클러스터 할 최소 지도 레벨
      texts: ["녹조"], // texts는 ['삐약', '꼬꼬', '꼬끼오', '치멘'] 이렇게 배열로도 설정할 수 있다
    });
    var clustererFloatingMatters = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 5, // 클러스터 할 최소 지도 레벨
      texts: ["부유물"], // texts는 ['삐약', '꼬꼬', '꼬끼오', '치멘'] 이렇게 배열로도 설정할 수 있다
    });
    var clustererTrash = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 5, // 클러스터 할 최소 지도 레벨
      texts: ["방치 쓰레기"], // texts는 ['삐약', '꼬꼬', '꼬끼오', '치멘'] 이렇게 배열로도 설정할 수 있다
    });
    var clustererFishing = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 5, // 클러스터 할 최소 지도 레벨
      texts: ["낚시/행랑객"], // texts는 ['삐약', '꼬꼬', '꼬끼오', '치멘'] 이렇게 배열로도 설정할 수 있다
    });
    var clustererEtc = new kakao.maps.MarkerClusterer({
      map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
      averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
      minLevel: 5, // 클러스터 할 최소 지도 레벨
      texts: ["기타사항"], // texts는 ['삐약', '꼬꼬', '꼬끼오', '치멘'] 이렇게 배열로도 설정할 수 있다
    });

    //markers
    var markersGreenAlgae = searchResult.map((e) => {
      if (e.rp_type === "녹조") {
        var imageSrc = "/img/green_algae.png", // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(25, 35); // 마커이미지의 크기입니다
        //imageOption = { offset: new kakao.maps.Point(13, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize
          //imageOption
        );
        //markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(Number(e.rp_lat), Number(e.rp_lon)),
          image: markerImage,
        });
        marker.setMap(map);
        marker.setMap(map);
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="margin:3px; height:150px; width:260px">
          신고 항목 : ${e.rp_type} <br>
          신고 권역 : ${e.user_local} <br>
          신고 주소 : ${e.rp_add} <br>
          신고 날짜 : ${e.rp_date}
          <a href="https://map.kakao.com/link/to/${e.rp_con1},${Number(
            e.rp_lat
          )},${Number(
            e.rp_lon
          )}" style="color:blue" target="_blank">길찾기</a> </div>`,
          removable: true,
        });
        kakao.maps.event.addListener(
          marker,
          "click",
          makeOverListener(map, marker, infowindow)
        );
        return marker;
      }
    });
    var markersFloatingMatters = searchResult.map((e) => {
      if (e.rp_type === "부유물") {
        var imageSrc = "/img/floating_matter.png", // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(25, 35); // 마커이미지의 크기입니다
        //imageOption = { offset: new kakao.maps.Point(8, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize
          //imageOption
        );
        //markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(Number(e.rp_lat), Number(e.rp_lon)),
          image: markerImage,
        });
        marker.setMap(map);
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="margin:3px; height:150px; width:260px">
          신고 항목 : ${e.rp_type} <br>
          신고 권역 : ${e.user_local} <br>
          신고 주소 : ${e.rp_add} <br>
          신고 날짜 : ${e.rp_date}
          <a href="https://map.kakao.com/link/to/${e.rp_con1},${Number(
            e.rp_lat
          )},${Number(
            e.rp_lon
          )}" style="color:blue" target="_blank">길찾기</a> </div>`,
          removable: true,
        });
        kakao.maps.event.addListener(
          marker,
          "click",
          makeOverListener(map, marker, infowindow)
        );
        return marker;
      }
    });
    var markersTrash = searchResult.map((e) => {
      if (e.rp_type === "방치 쓰레기") {
        var imageSrc = "/img/trash.png", // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(25, 35); // 마커이미지의 크기입니다
        //imageOption = { offset: new kakao.maps.Point(13, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize
          //imageOption
        );
        //markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(Number(e.rp_lat), Number(e.rp_lon)),
          image: markerImage,
        });
        marker.setMap(map);
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="margin:3px; height:150px; width:260px">
          신고 항목 : ${e.rp_type} <br>
          신고 권역 : ${e.user_local} <br>
          신고 주소 : ${e.rp_add} <br>
          신고 날짜 : ${e.rp_date}
          <a href="https://map.kakao.com/link/to/${e.rp_con1},${Number(
            e.rp_lat
          )},${Number(
            e.rp_lon
          )}" style="color:blue" target="_blank">길찾기</a> </div>`,
          removable: true,
        });
        kakao.maps.event.addListener(
          marker,
          "click",
          makeOverListener(map, marker, infowindow)
        );
        return marker;
      }
    });
    var markersFishing = searchResult.map((e) => {
      if (e.rp_type === "낚시/행랑객 계도") {
        var imageSrc = "/img/fishing.png", // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(25, 35); // 마커이미지의 크기입니다
        //imageOption = { offset: new kakao.maps.Point(13, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize
          //imageOption
        );
        //markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(Number(e.rp_lat), Number(e.rp_lon)),
          image: markerImage,
        });
        marker.setMap(map);
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="margin:3px; height:150px; width:260px">
          신고 항목 : ${e.rp_type} <br>
          신고 권역 : ${e.user_local} <br>
          신고 주소 : <br> ${e.rp_add} <br>
          신고 날짜 : ${e.rp_date}
          <a href="https://map.kakao.com/link/to/${e.rp_con1},${Number(
            e.rp_lat
          )},${Number(
            e.rp_lon
          )}" style="color:blue" target="_blank">길찾기</a> </div>`,
          removable: true,
        });
        kakao.maps.event.addListener(
          marker,
          "click",
          makeOverListener(map, marker, infowindow)
        );
        return marker;
      }
    });
    var markersEtc = searchResult.map((e) => {
      if (e.rp_type === "기타사항") {
        var imageSrc = "/img/etc.png", // 마커이미지의 주소입니다
          imageSize = new kakao.maps.Size(25, 35); // 마커이미지의 크기입니다
        //imageOption = { offset: new kakao.maps.Point(13, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize
          //imageOption
        );
        //markerPosition = new kakao.maps.LatLng(37.54699, 127.09598); // 마커가 표시될 위치입니다
        var marker = new kakao.maps.Marker({
          map: map,
          position: new kakao.maps.LatLng(Number(e.rp_lat), Number(e.rp_lon)),
          image: markerImage,
        });
        marker.setMap(map);
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div style="margin:3px; height:150px; width:260px">
          신고 항목 : ${e.rp_type} <br>
          신고 권역 : ${e.user_local} <br>
          신고 주소 : ${e.rp_add} <br>
          신고 날짜 : ${e.rp_date}
          <a href="https://map.kakao.com/link/to/${e.rp_con1},${Number(
            e.rp_lat
          )},${Number(
            e.rp_lon
          )}" style="color:blue" target="_blank">길찾기</a> </div>`,
          removable: true,
        });
        kakao.maps.event.addListener(
          marker,
          "click",
          makeOverListener(map, marker, infowindow)
        );
        return marker;
      }
    });

    clustererGreenAlgae.addMarkers(markersGreenAlgae);
    clustererFloatingMatters.addMarkers(markersFloatingMatters);
    clustererTrash.addMarkers(markersTrash);
    clustererFishing.addMarkers(markersFishing);
    clustererEtc.addMarkers(markersEtc);

    kakao.maps.event.addListener(
      clustererFloatingMatters,
      "clusterclick",
      function (cluster) {
        console.log(cluster.getMarkers());
      }
    );

    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
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
