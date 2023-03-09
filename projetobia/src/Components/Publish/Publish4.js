import styled from "styled-components"
import { Imagem } from "../../Estilizações/EMain"

const Principal = styled.div`
    text-align: center;
    /* background-image: url(https://i.ibb.co/WPFk5Hw/20230308-195123-0000.png); */
    background-color: #eac7b4;
`
const Espaço = styled.div`
    width: 100%;
    height: 5px;
    background-color: #59371c;
    margin-bottom: 70px;
`
const MaisAnuncios = styled.div`
    padding: 15px;
    margin: 70px 15px 15px 15px;
    width: auto;
    height: 300px;
    border: solid #eb9c20;
`
const Background = styled.div`
    width: 100%;
    height: 20px;
`
const Descrição = styled.h1`
    color: white;
    font-size: 25px;
`
const Titulo = styled.h2`
    color: white;
    font-size: 15px;
    text-align: left;
`

const Publish4 = () => {
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
export default Publish4