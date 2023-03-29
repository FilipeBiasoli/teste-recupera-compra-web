import React from "react";
import "./style.scss";
import api from "../../services/api";
import VerifyLogin from "../../components/VerifyLogin";
import { Link } from "react-router-dom";

const Categories = () => {
  (async () => {
    await api
      .get("/category/get_all")
      .then((res) => {
        let category_list = "";

        for (let i in res.data) {
          i = res.data[i];

          category_list =
            category_list +
            `
                <tr>
                  <td class="name">${i.name}</td>
                  <td class="description">${i.description}</td>
                  <td class="edit"><a href="/control-panel/categories/edit/${i.id}"><i class="fas fa-edit"></i></a></td>
                  <td class="delete"><a href="/control-panel/categories/delete/${i.id}"><i class="fas fa-trash-alt"></i></a></td>
                </tr>
            `;
        }

        document.getElementById("categories_table").innerHTML = category_list;
      })
      .catch((err) => {});
  })();

  return (
    <div id="main_div">
      <VerifyLogin />

      <div class="table_div">
        <div class="botoes">
          <Link to="/control-panel">
            <i class="fas fa-arrow-left"></i> Voltar
          </Link>
          <Link to="/control-panel/categories/create">
            Criar categoria <i class="fas fa-plus"></i>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody id="categories_table">
            <p>Carregando...</p>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Categories;
