/*global kakao*/ 
import React, { useEffect } from 'react'

const KkoMap=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(36.47769, 127.48078),
      level: 3
    };
    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(36.47769, 127.48078); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
    marker.setMap(map);

    }, [])


    return (
        <div>
        	<div id="map" style={{width:"1326px", height:"769px"}}></div> 
        </div>
    )
}

export default KkoMap;