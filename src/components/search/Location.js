import { useState, useEffect} from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";



const Location = (props) => {
  const [location, setLocation] = useState("전체");

  const handleChange = (event) => {
    //props.setting(event.target.value);
    setLocation(event.target.value);
    //props.setting(event.target.value);
  };
  useEffect(() => {
    props.setting(location);
  },[location])
  return (
    <div style={props.style}>
      <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">권역</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value={location}
            onChange={handleChange}
            onClick={props.setting(location)}
          >
            <MenuItem value="전체" onClick={props.setting("전체")}>
              <em>전체</em>
            </MenuItem>
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