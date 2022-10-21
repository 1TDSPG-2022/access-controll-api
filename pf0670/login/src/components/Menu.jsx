import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  const logout = () => {
    sessionStorage.removeItem("usuario-validado");
    window.location = "/";
  };

  const usuario = sessionStorage.getItem("usuario-validado");

  return (
    <header>
      <Link to="/home">Home</Link> | <Link to="/produto">Produto</Link> |{" "}
      <Link to="/">Login</Link> |{" "}
      <button onClick={logout}>{usuario} Logout</button>
    </header>
  );
}
