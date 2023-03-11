import { Route, Routes } from "react-router-dom";
import React from "react";
import Inicio from "../pages/Inicio/inicio";
import Anuncio from "../pages/Anuncio/Anuncio";

const AppRoute = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Anuncio/:id" element={<Anuncio />} />
            </Routes>
        </main>
    )
}

export default AppRoute 