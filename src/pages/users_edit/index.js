import React from "react";
import "./style.scss";
import api from "../../services/api";
import VerifyLogin from "../../components/VerifyLogin";
import { useParams } from "react-router-dom";

const UsersCreate = () => {
  const { id_user } = useParams();

  (async () => {
    await api.get(`/user/get_id/${id_user}`).then((res) => {
      document.getElementById("name").value = res.data.name;
      document.getElementById("email").value = res.data.email;
      document.getElementById("password").value = res.data.password;
    });
  })();

  async function createUser(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    await api
      .put(`/user/update/${id_user}`, {
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

      <form onSubmit={createUser}>
        <input type="text" placeholder="Nome" id="name" required />
        <input type="email" placeholder="E-mail" id="email" required />
        <input type="text" placeholder="Senha" id="password" required />
        <button type="submit">Editar</button>
      </form>

      <p id="error">
        Não foi possível editar o usuário. Pode ser que já existe um usuário com
        esse e-mail, tente novamente.
      </p>
    </>
  );
};

export default UsersCreate;
