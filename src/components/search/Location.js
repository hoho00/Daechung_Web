import { useState, useEffect } from "react";
import Type from "./Type";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid"



export default function Location(props) {
  const [location, setLocation] = useState("전체");

  const handleChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div style={props.style}>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">권역</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={location}
            onChange={handleChange}
          >
            <MenuItem value="전체">
              <em>전체</em>
            </MenuItem>
            <MenuItem value={"문의"}>문의</MenuItem>
            <MenuItem value={"화남1"}>화남1</MenuItem>
            <MenuItem value={"화남2"}>화남2</MenuItem>
            <MenuItem value={"세천"}>세천</MenuItem>
            <MenuItem value={"군북1"}>군북1</MenuItem>
            <MenuItem value={"군북2"}>군북2</MenuItem>
            <MenuItem value={"군북3"}>군북3</MenuItem>
            <MenuItem value={"군북4"}>군북4</MenuItem>
            <MenuItem value={"군북5"}>군북5</MenuItem>
            <MenuItem value={"수북"}>수북</MenuItem>
            <MenuItem value={"안남"}>안남</MenuItem>
            <MenuItem value={"청성"}>청성</MenuItem>
          </Select>
        </FormControl>
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