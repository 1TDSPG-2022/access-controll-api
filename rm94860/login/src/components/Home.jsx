import React from 'react';

export default function Home(){
    const verificar = sessionStorage.getItem("usuario-validado")

    useEfect(() => {
        if(verificar == null){
            window.location = "/";
        }
    }, []);

    return(

        

        <div>Home</div>
    )
}