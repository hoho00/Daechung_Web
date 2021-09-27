import Location from "./Location";
import Type from "./Type";
import DateSearching from "./Date";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import {getDefaultState} from "../../common/functions/getDefaultState" 

const SearchBar = (props) => {
  return (
    <Grid container className="searchBarRoot" spacing={2}>
      <Grid item xs={3}>
        <Location setting={props.settingLocal} />
      </Grid>
      <Grid item xs={3}>
        <Type setting={props.settingType} />
      </Grid>
      <Grid item xs={6}>
        <DateSearching settingStart={props.settingStartDate} settingEnd={props.settingEndDate}/>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
