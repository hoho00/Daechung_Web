import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import List from "@mui/material/List";

import { FixedSizeList } from "react-window";
import { makeStyles, Paper, Typography } from "@material-ui/core";
import { margin, maxHeight } from "@mui/system";
import { ClassNames } from "@emotion/react";

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
  //const listItems = searchResult.map((e) => <li key={e.rp_id}>{e.rp_type}</li>);
  useEffect(() => {
    console.log("lists : ", searchResult);
  }, [searchResult]);

  const useStyles = makeStyles((theme) => ({
    divider: {
      background: theme.palette.grey,
    },
  }));

  return (
    <Box>
      <List
      sx={{
        width: 396,
        bgcolor: "background.paper",
        height: 771,
        position: "relative",
        maxHeight: 771,
        overflow: "auto",
        m: 0,
        p: 0,
        border: "black"
      }}
    >
      {searchResult.map((value) => (
        <Box sx={{border : "1px grey"}}>
          <ListItemButton
            key={value.rp_id}
            onClick={() => console.log("hi")}
            divider={true}
          >
            <Box sx={{ m: 0, p: 0, width: 230 }}>
              <Typography noWrap> 
                {`${value.rp_con1}`}
              </Typography>
              <ListItemText
                //primary={`신고내용 ${value.rp_con1}`}
                secondary={`${value.rp_type}`}
                width="230"
              />
            </Box>

            <Divider orientation="vertical" />
            <Box>
              <ListItemText secondary={`${value.rp_date}`} />
              <ListItemText secondary={`${value.user_nm}`} />
            </Box>
          </ListItemButton>
        </Box>
      ))}
    </List>
    </Box>
    
  );
};

export default RepoprtList;
