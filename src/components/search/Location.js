import { useState, useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



const Location = ({ setting }) => {
  const [location, setLocation] = useState("전체");

  const handleChange = (event) => {
    //props.setting(event.target.value);
    setLocation(event.target.value);
    setting(event.target.value);
  };
  return (
    <div style={{ height: '35px', display: 'flex', width: '90px', justifyContent: 'center', marginRight: '5px' }}>
      <FormControl>
        <Select
          sx={{ height: '35px', border: '1px solid #5D5D5D', width: '90px', backgroundColor: 'white', borderRadius: '0px' }}
          value={location}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="전체">전체</MenuItem>
          <MenuItem value={"문의"}>문의</MenuItem>
          <MenuItem value={"화남1"}>화남1</MenuItem>
          <MenuItem value={"화남2"}>화남2</MenuItem>
          <MenuItem value={"세천"}>세천</MenuItem>
          <MenuItem value={"군북1"}>군북1</MenuItem>
          <MenuItem value={"군북2"}>군북2</MenuItem>
          <MenuItem value={"군북3"}>군북3</MenuItem>
          <MenuItem value={"군북4"}>군북4</MenuItem>
          <MenuItem value={"군북5"}>군북5</MenuItem>
          <MenuItem value={"수북"}>수북</MenuItem>
          <MenuItem value={"안남"}>안남</MenuItem>
          <MenuItem value={"청성"}>청성</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default Location;