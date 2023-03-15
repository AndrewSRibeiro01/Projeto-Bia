import { EBotão } from "../../Estilizações/EBotão"
import Carrinho from "../../Imagens/CarrinhoDeCompras.png"
import Cifrão from "../../Imagens/Cifrão.png"

const Botão = () => {
    return (
        <EBotão>
            <div>
                <button className="verde">Comprar
                    <img width="25px" height="25px" src={Cifrão} alt="Dolar" />
                </button>
            </div>
            <div>
                <button className="amarelo">
                    Carrinho
                    <img width="30px" height="30px"src={Carrinho} alt="Carrinho" />
                </button>
            </div>
        </EBotão>
    )
}

export default Botão