import { Route, Routes } from "react-router-dom";
import React from "react";
import Inicio from "../pages/Inicio/inicio";
import Anuncio from "../pages/Anuncio/Anuncio";
import Anuncio1 from "../pages/Anuncio/Anuncio1";
import Anuncio2 from "../pages/Anuncio/Anuncio2"
import Anuncio3 from "../pages/Anuncio/Anuncio3"
import Anuncio4 from "../pages/Anuncio/Anuncio4"
import Anuncio5 from "../pages/Anuncio/Anuncio5"
import Anuncio6 from "../pages/Anuncio/Anuncio6"
import Anuncio7 from "../pages/Anuncio/Anuncio7"
import Anuncio8 from "../pages/Anuncio/Anuncio8"
import Anuncio9 from "../pages/Anuncio/Anuncio9"
import Anuncio10 from "../pages/Anuncio/Anuncio10"
import Anuncio11 from "../pages/Anuncio/Anuncio11"
import Anuncio12 from "../pages/Anuncio/Anuncio12"

const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/Anuncio" element={<Anuncio />} />
            <Route path="/Anuncio1" element={<Anuncio1 />} />
            <Route path="/Anuncio2" element={<Anuncio2 />} />
            <Route path="/Anuncio3" element={<Anuncio3 />} />
            <Route path="/Anuncio4" element={<Anuncio4 />} />
            <Route path="/Anuncio5" element={<Anuncio5 />} />
            <Route path="/Anuncio6" element={<Anuncio6 />} />
            <Route path="/Anuncio7" element={<Anuncio7 />} />
            <Route path="/Anuncio8" element={<Anuncio8 />} />
            <Route path="/Anuncio9" element={<Anuncio9 />} />
            <Route path="/Anuncio10" element={<Anuncio10 />} />
            <Route path="/Anuncio11" element={<Anuncio11 />} />
            <Route path="/Anuncio12" element={<Anuncio12 />} />
        </Routes>
    )
}

export default AppRoute 