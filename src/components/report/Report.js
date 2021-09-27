import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Report(props) {
  const [ datas, setDatas ] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/report',);
        setDatas(response.data.data);
      } catch (e) {
        console.log(e);
        console.log(e);
        console.log(e);
      }
    };

    fetchData();
  }, []);

  

  return (
    1
  );
}
