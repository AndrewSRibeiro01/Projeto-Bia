import { Espaço } from "../../Estilizações/EPublish"
import { MaisAnuncios } from "../CardDescrição/CardDescrição"
import { Imagem } from "../../Estilizações/EMain"
import { Principal } from "../../Estilizações/EMain"

const Publish8 = () => {
    return (
        <Principal>
            <Espaço></Espaço>
            <div id="carouselExampleIndicators" class="carousel slide">

                <div class="carousel-indicators" style={{ marginBottom: "0px" }}>

                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" />

                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />

                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />

                </div>

                <div class="carousel-inner">

                    <div class="carousel-item active">

                        <Imagem src="" alt="Camisa" style={{ border: "solid #eb9c20" }} />

                        <p class="card-text" style={{ background: "white", fontWeight: "400px", display: "flex", justifyContent: "center", maxWidth: "300px", border: "solid #eb9c20", borderRadius: "10px", margin: "auto" }}>R$120,00 <br /> Camisa Corinthians</p>

                        <br /> <br />
                    </div>
                    <div class="carousel-item">
                        <Imagem src="" style={{ width: "300px", height: "300px" }} class="d-block w-100" alt="..." />
                        <br /> <br />
                    </div>
                    <div class="carousel-item">
                        <Imagem src="" class="d-block w-100" alt="..." />
                        <br /> <br />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <MaisAnuncios />
        </Principal>
    )
}
export default Publish8