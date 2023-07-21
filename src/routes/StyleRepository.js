import {styled} from "styled-components";

export const StyleRepository = styled.div`
    h1{
        text-align: center;
        color: #c0c0c0;
        font-size: 40px;
        font-weight: 400;
    }
    hr{
        width: 70%;
        margin: 0 auto;
    }
    .Container{
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        text-align: center;
        justify-content: center;
    }
    .Card{
       display: flex;
       flex-direction: column;
        row-gap: 20px;
        max-width: 100%;
    }
    .Title{
        cursor: default;
        color: black;
}
    .pokemon{
        max-width: 50%;
        max-height: 50%;
        margin: 0 auto;
}
    .ts{
        max-width: 20%;
        max-height: 20%;
        margin: 0 auto;
    }
    .Description{
        text-align: center;
}
    button{
        cursor: pointer;
        background: none;
        width: 200px;
        height: 50px;
        margin: 10px auto;
        border-radius: 20px;
        border: white 3px solid;
        font-size: 20px;
        font-weight: 400;
        font-family: 'VT323', monospace;
        transition: 1s ease;
    
    &:hover{
        background-color: #c0c0c0;
        font-size: 23px;
        font-weight: 450;
        transition: 1s ease;
    }
}
    @media(max-width: 700px){
        .Container{
            display: flex;
            flex-direction: column;
            justify-items: center;
            row-gap: 100px;
        }
    }
`;