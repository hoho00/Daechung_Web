import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import { TabList } from "@mui/lab";

const MenuSelecterBar = (props) => {
  const [value, setValue] = useState("1");
  const history = useHistory();

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div style={{ marginBottom: "1vh" }}>
      <Box sx={{ width: "100%", typography: "body1", height: "100%" }}>
        <TabContext value={value}>
          <Box>
            <TabList
              onChange={handleChange}
              aria-label="lab API TabList example"
              textColor="inherit"
              indicatorColor="black"
            >
              <Tab
                style={
                  value != 1
                    ? {
                        ...unSelectedSection,
                        borderRadius: "8px 0px 0px 8px",
                      }
                    : {
                        ...selectedSection,
                        borderRadius: "8px 0px 0px 8px",
                      }
                }
                label="지도화면"
                value="1"
                onClick={() =>
                  history.push({
                    pathname: "/home/map_page",
                  })
                }
              />
              <Tab
                style={
                  value != 2
                    ? {
                        ...unSelectedSection,
                        borderRight: "0px",
                        borderLeft: "0px",
                      }
                    : {
                        ...selectedSection,
                        borderRight: "0px",
                        borderLeft: "0px",
                      }
                }
                label="데이터 정리"
                textColor="yellow"
                value="2"
                onClick={() => history.push("/home/data_organize")}
              />
              <Tab
                style={
                  value != 3
                    ? {
                        ...unSelectedSection,
                        borderRadius: "0px 8px 8px 0px",
                      }
                    : {
                        ...selectedSection,
                        borderRadius: "0px 8px 8px 0px",
                      }
                }
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

const selectedSection = {
  background: "#005596",
  border: "1px solid #005596",
  width: "151px",
  height: "5vh",
  fontSize: "21px",
  color: "white",
};

const unSelectedSection = {
  background: "white",
  border: "1px solid #005596",
  width: "151px",
  height: "5vh",
  fontSize: "21px",
  color: "#005596",
};
