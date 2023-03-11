import { EMaisAnuncios } from "../../Estilizações/EPublish"
import { Background } from "../../Estilizações/EPublish"
import { Descrição } from "../../Estilizações/EPublish"
import { Titulo } from "../../Estilizações/EPublish"


export const MaisAnuncios = () => {
    return (
        <main>
            <EMaisAnuncios>
                <Descrição>Descrição do produto</Descrição>
                <Titulo>Peças únicas</Titulo>
                <Titulo>Produtos importados da Shein</Titulo>
                <Titulo>Pronta entrega</Titulo>
                <br />
                <Titulo>Medidas:</Titulo>
            </EMaisAnuncios>
            <Background></Background>
        </main>
    )
}