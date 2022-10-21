import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Produto from "../components/Produto";

export default function MainRoutes() {
  return (
    <>
     <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/produto" element={<Produto></Produto>}></Route>
     </Routes>
    </>
  )
}
