import React from "react";
import "./style.scss";
import api from "../../services/api";
import VerifyLogin from "../../components/VerifyLogin";
import { Link } from "react-router-dom";

const UsersCreate = () => {
  async function createLogin(e) {
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
        document.getElementById("error").style.display = "block";
      });
  }
  return (
    <>
      <VerifyLogin />

      <form onSubmit={createLogin}>
        <input type="text" placeholder="Nome" id="name" required />
        <input type="email" placeholder="E-mail" id="email" required />
        <input type="password" placeholder="Senha" id="password" required />
        <button type="submit">Criar</button>
      </form>

      <p id="error">
        Não foi possível criar um usuário. Pode ser que já existe um usuário com
        esse e-mail, tente novamente.
      </p>
    </>
  );
};

export default UsersCreate;
