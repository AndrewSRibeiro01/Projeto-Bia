import { Espaço } from "../../Estilizações/EMain"
import { imgNotFound } from "../../Components/assets"
import { DivNot } from "../../Estilizações/ENotFound"
import { Color } from "../../Estilizações/ENotFound"

export const NotFound = () => {
    return (
        <Color>
            <Espaço />
            <DivNot>
                <img src={imgNotFound} alt="NotFound" style={{ margin: "130px 0px 190px 0px" }} />
            </ DivNot>
        </Color>
    )
}