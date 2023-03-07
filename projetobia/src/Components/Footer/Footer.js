import styled from "styled-components"

const Rodape = styled.footer`
  height: 80px;
  color: white;
  text-align: center;
  background-color: #59371c;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
  font-size: 25px;
`
const Sac = styled.p`
    cursor: pointer;
`

function Footer (){
    return (
        <Rodape>
            <Sac>Sac</Sac> <Sac>Contato</Sac>
        </Rodape>
    )
}
export default Footer