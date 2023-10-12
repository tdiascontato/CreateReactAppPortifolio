import {styled} from "styled-components";

export const H1 = styled.h1`
    text-align: center;
    font-size: x-large;
    cursor: default;
    padding: 5px 10px;
    @media(max-width: 500px){
        font-size: 1.5rem;
    }
    a{
        font-style: none;
        text-decoration: none;
    }
`;
export const H2 = styled.h2`
        text-align: center;
        font-size: medium;
        cursor: default;
        padding: 5px 10px;
        color: black;
        @media(max-width: 500px){
            font-size: 1rem;
    }
        a{
            font-style: none;
            text-decoration: none;
        }
`;
export const Img = styled.img`
        display: flex;
        margin: 0 auto;   
        border-radius: 10px;

        filter: brightness(0.8); 
        transition: filter 0.5s ease-in-out;
        &:hover{
            filter: brightness(1);
        }
        @media(max-width:1030px){
            filter: brightness(1);
        }
`;
export const Img2 = styled.img`
        display: flex;
        width: 100%;
        margin: 0 auto;   
        border-radius: 10px;
        
        filter: brightness(0.8); 
        transition: filter 0.5s ease-in-out;
        &:hover{
            filter: brightness(1);
        }
        @media(max-width:1030px){
            filter: brightness(1);
        }
`;

export const BySide = styled.div`
    display: flex;
    margin:5px auto;
    gap:3rem;
`;
export const Container = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 60vw;
        //place-items:center;
        //padding: 2rem auto;
        margin: 5rem auto;
        gap: 3%;
        
        @media(max-width:1030px){
            display: flex;
            flex-direction: column;
        }
        #icon{
            width: 15%;
        }
        .Format{
            text-align: justify;
        }
`;
export const West = styled.div`
        display: flex;
        background-color: #8EAFAF;

        border: 10px outset #ff6550;
        box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.6);
        border-radius: 20px;
`;
export const CardSuperior = styled.div`
        display: flex;
        flex-direction: column;
        background-color: #8EAFAF;
        align-items:center;
        margin-bottom: 0;

        border: 10px outset #ff6550;
        box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.6);
        border-radius: 20px;
`;
export const CardFull = styled.section`
        display: flex;
        flex-direction: column;
        background-color: #8EAFAF;

        border: 10px outset #ff6550;
        box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.6);
        border-radius: 20px;
`;