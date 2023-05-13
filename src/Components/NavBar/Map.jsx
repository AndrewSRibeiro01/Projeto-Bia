import styled from "styled-components";

const Card = styled.div`
    margin-right: 8px;
    width: 160px;
    height: 270px;
    border: 3px solid #eb9c20;
    border-radius: 5px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-items: center;
    color: #eb9c20;
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.2) 6px 6px 2px 1px;
`
const Paragraph = styled.p`
    font-size: 20px;
    font-weight: 500;
    padding-top: 16px ;
    text-align: center;
`

const Img = styled.img`
    cursor: no-drop;
    width: 160px;
    border-top-right-radius: 2px;
    border-top-left-radius: 2px;
`

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