import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Grid } from "@mui/material";
import { toStringByFormatting } from "../../common/functions/getDefaultState"
import "react-datepicker/dist/react-datepicker.css"
import koLocale from 'date-fns/locale/ko';
import Box from '@mui/material/Box';
import date from "date-and-time";

// import DatePicker from "react-datepicker";

const DateSearchingEnd = ({ settingEnd }) => {
  const endDay = new Date();
  const [endDate, setEndDate] = useState(endDay);

  return (
    <div>

      <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
        <DatePicker
          style={{ height: '35px' }}
          inputFormat="yyyy/MM/dd"
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
            console.log(newValue);
            settingEnd(
              date.format(newValue, "YYYY/MM/DD 23:59")
            );
          }}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <Box sx={{ display: 'flex', alignItems: 'center', height: '50px', justifyContent: 'center' }}>
              <input ref={inputRef} {...inputProps} style={{ height: '35px', textAlign: 'center', marginRight: '-10px' }} />
              {InputProps?.endAdornment}
            </Box>
          )}
        />
      </LocalizationProvider>

      {/* <DatePicker
        selected={endDate}
        onChange={(date) => {
          setEndDate(date);
          settingEnd(
            toStringByFormatting(date, "/"),
          );
        }}



      /> */}




    </div>

  );
};

export default DateSearchingEnd;
