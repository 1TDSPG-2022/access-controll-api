import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home'
import Login from './components/Login'
import Produto from './components/produto'


export default function MainRouter() {
    return(
        <>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/produto" element={<Produto/>}/>
        </Routes>
        </>
    )
}