import { useState, useEffect } from "react";
import Location from "./Location";
import Type from "./Type";
import DateSearching from "./Date";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid"

const SearchBar = () => {
  
  return (
    <Grid container className="searchBarRoot" spacing={2}>
      <Grid item xs={3}>
        <Location />
      </Grid>
      <Grid item xs={3}>
        <Type />
      </Grid>
      <Grid item xs={6}>
        <DateSearching />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
