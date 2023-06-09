import React from "react";
import "./style.scss";
import api from "../../services/api";

const Login = () => {
  async function userLogin(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    await api
      .get(`/user/get_email/${email}`)
      .then((res) => {
        if (res.data.password !== password || res.data == null) {
          localStorage.setItem("login", false);
          document.getElementById("error_login").style.display = "block";
        } else {
          localStorage.setItem("login", true);
          window.location.href = "/control-panel";
        }
      })
      .catch((err) => {
        document.getElementById("error_login").style.display = "block";
      });
  }

  return (
    <div id="main_div">
      <form onSubmit={userLogin}>
        <input type="email" placeholder="E-mail" id="email" required />
        <input type="password" placeholder="Senha" id="password" />
        <button type="submit">Login</button>
      </form>

      <div id="error_login">Usuário ou senha incorretos, tente novamente</div>
    </div>
  );
};

export default Login;
