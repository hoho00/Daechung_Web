import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Location(props) {
 

  return (
    <div>
        <div style={site}>권역</div>
        <select style={siteSelect}>
            <option value=""></option>
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