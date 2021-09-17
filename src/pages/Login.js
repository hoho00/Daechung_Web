import React from "react";
import { Link } from "react-router-dom";
import Footer from "../common/layouts/Footer";
import Header from "../common/layouts/Header";

const Login = () => {
  return (
    <div>
      <Header />
      <h1>Login Page!!</h1>
      <button>
        <Link to="/home/map_page">Login</Link>
      </button>
      <Footer />
    </div>
  );
};

export default Login;
