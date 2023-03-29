import React from "react";
import "./style.scss";
import api from "../../services/api";
import VerifyLogin from "../../components/VerifyLogin";
import { useParams, Link } from "react-router-dom";

const UsersEdit = () => {
  const { id_category } = useParams();

  (async () => {
    await api.get(`/category/get_id/${id_category}`).then((res) => {
      document.getElementById("name").value = res.data.name;
      document.getElementById("description").value = res.data.description;
    });
  })();

  async function createCategory(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let description = document.getElementById("description").value;

    await api
      .put(`/category/update/${id_category}`, {
        name: name,
        description: description,
      })
      .then((res) => {
        window.location.href = "/control-panel/categories";
      })
      .catch((err) => {
        document.getElementById("error").style.display = "block";
      });
  }
  return (
    <div id="main_div">
      <VerifyLogin />

      <form onSubmit={createCategory}>
        <Link class="btn_voltar" to="/control-panel/categories">
          <i class="fas fa-arrow-left"></i> Voltar
        </Link>

        <input
          type="text"
          placeholder="Nome"
          id="name"
          maxlength="35"
          required
        />
        <textarea
          type="text"
          placeholder="Descrição"
          id="description"
          maxlength="150"
          required
        />
        <button type="submit">Editar categoria</button>
      </form>

      <p id="error_login">
        Não foi possível editar a categoria, tente novamente.
      </p>
    </div>
  );
};

export default UsersEdit;
