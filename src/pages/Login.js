import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common/layouts/Footer";
import Header from "../common/layouts/Header";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { getDefaultState } from "../common/functions/getDefaultState";
import { Container, Row, Col } from 'reactstrap';
import styles from '../components/css/styles.css'

const Login = () => {

  const history = useHistory();
  return (
    <div style={{ backgroundColor: 'grey', height: '100vh', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
      {/* <Header /> */}
      <div>
        <h1 style={{ color: "#005596", alignSelf: 'center', justifyContent: 'center', fontSize: '65px' }}>
          대청댐 유역관리
        </h1>
        <div style={{
          display: "inline-block", flexDirection: 'row'

        }}>
          <div style={{ display: 'grid' }}>
            <input style={{ height: '49px', width: "265px", marginBottom: '10px', marginRight: '12px' }}></input>
            <input style={{ height: '49px', width: "265px" }}></input>
          </div>
          <button
            style={{ height: '108px', width: '132px' }}
            onClick={() =>
              history.push({
                pathname: "/home/map_page"
              })
            }
          >
            <Link to="/home/map_page">Login</Link>
          </button>
        </div>
      </div>

      {/* <Footer /> */}
    </div >
    // <>
    //   {/* <Row>asdf</Row> */}
    //   <Container md="12">

    //     <Col style={{ alignSelf: 'center', justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
    //       <h1 style={{ color: "#005596", alignSelf: 'center', justifyContent: 'center', fontSize: '65px' }}>대청댐 유역관리</h1>
    //       <Col md="1">
    //         <input></input>
    //         <input></input>
    //       </Col>
    //     </Col>
    //   </Container>
    // </>
  );
};

export default Login;

// const title = {

// }