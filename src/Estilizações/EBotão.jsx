import styled from "styled-components"

export const EBotão = styled.div`
    display: flex;
    width: 100%;
    background-color: #EAC7b4;
    justify-content: center;
    border: none;
    gap:15px;
    margin-top: 15px;
    
    .tamanho {
        height: 44px    
    }

    button {
        border: none;
        width: 130px;
        height: 46px;
        padding: 8px;
        border-radius: 7px;
        color: white;

    }

    .amarelo {
        background-color: #ffc107;
    }
    .verde {
        background-color: #198754;
    }
    
    button:hover {
        width: 132px;
        transition: 0.2s;
    }

`
