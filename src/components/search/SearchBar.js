import Location from "./Location";
import Type from "./Type";
import DateSearching from "./Date";
import DateSearchingEnd from "./DateSearchingEnd";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import {getDefaultState} from "../../common/functions/getDefaultState" 

const SearchBar = ({settingLocal, settingType, settingStartDate, settingEndDate}) => {
  useEffect(() => {
    console.log()
  },[])
  return (
    <Grid container className="searchBarRoot" spacing={2}>
      <Grid item xs={3}>
        <Location setting={settingLocal} />
      </Grid>
      <Grid item xs={3}>
        <Type setting={settingType} />
      </Grid>
      <Grid item xs={3}>
        <DateSearching settingStart={settingStartDate} />
      </Grid>
      <Grid item xs={3}>
        <DateSearchingEnd  settingEnd={settingEndDate}/>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
