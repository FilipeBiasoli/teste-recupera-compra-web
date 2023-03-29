import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import VerifyLogin from "../../components/VerifyLogin";

const Home = () => {
  return (
    <>
      <VerifyLogin />
      <Link to="/control-panel/users">usuários</Link>
      <br />
      <Link to="/control-panel/categories">categorias</Link>
    </>
  );
};

export default Home;
