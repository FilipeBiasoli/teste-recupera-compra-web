import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// pages
import Login from "./pages/login/index";
import Home from "./pages/home/index";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/control-panel" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
