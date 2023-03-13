import styled from "styled-components"

export const Rodape = styled.footer`
  height: 150px;
  color: white;
  text-align: center;
  background-image: url(https://media.istockphoto.com/id/1203375691/pt/foto/worn-brown-marble-or-cracked-concrete-background.jpg?s=612x612&w=0&k=20&c=pfR3R-42iAq9aMDdVF-PahbVecU0z7oXXDv_UdAZRy0=);
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
  font-size: 25px;
  align-items: center;
  @media (max-width: 500px){
        font-size: 20px;
    }
`
export const Sac = styled.p`
    cursor: pointer;
    :hover{
        transition: 0.3s;
        font-size: 28px;
    }
`
export const Imagem = styled.img`
    width: 35px;
    height: 35px;
    :hover{
        width: 40px;
        height: 40px;
        transition: 0.3s;
    }
`