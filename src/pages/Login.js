import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common/layouts/Footer";
import Header from "../common/layouts/Header";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { getDefaultState } from "../common/functions/getDefaultState";

const Login = () => {

  const history = useHistory();
  const defaultState = getDefaultState();
  console.log("login : ", defaultState);
  return (
    <div style={container}>
      <div>
        <div>
          <h1 style={title}>대청댐 유역관리</h1>
        </div>
        <div style={{ justifyContent: 'space-between' }}>
          <div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ flexDirection: 'column', display: 'flex', justifyContent: 'space-between' }}>
              <input type="email" placeholder="아이디" style={inputStyle}></input>
              <input type="password" placeholder="비밀번호" style={inputStyle}></input>
            </div>
            <button
              style={loginButton}
              onClick={() =>
                history.push({
                  pathname: "/home/map_page",
                  state: { search: defaultState },
                })
              }
            >
              <Link to="/home/map_page"><h1 style={{ color: 'white', fontSize: '16px' }}>로그인</h1></Link>
            </button>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Login;

const title = {
  color: '#005596',
  fontSize: '65px',
  marginBottom: '77px'
}
const inputStyle = {
  borderRadius: '5px',
  border: '1px solid #5D5D5D',
  height: '49px', width: '265px',
  paddingLeft: '15px'
}
const container = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh'
}
const loginButton = {
  height: '108px', width: '132px',
  background: '#005596',
  borderRadius: '5px',
  border: '1px solid #5D5D5D'
}
