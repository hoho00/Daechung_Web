import KkoMap from './components/map/KKO_Map'
import Location from './components/search/Location'
import Report from './components/report/Report'
import Type from './components/search/Type'

 
import {Row} from 'reactstrap';

function App() {
  

  return (
    <div style={con_style}>
      
      <Row>
        <div style={loc}><Location /></div>
        <div style={type}><Type /></div>
        <div style={cal}></div>
      </Row>
      <Row style={row_Down}>
        <div style={reportList}><Report /></div>
        <div style={maps}><KkoMap /></div>
      </Row>
    </div>
  );
}

const con_style = {
  margin: "55px 90px 55px 90px",
}


const loc = {
  border: "1px solid #5D5D5D",
  width: "166px",
  height: "35px",
}

const type = {  
  border: "1px solid #5D5D5D",
  marginLeft: "5px",
  width: "240px",
  height: "35px",
}

const cal = {
  border: "1px solid #5D5D5D",
  marginLeft: "5px",
  width: "391px",
  height: "35px",
}

const reportList = {
  border: "1px solid #5D5D5D",
  width: "396px",
  height: "771px",
}

const maps = {
  border: "1px solid #5D5D5D",
}

const row_Down = {
  marginTop: "22px"
}



export default App;
