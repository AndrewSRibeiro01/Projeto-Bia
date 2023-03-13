import React from "react"
import { Imagem, Div, H1 } from "../../Estilizações/EMain"
import { Link } from "react-router-dom"

export const Carrossel = () => {
    return (
        <Div>
            <H1> Destaques da semana </H1>
            <div id="carouselExampleIndicators" class="carousel slide">

                <div class="carousel-indicators" style={{ marginBottom: "0px" }}>

                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" />

                    <button type="button"  data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />

                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />

                </div>

                <div class="carousel-inner">

                    <div class="carousel-item active">

                        <Link to="/Anuncio/99" style={{ textDecoration: "none", color: "black" }}>

                            <Imagem src="https://m.media-amazon.com/images/I/41X1Kxja7UL._AC_SX425_.jpg" class="d-block w-100" alt="Camisa" style={{ border: "solid #eb9c20" }} />

                            <Imagem src="https://m.media-amazon.com/images/I/616bxN9UMOL._AC_SX425_.jpg" style={{border: "solid #eb9c20" }} class="d-block w-100" alt="Camisa" />

                            <Imagem src="https://m.media-amazon.com/images/I/41daXozIsZL._AC_SX425_.jpg" class="d-block w-100" alt="Camisa" style={{ border: "solid #eb9c20" }} />
                        </Link>
                    </div>

                    <div class="carousel-item">
                        <Link to="/Anuncio/99" style={{ textDecoration: "none", color: "black" }}>

                            <Imagem src="https://m.media-amazon.com/images/I/616bxN9UMOL._AC_SX425_.jpg" style={{border: "solid #eb9c20" }} class="d-block w-100" alt="..." />

                        </Link>
                    </div>

                    <div class="carousel-item">

                        <Link to="/Anuncio/99" style={{ textDecoration: "none", color: "black" }}>

                            <Imagem src="https://m.media-amazon.com/images/I/41daXozIsZL._AC_SX425_.jpg" class="d-block w-100" alt="..." style={{ border: "solid #eb9c20" }} />

                        </Link>

                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Anterior</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Próximo</span>
                </button>
            </div>
        </Div>
    )
}