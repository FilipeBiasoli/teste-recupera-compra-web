import React from "react";
import "./style.scss";
import api from "../../services/api";
import VerifyLogin from "../../components/VerifyLogin";
import { Link } from "react-router-dom";

const UsersCreate = () => {
  async function createCategory(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;

    await api
      .post(`/category/create`, {
        name: name,
        description: description,
      })
      .then((res) => {
        window.location.href = "/control-panel/categories";
      })
      .catch((err) => {
        document.getElementById("error_login").style.display = "block";
      });
  }
  return (
    <div id="main_div">
      <VerifyLogin />

      <form onSubmit={createCategory}>
        <Link class="btn_voltar" to="/control-panel/categories">
          <i class="fas fa-arrow-left"></i> Voltar
        </Link>

        <input type="text" placeholder="Nome" id="name" required />
        <textarea
          type="text"
          placeholder="Descrição"
          id="description"
          required
        />
        <button type="submit">Criar categoria</button>
      </form>

      <p id="error_login">
        Não foi possível criar uma categoria, tente novamente.
      </p>
    </div>
  );
};

export default UsersCreate;
