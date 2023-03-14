import styled from "styled-components"
import { Espaço } from "../../Estilizações/EMain"
import ImgNotFound from "../../Imagens/NotFound.png"

const DivNot = styled.div`
  background-color: #e4b1a5;
  text-align: center;
  width: 100%;
`
const Color = styled.div`
    background-color: #e4b1a5;
`
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