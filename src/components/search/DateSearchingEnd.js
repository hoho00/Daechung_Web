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

// import DatePicker from "react-datepicker";

const DateSearchingEnd = ({ settingEnd }) => {
  const endDay = new Date();
  endDay.setMonth(endDay.getMonth());
  const [endDate, setEndDate] = useState(endDay);

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>

      <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
        <DatePicker
          style={{ height: '35px' }}
          inputFormat="yyyy/MM/dd"
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
            settingEnd(
              toStringByFormatting(newValue, "/"),
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
