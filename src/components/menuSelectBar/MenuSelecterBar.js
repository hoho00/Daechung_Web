import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import { getDefaultState } from "../../common/functions/getDefaultState";

const MenuSelecterBar = (props) => {
  const [value, setValue] = useState("1");
  const history = useHistory();

  const [search, setSearch] = useState(getDefaultState());

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  useEffect(() => { }, [search]);
  return (
    <div>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab
                style={{ background: '#005596', border: '1px solid #005596' }}
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

const selectedSection = {

}

const unSelctedSection = {

}