import { Card, Paragraph, Img } from "../../Estilizações/EMap";

const Map = ({ nome, imagem }) => {
    return (
        <>
            <Card>
                <Img src={imagem} alt="imagem" draggable="false" />
                <Paragraph>{nome}</Paragraph>
            </Card>
        </>
    )
}
export default Map;