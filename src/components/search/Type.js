import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Type = ({ setting }) => {
  const [type, setType] = useState("전체");

  const handleChange = (event) => {
    setType(event.target.value);
    setting(event.target.value);
  };
  return (
    <div
      style={{
        height: "35px",
        display: "flex",
        width: "164px",
        justifyContent: "center",
        marginRight: "5px",
      }}
    >
      <FormControl>
        <Select
          sx={{
            height: "35px",
            border: "1px solid #5D5D5D",
            width: "164px",
            backgroundColor: "white",
            borderRadius: "0px",
          }}
          value={type}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem value="전체">전체</MenuItem>
          <MenuItem value={"녹조"}>🟢 녹조</MenuItem>
          <MenuItem value={"부유물"}>🔴 부유물</MenuItem>
          <MenuItem value={"방치 쓰레기"}>🟠 방치 쓰레기</MenuItem>
          <MenuItem value={"낚시/행랑객 계도"}>🔵 낚시/행랑객 계도</MenuItem>
          <MenuItem value={"기타사항"}>⚪ 기타사항</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Type;
