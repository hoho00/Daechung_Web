import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Grid } from "@mui/material";
import {toStringByFormatting} from "../../common/functions/getDefaultState"

const DateSearchingEnd = ({settingEnd}) => {
  const endDay = new Date();
  const [endDate, setEndDate] = useState(endDay);

  return (
      <Grid item xs={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="끝 날짜"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue);
              settingEnd(
                toStringByFormatting(newValue, "/"),
              );
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Grid>
  );
};

export default DateSearchingEnd;
