import { Link } from "react-router-dom"
import { Espaço, QuebraDeLinha, Cards, CardItens, Principal } from "../../Estilizações/EMain"
import { Carrossel } from "../Publish/Carrossel"
import data from "../../db/db.json"

function Main() {
    return (
        <Principal>
            <Espaço />
            <Carrossel />
            <Cards>
                {data.map((item, index) =>
                    <CardItens key={index}>
                        <div className="card" style={{ width: "18rem", border: "solid #eb9c20", boxShadow: "6px 6px 2px 1px rgba(0, 0, 0, 0.2)" }}>

                            <Link to={`/Anuncio/${item.id}`} style={{ textDecoration: "none", color: "black" }}>

                                <img src={item.image} className="card-img-top" alt={item.description} style={{ width: "300px", height: "300px" }} />

                                <div className="card-body" style={{ background: "white" }}>

                                    <p className="card-text" style={{fontWeight: 400}}> R${item.price},00<br /> {item.description}</p>
                                </div>
                            </Link>
                        </div>
                    </CardItens>
                )}
            </Cards>
            <QuebraDeLinha />
        </Principal >
    )
}
export default Main