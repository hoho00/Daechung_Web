import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { Grid } from "@mui/material";
import { toStringByFormatting } from "../../common/functions/getDefaultState"
import koLocale from 'date-fns/locale/ko';
import Box from '@mui/material/Box';

const DateSearching = ({ settingStart }) => {
  const startDay = new Date();
  startDay.setMonth(startDay.getMonth() - 1);
  const [startDate, setStartDate] = useState(startDay);


  return (
    <div>

      <LocalizationProvider dateAdapter={AdapterDateFns} locale={koLocale}>
        <DatePicker
          style={{ height: '35px' }}
          inputFormat="yyyy/MM/dd"
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
            settingStart(
              toStringByFormatting(newValue, "/"),
            )
          }}
          renderInput={({ inputRef, inputProps, InputProps }) => (
            <Box sx={boxStyle}>
              <input ref={inputRef} {...inputProps} style={inputStyle} />
              {InputProps?.endAdornment}
            </Box>
          )}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DateSearching;

const boxStyle = { display: 'flex', alignItems: 'center', height: '50px', justifyContent: 'center' }

const inputStyle = { height: '35px', textAlign: 'center', marginRight: '-10px' }