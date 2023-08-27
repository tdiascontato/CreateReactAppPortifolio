import styled from "styled-components";

export const H1 = styled.h1`
            text-align: center;
            cursor: default;
            @media(max-width:1100px){
                font-size: 1.75rem;
            }
`;
export const H2 = styled.h2`
            text-align: center;
            cursor: default;
            @media(max-width:1100px){
                font-size: 1.5rem;
            }
`;
export const Card = styled.section`
    border: 2px solid #C0D0D0;
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.6);
    padding: 5px 10px;
    border-radius: 15px;
    width: fit-content;
    margin: 0 auto;
    .SpaceTap{
        display: flex;
        @media(max-width: 600px){
            flex-direction: column;
        }
    }
`;
export const Card2 = styled.section`
    display: flex;
    flex-direction: column;
    margin: 15px;
    padding: 15px;
    hr{
        background-color: #fff;
        width: 40px;
        height: calc(100%-50px);
        border: none;
        border-radius: 20px;
    }
`;
export const Container = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;
    margin: 1rem 3rem;
    height: content;
    text-align: center;
    align-items: center;
    @media(max-width: 1100px){
        display: flex;
        flex-direction: column;
        grid-gap: 50px;
    .MobileSection{
        display: flex;
    }
    .WebSection{
        display: none;
    }
    }
    .photo{
        display: flex;
        width: 450px;
        border-radius: 20px;
        margin: 5% auto;
    @media(max-width: 550px){
        width: 250px;
    }
    }
    .MobileSection{
        display: none;
    }
    .SpaceTap{
        display: flex;
        align-self: center;
        width: 50vw;
        height: 70vh;
        border-radius: 20px;
        background-color: #ACDD93;
        box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.6); 
        @media(max-width: 1100px){
            min-width: 60vw;
        }  
    .Circle{
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;       
        background-color: black; 
    }
    .ContainerPokedex{//modifica de outro componente
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        justify-content: center;
    }
    }
`;
export const Button = styled.button`
        cursor: pointer;
        display: flex;
        margin: 20px auto;
        padding: 15px;
        background: #88d3ab;
        height: fit-content;
        max-width: fit-content;
        font-size: x-large;
        border: none;
        border-radius: 20px;
`;
export const Pokemon = styled.div`
    .Imagem{
        display: flex;
        width: 200px;
        border-radius: 20px;
        margin: 5% auto;
        @media(max-width: 550px){
            width: 300px;
        }
    }
    .ContainerPokedex{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .DownBellow{
        margin-top: 5%;
    }
    .LastOne{
        margin-bottom: 5%;
    }
`;