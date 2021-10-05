import Location from "./Location";
import Type from "./Type";
import DateSearching from "./Date";
import DateSearchingEnd from "./DateSearchingEnd";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

const SearchBar = ({ settingLocal, settingType, settingStartDate, settingEndDate }) => {

  return (
      <div style={{ display: 'flex', marginBottom: '1vh' }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>

          <div style={typeTitle}>권역</div>

          <Location setting={settingLocal} />
          <div style={typeTitle}>항목</div>

          <Type setting={settingType} />
          <div style={typeTitle}>일시</div>
          <DateSearching settingStart={settingStartDate} />
          <div style={{ marginRight: '20px', marginLeft: '20px', fontSize: '20px' }}>~</div>
          <DateSearchingEnd settingEnd={settingEndDate} />
        </div>
      </div>
  );
};

export default SearchBar;

const typeTitle = {
  border: '1px solid #5D5D5D',
  borderRight: '0px',
  height: '35px', width: '76px',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex'
}