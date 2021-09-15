import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Type(props) {
 

  return (
    <div>
        <div style={site}>항목</div>
        <select style={siteSelect}>
            <option value={(e) => {}}>낚시 행랑객 계도</option>
        </select>
    </div>
  );
}

const site = {
    width: "74px",
    height: "33px",
    textAlign: "center",
    font: "normal normal normal 16px/19px NanumGothic",
    letterSpacing: "0px",
    paddingTop: "7px",
    borderRight: "1px solid #5D5D5D",
    float: "left"
}

const siteSelect = {
    width: "90px",
    height: "33px",
    textAlign: "center",
    font: "normal normal normal 16px/19px NanumGothic",
    letterSpacing: "0px",
    paddingTop: "7px",
    float: "left"
}