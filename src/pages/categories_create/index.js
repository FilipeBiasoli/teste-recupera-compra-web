import React from "react";
import "./style.scss";
import api from "../../services/api";
import VerifyLogin from "../../components/VerifyLogin";

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
        document.getElementById("error").style.display = "block";
      });
  }
  return (
    <>
      <VerifyLogin />

      <form onSubmit={createCategory}>
        <input type="text" placeholder="Nome" id="name" required />
        <input type="text" placeholder="Descrição" id="description" required />
        <button type="submit">Criar</button>
      </form>

      <p id="error">Não foi possível criar uma categoria, tente novamente.</p>
    </>
  );
};

export default UsersCreate;
