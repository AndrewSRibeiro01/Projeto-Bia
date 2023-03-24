import { Route, Routes } from "react-router-dom";
import React from "react";
import Inicio from "../pages/Inicio/inicio";
import Anuncio from "../pages/Anuncio/Anuncio";
import { NotFound } from "../pages/NotFound/NotFound";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const AppRoute = () => {
    return (
        <>
            <Header />
            <Routes>
                
                <Route path="/" element={<Inicio />} />
                <Route path="/Anuncio/:id" element={<Anuncio />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default AppRoute 