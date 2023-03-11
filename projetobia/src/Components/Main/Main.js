import { Link } from "react-router-dom"
import { CardItens, Principal } from "../../Estilizações/EMain"
import { Espaço } from "../../Estilizações/EMain"
import { Cards } from "../../Estilizações/EMain"
import { Carrossel } from "../Publish/Carrossel"
import data from "../../db/db.json"

function Main() {
    return (
        <Principal>


            <Espaço></Espaço>

            <Carrossel />

            <br /> <br />


            <Cards>
                {data.map((item, index) =>

                    <CardItens>
                        <div key={index} class="card" style={{ width: "18rem", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)" }}>

                            <Link to={`/Anuncio/${item.id}`} style={{ textDecoration: "none", color: "black" }}>
                                <img src={item.image} class="card-img-top" alt={item.description} />

                                <div class="card-body" style={{ background: "white" }}>

                                    <p class="card-text" style={{ background: "white", fontWeight: "400px" }}> R${item.price},00<br /> {item.description}</p>

                                </div>

                            </Link>

                        </div>
                    </CardItens>
                )}

            </Cards>

        </Principal >
    )
}
export default Main