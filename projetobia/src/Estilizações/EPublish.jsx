import styled from "styled-components"

export const Principal = styled.div`
    text-align: center;
    background-color: #eac7b4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-items: center;
    text-align: center;
    .swiper-button-next, .swiper-button-prev{
        color: white;
        font-size: 15px;
    }
    .swiper-button-next:after {
        font-size: 30px;
    }
    .swiper-button-prev:after, .swiper-rtl .swiper-button-next:after{
        font-size: 30px;
    }
`
export const Espaço = styled.div`
    width: 100%;
    height: 5px;
    background-color: #59371c;
    margin-bottom: 0px;
`
export const EMaisAnuncios = styled.div`
    padding: 15px;
    margin: 70px 15px 15px 15px;
    width: auto;
    height: 300px;
    border: solid #eb9c20;
    border-radius: 10px;
`
export const Background = styled.div`
    width: 100%;
    height: 20px;
`
export const Descrição = styled.h1`
    color: white;
    font-size: 25px;
`
export const Titulo = styled.h2`
    color: white;
    font-size: 18px;
    text-align: left;
    margin-top:15px;
`
export const Medidas = styled.h2`
    color: white;
    font-size: 18px;
    text-align: left;
    margin-top: 30px;
`
