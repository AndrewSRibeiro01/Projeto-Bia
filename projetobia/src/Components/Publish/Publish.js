import { Imagem } from "../../Estilizações/EMain"
import { Principal } from "../../Estilizações/EPublish"
import { Espaço } from "../../Estilizações/EPublish"
import { MaisAnuncios } from "../../Estilizações/EPublish"
import { Background } from "../../Estilizações/EPublish"
import { Descrição } from "../../Estilizações/EPublish"
import { Titulo } from "../../Estilizações/EPublish"

const Publish = () => {
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

                        <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZI0SE2RpZylR53qfF-poSOECbz65x2ny_OA&usqp=CAU" class="d-block w-100" alt="Camisa" style={{ border: "solid #eb9c20" }} />

                        <p class="card-text" style={{ background: "white", fontWeight: "400px", display: "flex", justifyContent: "center", maxWidth: "300px", border: "solid #eb9c20", borderRadius: "10px", margin: "auto" }}>R$120,00 <br /> Camisa Corinthians</p>

                        <br /> <br />
                    </div>
                    <div class="carousel-item">
                        <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVUQxPmHRZLmY8i29IypOMPlB0CMA5X4Ndg&usqp=CAU" style={{ width: "300px", height: "300px" }} class="d-block w-100" alt="..." />
                        <br /> <br />
                    </div>
                    <div class="carousel-item">
                        <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimtthLVSYDk0GpGwoXeqEvoozHNLA8uwLOw&usqp=CAU" class="d-block w-100" alt="..." />
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

            <MaisAnuncios>
                <Descrição>Descrição do produto</Descrição>
                <Titulo>Peças únicas</Titulo>
                <Titulo>Produtos importados da Shein</Titulo>
                <Titulo>Pronta entrega</Titulo>
                <br />
                <Titulo>Medidas:</Titulo>
            </MaisAnuncios>
            <Background></Background>

        </Principal>
    )
}
export default Publish