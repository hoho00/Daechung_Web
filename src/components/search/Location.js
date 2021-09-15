import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function Location(props) {
  const classes = useStyles();
  const [local, setLocal] = useState('');
  const handleChange = (event) => {
    setLocal(event.target.value);
  }
  
  return (
    <div style={props.style}>
        <FormControl className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-label">지역</InputLabel> */}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={local}
          onChange={handleChange}
        >
          <MenuItem value={'전체'}>전체</MenuItem>
          <MenuItem value={'문의'}>문의</MenuItem>
          <MenuItem value={'군북1'}>군북1</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

const site = {
    width: "74px",
    height: "33px",
    textAlign: "center",
    font: "normal normal normal 16px/19px NanumGothic",
    letterSpacing: "0px",
    paddingTop: "7px",
    borderRight: "1px solid #5D5D5D",
    float: "left"
}

const siteSelect = {
    width: "90px",
    height: "33px",
    textAlign: "center",
    font: "normal normal normal 16px/19px NanumGothic",
    letterSpacing: "0px",
    paddingTop: "7px",
    float: "left"
}