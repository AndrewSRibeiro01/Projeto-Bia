import { Espaço } from "../../Estilizações/EMain"
import ImgNotFound from "../../Imagens/NotFound.png"
import { DivNot } from "../../Estilizações/ENotFound"
import { Color } from "../../Estilizações/ENotFound"

export const NotFound = () => {
    return (
        <Color>
            <Espaço />
            <DivNot>
                <img src={ImgNotFound} alt="NotFound" style={{ margin: "130px 0px 190px 0px" }} />
            </ DivNot>
        </Color>
    )
}