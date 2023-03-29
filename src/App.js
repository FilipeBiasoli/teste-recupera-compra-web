import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Login from "./pages/login/index";
import Home from "./pages/home/index";
import Users from "./pages/users/index";
import UsersCreate from "./pages/users_create/index";
import UsersEdit from "./pages/users_edit/index";
import UsersDelete from "./components/UsersDelete";
import Categories from "./pages/categories/index";
import CategoriesCreate from "./pages/categories_create/index";
import CategoriesEdit from "./pages/categories_edit/index";
import CategoriesDelete from "./components/CategoriesDelete";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/control-panel" element={<Home />} />
        <Route path="/control-panel/users" element={<Users />} />
        <Route path="/control-panel/users/create" element={<UsersCreate />} />
        <Route
          path="/control-panel/users/edit/:id_user"
          element={<UsersEdit />}
        />
        <Route
          path="/control-panel/users/delete/:id_user"
          element={<UsersDelete />}
        />
        <Route path="/control-panel/categories" element={<Categories />} />
        <Route
          path="/control-panel/categories/create"
          element={<CategoriesCreate />}
        />
        <Route
          path="/control-panel/categories/edit/:id_category"
          element={<CategoriesEdit />}
        />
        <Route
          path="/control-panel/categories/delete/:id_category"
          element={<CategoriesDelete />}
        />
      </Routes>
    </BrowserRouter>
  );
}
