import React from "react";
import "./style.scss";
import api from "../../services/api";
import VerifyLogin from "../../components/VerifyLogin";
import { useParams } from "react-router-dom";

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
    <>
      <VerifyLogin />

      <form onSubmit={createCategory}>
        <input type="text" placeholder="Nome" id="name" required />
        <input type="text" placeholder="Descrição" id="description" required />
        <button type="submit">Editar</button>
      </form>

      <p id="error">Não foi possível editar a categoria, tente novamente.</p>
    </>
  );
};

export default UsersEdit;
