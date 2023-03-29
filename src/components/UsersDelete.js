import api from "../services/api";
import VerifyLogin from "./VerifyLogin";
import { useParams } from "react-router-dom";

const UsersDelete = async () => {
  VerifyLogin();

  const { id_user } = useParams();

  await api
    .delete(`/user/delete/${id_user}`)
    .then((res) => {
      window.location.href = "/control-panel/users";
    })
    .catch((err) => {
      window.location.href = "/control-panel/users";
    });
};

export default UsersDelete;
