import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import List from "@mui/material/List";

import { FixedSizeList } from "react-window";

const renderRow = (props) => {
  const { index, style, s } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        {s && <ListItemText primary={`Item ${s[index]}`} />}
      </ListItemButton>
    </ListItem>
  );
};

const RepoprtList = ({ searchResult }) => {
  const listItems = searchResult.map((e) => <li key={e.rp_id}>{e.rp_type}</li>);
  useEffect(() => {
    console.log("lists : ", searchResult);
  }, [searchResult]);

  return (
    //<ul>{listItems}</ul>
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {searchResult.map((value) => (
        <ListItem key={value.rp_id} disableGutters>
          <ListItemText primary={`Line item ${value.rp_type}`} />
        </ListItem>
      ))}
    </List>
  );
};

export default RepoprtList;
