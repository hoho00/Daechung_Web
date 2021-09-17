import React from "react";
import { Link, useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

const MenuSelecterBar = (props) => {
  const [value, setValue] = React.useState("1");
  const history = useHistory();

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
              <Tab label="Item One" value="1" onClick={() => history.push("/home/map_page")}/>
              <Tab label="Item Two" value="2" onClick={() => history.push("/home/data_organize")}/>
              <Tab label="Item Three" value="3" onClick={() => history.push("/home/account_manage")}/>
            </TabList>
          </Box>
          <TabPanel value="1"></TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};
export default MenuSelecterBar;
