import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import sha256 from "sha256";

const Login = () => {
  const [adminId, setAdminId] = useState("");
  const [adminPwd, setAdminPwd] = useState("");
  const [inputId, setInputId] = useState("");
  const [inputPwd, setInputPwd] = useState("");
  const loginAdmin = () => {
    if (adminId === inputId && adminPwd === sha256(inputPwd)) {
      //alert("로그인 성공!!");
      history.push({
        pathname: "/home/map_page",
      });
    } else {
      alert("잘못된 로그인 정보 입니다. 다시 입력해 주시길 바랍니다.");
    }
  };
  const handleIdChange = (e) => {
    setInputId(e.target.value);
  };
  const handlePwdChange = (e) => {
    setInputPwd(e.target.value);
  };
  const history = useHistory();

  useEffect(() => {
    axios.get(process.env.REACT_API_HOST + "/user").then((e) => {
      e.data.data.map((e) => {
        if (e.user_seq === 999) {
          setAdminId(e.user_id);
          setAdminPwd(e.user_pwd);
        }
      });
    });
  }, []);
  return (
    <div style={container}>
      <div>
        <div>
          <h1 style={title}>대청댐 유역관리</h1>
        </div>
        <div style={{ justifyContent: "space-between" }}>
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                flexDirection: "column",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <input
                value={inputId}
                onChange={handleIdChange}
                type="email"
                placeholder="아이디"
                style={inputStyle}
              ></input>
              <input
                value={inputPwd}
                onChange={handlePwdChange}
                type="password"
                placeholder="비밀번호"
                style={inputStyle}
              ></input>
            </div>
            <button style={loginButton} onClick={() => loginAdmin()}>
              <h1 style={{ color: "white", fontSize: "16px" }}>로그인</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

const title = {
  color: "#005596",
  fontSize: "65px",
  marginBottom: "77px",
};
const inputStyle = {
  borderRadius: "5px",
  border: "1px solid #5D5D5D",
  height: "49px",
  width: "265px",
  paddingLeft: "15px",
};
const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};
const loginButton = {
  height: "108px",
  width: "132px",
  background: "#005596",
  borderRadius: "5px",
  border: "1px solid #5D5D5D",
};
