import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Grid } from "@mui/material";

const DateSearching = () => {
  const startDay = new Date();
  const endDay = new Date();
  startDay.setMonth(startDay.getMonth() - 1);
  const [startDate, setStartDate] = useState(startDay);
  const [endDate, setEndDate] = useState(endDay);

  return (
    <Grid container className="searchBar" spacing={2}>
      <Grid item xs={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="시작 날짜"
            value={startDate}
            onChange={(newValue) => {
              console.log(newValue);
              setStartDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>

      <Grid item xs={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="끝 날짜"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
    </Grid>
  );
};

export default DateSearching;
