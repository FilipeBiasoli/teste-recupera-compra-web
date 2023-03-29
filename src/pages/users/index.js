import React from "react";
import "./style.scss";
import api from "../../services/api";
import VerifyLogin from "../../components/VerifyLogin";
import { Link } from "react-router-dom";

const Users = () => {
  (async () => {
    await api
      .get("/user/get_all")
      .then((res) => {
        let user_list = "";

        for (let i in res.data) {
          i = res.data[i];

          user_list =
            user_list +
            `
              <tr>
                <td class="name">${i.name}</td>
                <td class="email">${i.email}</td>
                <td class="password">${i.password}</td>
                <td class="edit"><a href="/control-panel/users/edit/${i.id}"><i class="fas fa-edit"></i></a></td>
                <td class="delete"><a href="/control-panel/users/delete/${i.id}"><i class="fas fa-trash-alt"></i></a></td>
              </tr>
          `;
        }

        document.getElementById("users_table").innerHTML = user_list;
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
          <Link to="/control-panel/users/create">
            Criar usuário <i class="fas fa-plus"></i>
          </Link>
        </div>

        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Senha</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody id="users_table">
            <p>Carregando...</p>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
