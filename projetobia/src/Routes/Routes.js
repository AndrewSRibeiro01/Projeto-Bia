import { Route, Routes } from "react-router-dom";
import React from "react";
import Anuncio from "../pages/Anuncio/Anuncio";
import Inicio from "../pages/Inicio/inicio";


const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Anuncio" element={<Anuncio />} />
        </Routes>
    )
}

export default AppRoute 