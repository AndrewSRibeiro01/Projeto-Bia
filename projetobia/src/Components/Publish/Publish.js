import { Imagem, Div } from "../../Estilizações/EMain"
import { Principal, Espaço } from "../../Estilizações/EPublish"
import { MaisAnuncios } from "../CardDescrição/CardDescrição"
import { useParams } from "react-router-dom"
import Botão from "../Botão/Botão"
import data from "../../db/db.json"
import { useEffect, useState } from "react"

const Publish = (props) => {

    const [values, setValues] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const values = data.find(item => item.id == id)
        setValues(values)
    }, [])

    return (
        <Principal>
            <Espaço />
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators" style={{ marginBottom: "0px" }}>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" />
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <Imagem src={values.image} class="d-block w-100" alt="Camisa" style={{ border: "solid #eb9c20" }} />
                        <p class="card-text" style={{ background: "white", fontWeight: "400px", display: "flex", justifyContent: "center", maxWidth: "300px", border: "solid #eb9c20", borderRadius: "10px", margin: "auto" }}>R${values.price},00 <br />{values.description}</p>
                        <Div />
                    </div>
                    <div class="carousel-item">
                        <Imagem src={values.image1} style={{ width: "300px", height: "300px", border: "solid #eb9c20" }} class="d-block w-100" alt="Camisa" />
                        <Div />
                    </div>
                    <div class="carousel-item">
                        <Imagem src={values.image2} style={{ border: "solid #eb9c20" }} class="d-block w-100" alt="..." />
                        <Div />
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
            <Botão />
            <MaisAnuncios description={values.description} />
        </Principal>
    )
}
export default Publish