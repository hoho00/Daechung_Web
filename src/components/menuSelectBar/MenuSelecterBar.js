import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const MenuSelecterBar = (props) => {
  function leftPad(value) {
    if (value >= 10) {
      return value;
    }
    return `0${value}`;
  }
  function toStringByFormatting(source, delimiter = "-") {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());
    return [year, month, day].join(delimiter);
  }
  const [value, setValue] = useState("1");
  const history = useHistory();
  const startDay = new Date();
  const endDay = new Date();
  startDay.setMonth(startDay.getMonth() - 1);
  const [search, setSearch] = useState({
    search_type: "전체",
    search_start_date: toStringByFormatting(startDay, '/'),
    search_end_date: toStringByFormatting(endDay, '/'),
    search_local: "전체",
  });
  

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
    switch (newValue) {
      case 1: {
        history.push("/home/map_page");
        break;
      }
      case 2: {
        history.push("/home/data_organize");
        break;
      }
      case 3: {
        history.push("/home/account_manage");
        break;
      }
      default:
        break;
    }
  };
  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                label="지도화면"
                value="1"
                onClick={() =>
                  history.push({
                    pathname: "/home/map_page",
                    state: { search: search },
                  })
                }
              />
              <Tab
                label="데이터 정리"
                value="2"
                onClick={() => history.push("/home/data_organize")}
              />
              <Tab
                label="계정 관리"
                value="3"
                onClick={() => history.push("/home/account_manage")}
              />
            </TabList>
          </Box>
        </TabContext>
      </Box>
    </div>
  );
};
export default MenuSelecterBar;
