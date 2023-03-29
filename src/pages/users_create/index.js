import React from "react";
import "./style.scss";
import api from "../../services/api";
import VerifyLogin from "../../components/VerifyLogin";
import { Link } from "react-router-dom";

const UsersCreate = () => {
  async function createUser(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    await api
      .post(`/user/create`, {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        window.location.href = "/control-panel/users";
      })
      .catch((err) => {
        document.getElementById("error_login").style.display = "block";
      });
  }
  return (
    <div id="main_div">
      <VerifyLogin />

      <form onSubmit={createUser}>
        <Link class="btn_voltar" to="/control-panel/users">
          <i class="fas fa-arrow-left"></i> Voltar
        </Link>

        <input
          type="text"
          placeholder="Nome"
          id="name"
          maxlength="35"
          required
        />
        <input
          type="email"
          placeholder="E-mail"
          id="email"
          maxlength="255"
          required
        />
        <input
          type="text"
          placeholder="Senha"
          id="password"
          maxlength="30"
          required
        />
        <button type="submit">Criar usuário</button>
      </form>

      <p id="error_login">
        Não foi possível criar um usuário. Pode ser que já existe um usuário com
        esse e-mail, tente novamente.
      </p>
    </div>
  );
};

export default UsersCreate;
