import React from 'react';
import Menu from "./components/Menu";
import MainRoutes from "./routes/MainRoutes";

Export default function App(){
    return(
        <>
        <Menu />
        <h1>CONTROLE DE ACESSO</h1>
        <MainRoutes />
        </>
    );
}