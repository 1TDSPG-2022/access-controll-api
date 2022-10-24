import React from "react";
import { Link } from "react-router-dom";
import { ImUser } from "react-icons/im";
import { CgLogOut } from "react-icons/cg";

export default function Menu() {
  const logout = () => {
    sessionStorage.removeItem("usuario-validado");
    window.location = "/";
  };

  const usuario = sessionStorage.getItem("usuario-validado");
  //ImUser
  //CgLogOut
  return (
    <header>
      <Link to="/home">Home</Link> | <Link to="/produto">Produto</Link> |{" "}
      {usuario ? (
        <div>
          <ImUser></ImUser> {usuario} |{" "}
          <button onClick={logout}>
            <CgLogOut></CgLogOut> Logout
          </button>
        </div>
      ) : (
        <Link to="/">Login</Link>
      )}
    </header>
  );
}
