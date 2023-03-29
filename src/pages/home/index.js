import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import VerifyLogin from "../../components/VerifyLogin";

const Home = () => {
  return (
    <>
      <VerifyLogin />

      <div id="main_div">
        <div class="selecione">
          <Link to="/control-panel/users">usuários</Link>
          <Link to="/control-panel/categories">categorias</Link>
        </div>
      </div>
    </>
  );
};

export default Home;
