import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import React from "react";
import Anuncio from "../pages/Anuncio/Anuncio";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/Anuncio" element={<Anuncio />} />
            </Switch>
        </BrowserRouter>
    )
}

export default AppRoute 