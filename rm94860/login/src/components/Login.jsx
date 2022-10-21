import React from 'react';
import { useState} from 'react';

export default function Login(){
    const [usuario, setusuario] = useState({
        login: "",
        senha: "",
    });

const handleChange = (e)=>{
    setusuario({...usuario,[e.target.name]:e.target.value});
}


const logar =async (e)=>{
    e.preventDefault();

    const requestOptios = {
        method : "POST",
        headers : { "Content-Type" : "application/json" },
        body: JSON.stringify(usuario),
    }
    
    const response = await fetch("")

}
    return(
        <>
        <div>
            <h1>VALIDAÇÃO DE USUÁRIOS</h1>
            <form on onSubmit="">
                <fieldset>
                    <legend>Login</legend>
                    <div>
                        <label for="idLogin">Usuário</label>
                        <input type="text" name="login" id="idLogin" placeholder='Login' value={usuario.login} onChange={handleChange} />
                    </div>
                    <div>
                        <label for="idSenha">Senha</label>
                        <input type="password" name="senha" id="idSenha" placeholder='Senha' value={usuario.senha} onChange={handleChange} />
                    </div>
                    <div>
                        <button>Logar</button>
                    </div>
                </fieldset>
            </form>
        </div>
        </>
    )
}