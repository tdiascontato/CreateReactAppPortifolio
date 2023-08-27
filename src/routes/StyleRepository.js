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
export const Button = styled.button`
        cursor: pointer;
        display: flex;
        margin: 20px auto;
        padding: 5px;
        background: #88d3ab;
        height: 50px;
        max-width: fit-content;
        font-size: large;
        border: none;
        border-radius: 10px;
`;
export const Container = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 20px;
        padding: 5px;
        gap:20px;
        @media(max-width:1030px){
            display: flex;
            flex-direction: column;
        }
        .PomodoroImg{
            width: 30%;
        }
        .GithubImg{
            width: 35%;
        }
        #php, #mysql{
            width: 20%;
        }
        .Format{
            text-align: justify;
        }
`;
export const Card = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #8EAFAF;
    border: 2px solid #C0D0D0; 
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    max-width: 400px;
    margin: 10px auto;
`;
export const Card2 = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #8EAFAF;
    border: 2px solid #C0D0D0; 
    box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    max-width: 25rem;
    height:20rem;
    margin: 10px auto;
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
export const Beliche = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:1fr 1fr;
    
    @media(max-width:1030px){
        display: flex;
        flex-direction: column;
    }
`;
export const BySide = styled.div`
    display: flex;
    justify-content: center;
`;