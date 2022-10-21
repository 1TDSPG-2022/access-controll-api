import React from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return(
        <header>
            <Link to="/home">Home</Link>  <Link to="/produto">Produto</Link>
            <Link to="/menu">Menu</Link>  <Link to="/login">Login</Link>
        </header>
    )
}