import styled from "styled-components"

const Principal = styled.main`
  text-align: center;
  /* background-image: url(https://i.ibb.co/WPFk5Hw/20230308-195123-0000.png); */
  background-color: #eac7b4;
`
export const Imagem = styled.img`
  cursor: pointer;
  width: 300px;
  margin: 5px;
  padding: 0;
  border-radius: 10px;
`
const ImagemCard = styled.img`
    cursor: pointer;
    width: 300px;
    margin: 0px;
    padding: 0;
`
const Cards = styled.div`
    display: flex;
    gap: 5px;
    justify-content: center;
`
const Espaço = styled.div`
    width: 100%;
    height: 5px;
    background-color: #59371c;
    margin-bottom: 70px;
`

function Main() {
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

                        <a href="/Anuncio8" style={{ textDecoration: "none", color: "black" }}>

                            <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZI0SE2RpZylR53qfF-poSOECbz65x2ny_OA&usqp=CAU" class="d-block w-100" alt="Camisa" style={{ border: "solid #eb9c20" }} />

                            <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVUQxPmHRZLmY8i29IypOMPlB0CMA5X4Ndg&usqp=CAU" style={{ width: "300px", height: "300px", border: "solid #eb9c20" }} class="d-block w-100" alt="Camisa" />

                            <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimtthLVSYDk0GpGwoXeqEvoozHNLA8uwLOw&usqp=CAU" class="d-block w-100" alt="..." style={{ border: "solid #eb9c20" }} />
                            <br /> <br />
                        </a>
                    </div>

                    <div class="carousel-item">

                        <a href="/Anuncio8" style={{ textDecoration: "none", color: "black" }}>

                            <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVUQxPmHRZLmY8i29IypOMPlB0CMA5X4Ndg&usqp=CAU" style={{ width: "300px", height: "300px" }} class="d-block w-100" alt="..." />

                            <br /> <br />
                        </a>
                    </div>

                    <div class="carousel-item">
                        <a href="/Anuncio8" style={{ textDecoration: "none", color: "black" }}>
                            <Imagem src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimtthLVSYDk0GpGwoXeqEvoozHNLA8uwLOw&usqp=CAU" class="d-block w-100" alt="..." />

                            <br /> <br />

                        </a>

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

            <br /> <br />

            <Cards>
                <div class="card" style={{ width: "18rem", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)" }}>

                    <a href="/Anuncio" style={{ textDecoration: "none", color: "black" }}>
                        <ImagemCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimtthLVSYDk0GpGwoXeqEvoozHNLA8uwLOw&usqp=CAU" class="card-img-top" alt="Camisa" />
                        <div class="card-body" style={{ background: "white" }}>

                            <p class="card-text" style={{ background: "white", fontWeight: "400px" }}>R$120,00 <br /> Camisa Corinthians</p>
                        </div>
                    </a>
                </div>

                <br />

                <div class="card" style={{ width: "18rem", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)" }}>

                    <a href="/Anuncio1" style={{ textDecoration: "none", color: "black" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZI0SE2RpZylR53qfF-poSOECbz65x2ny_OA&usqp=CAU" class="card-img-top" alt="Camisa" />

                        <div class="card-body" style={{ background: "white" }}>

                            <p class="card-text" style={{ background: "white", fontWeight: "400px" }}>R$120,00 <br /> Camisa Corinthians</p>

                        </div>

                    </a>

                </div>

                <br />

                <div class="card" style={{ width: "18rem", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)" }}>

                    <a href="/Anuncio2" style={{ textDecoration: "none", color: "black" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimtthLVSYDk0GpGwoXeqEvoozHNLA8uwLOw&usqp=CAU" class="card-img-top" alt="Camisa" />

                        <div class="card-body" style={{ background: "white" }}>

                            <p class="card-text" style={{ background: "white", fontWeight: "400px" }}>R$120,00 <br /> Camisa Corinthians</p>

                        </div>
                    </a>
                </div>

                <br /> <br />

                <div class="card" style={{ width: "18rem", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)" }}>

                    <a href="/Anuncio3" style={{ textDecoration: "none", color: "black" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZI0SE2RpZylR53qfF-poSOECbz65x2ny_OA&usqp=CAU" class="card-img-top" alt="Camisa" />

                        <div class="card-body" style={{ background: "white" }}>

                            <p class="card-text" style={{ background: "white", fontWeight: "400px" }}>R$120,00 <br /> Camisa Corinthians</p>

                        </div>
                    </a>

                </div>

            </Cards>

            <br /> <br />

            <Cards>
                <div class="card" style={{ width: "18rem", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)" }}>

                    <a href="/Anuncio4" style={{ textDecoration: "none", color: "black" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimtthLVSYDk0GpGwoXeqEvoozHNLA8uwLOw&usqp=CAU" class="card-img-top" alt="Camisa" />

                        <div class="card-body" style={{ background: "white" }}>

                            <p class="card-text" style={{ background: "white", fontWeight: "400px" }}>R$120,00 <br /> Camisa Corinthians </p>

                        </div>

                    </a>

                </div>

                <br />

                <div class="card" style={{ width: "18rem", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)" }}>

                    <a href="/Anuncio5" style={{ textDecoration: "none", color: "black" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZI0SE2RpZylR53qfF-poSOECbz65x2ny_OA&usqp=CAU" class="card-img-top" alt="Camisa" />

                        <div class="card-body" style={{ background: "white" }}>

                            <p class="card-text" style={{ background: "white", fontWeight: "400px" }}>R$120,00 <br /> Camisa Corinthians</p>

                        </div>

                    </a>

                </div>

                <br />

                <div class="card" style={{ width: "18rem", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)" }}>

                    <a href="/Anuncio6" style={{ textDecoration: "none", color: "black" }}>

                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimtthLVSYDk0GpGwoXeqEvoozHNLA8uwLOw&usqp=CAU" class="card-img-top" alt="Camisa" />

                        <div class="card-body" style={{ background: "white" }}>

                            <p class="card-text" style={{ background: "white", fontWeight: "400px" }}>R$120,00 <br /> Camisa Corinthians</p>

                        </div>

                    </a>

                </div>

                <br /> <br />

                <div class="card" style={{ width: "18rem", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)" }}>

                    <a href="/Anuncio7" style={{ textDecoration: "none", color: "black" }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZI0SE2RpZylR53qfF-poSOECbz65x2ny_OA&usqp=CAU" class="card-img-top" alt="Camisa" />

                        <div class="card-body" style={{ background: "white" }}>

                            <p class="card-text" style={{ background: "white", fontWeight: "400px" }}>R$120,00 <br /> Camisa Corinthians</p>

                        </div>

                    </a>

                </div>

            </Cards>

            <br /> <br />

        </Principal >
    )
}
export default Main