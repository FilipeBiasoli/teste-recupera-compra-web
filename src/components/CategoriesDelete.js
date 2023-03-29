import api from "../services/api";
import VerifyLogin from "./VerifyLogin";
import { useParams } from "react-router-dom";

const CategoriesDelete = async () => {
  VerifyLogin();

  const { id_category } = useParams();

  await api
    .delete(`/category/delete/${id_category}`)
    .then((res) => {
      window.location.href = "/control-panel/categories";
    })
    .catch((err) => {
      window.location.href = "/control-panel/categories";
    });
};

export default CategoriesDelete;
