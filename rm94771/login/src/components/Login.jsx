import React from 'react'
import { useState } from 'react'

export default function Login() {
  const [usuario, setUsuario] = useState({
    login: '',
    senha: ''
  })

  const handleChange = e => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value })
  }

  const logar = async e => {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    }

    const response = await fetch(
      'http://localhost:8080/ControleAcesso/rest/login',
      requestOptions
    )

    const data = await response.json()

    if (data.login) {
      sessionStorage.setItem('usuario-validado', data.login)
      window.location = '/home'
    } else {
      window.location = '/'
    }
  }

  return (
    <>
      <div>
        <h2>Validação de Usuários</h2>
        <form onSubmit={logar}>
          <fieldset>
            <legend>Login</legend>
            <div>
              <label htmlFor="idLogin"></label>
              <input
                type="text"
                name="login"
                id="idLogin"
                placeholder="Usuário"
                value={usuario.login}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="idSenha"></label>
              <input
                type="password"
                name="senha"
                id="idSenha"
                placeholder="Senha"
                value={usuario.senha}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>Log In</button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  )
}
