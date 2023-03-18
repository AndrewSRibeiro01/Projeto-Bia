import { EBotão } from "../../Estilizações/EBotão"
import Carrinho from "../../Imagens/CarrinhoDeCompras.png"
import Cifrão from "../../Imagens/Cifrão.png"
// import data from "../../db/db.json"

const Botão = () => {


    // const consultar = () => {
    //     data.find(item => item.id)
    // }

    // const Click = () => {
    //     localStorage.setItem(consultar);
    // };
    return (
        <EBotão>
            <div>
                <button /*onClick={Click}*/ className="verde">Comprar
                    <img width="25px" height="25px" src={Cifrão} alt="Dolar" />
                </button>
            </div>
            <div>
                <button className="amarelo">
                    Carrinho
                    <img width="30px" height="30px" src={Carrinho} alt="Carrinho" />
                </button>
            </div>
        </EBotão>
    )
}
export default Botão