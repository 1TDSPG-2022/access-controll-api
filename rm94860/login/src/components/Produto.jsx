import React from 'react';
import { useEfect } from 'react';

export default function Produto(){
    const verificar = sessionStorage.getItem("usuario-validado")

    useEfect(() => {
        if(verificar == null){
            window.location = "/";
        }
    }, []);

    return(
        <div>Produtuo</div>
    )
}