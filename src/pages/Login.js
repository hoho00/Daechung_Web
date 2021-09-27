import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common/layouts/Footer";
import Header from "../common/layouts/Header";
import { useHistory } from "react-router-dom";

const Login = () => {

  const history = useHistory();
  return (
    <div>
      <Header />
      <h1>Login Page!!</h1>
      <button
        onClick={() =>
          history.push({
            pathname: "/home/map_page",
          })
        }
      >
        <Link to="/home/map_page">Login</Link>
      </button>
      <Footer />
    </div>
  );
};

export default Login;
