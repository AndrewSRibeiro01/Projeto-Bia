import { EBotão } from "../../Estilizações/EBotão"
import Carrinho from "../../Imagens/CarrinhoDeCompras.png"
import Cifrão from "../../Imagens/Cifrão.png"
import { Imagem, Imagem1 } from "../../Estilizações/EBotão"

const Botão = () => {
    return (
        <EBotão>
            <div>
                <button type="button" class="btn btn-success">Comprar 
                <Imagem src={Cifrão} alt="Dolar" />
                </button>
            </div>
            <div>
                <button type="button" class="btn btn-warning">
                    Carrinho
                    <Imagem1 src={Carrinho} alt="Carrinho" />
                </button>
            </div>
asdsadsa


        </EBotão>
    )
} 

export default Botão