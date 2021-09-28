import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Grid } from "@mui/material";
import {toStringByFormatting} from "../../common/functions/getDefaultState"

const DateSearching = ({settingStart}) => {
  const startDay = new Date();
  startDay.setMonth(startDay.getMonth() - 1);
  const [startDate, setStartDate] = useState(startDay);


  return (
    //<Grid container className="searchBar" spacing={2}>
      <Grid item xs={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="시작 날짜"
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
              settingStart(
                toStringByFormatting(newValue, "/"),
              )
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>

    //</Grid>
  );
};

export default DateSearching;
