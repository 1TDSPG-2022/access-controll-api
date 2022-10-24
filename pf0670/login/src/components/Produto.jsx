import React from "react";
import { useEffect } from "react";

export default function Produto() {
  const verificar = sessionStorage.getItem("usuario-validado");

  useEffect(() => {
    if (verificar == null) {
      window.location = "/";
    }
  }, []);

  const objRecuperado = JSON.parse(sessionStorage.getItem("objUser"));

  return (
    <div>
      Produto
      <p>Nome do usuário : {objRecuperado.login}</p>
    </div>
  );
}
