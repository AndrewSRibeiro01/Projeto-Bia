import { EMaisAnuncios, Medidas, Background, Titulo, Descrição } from "../../Estilizações/EPublish"

export const MaisAnuncios = () => {
    return (
        <main>
            <EMaisAnuncios>
                <Descrição>Descrição do produto</Descrição>
                <Titulo>Peças únicas</Titulo>
                <Titulo>Produtos importados da Shein</Titulo>
                <Titulo>Pronta entrega</Titulo>
                <Medidas>Medidas:</Medidas>
            </EMaisAnuncios>
            <Background />
        </main>
    )
}