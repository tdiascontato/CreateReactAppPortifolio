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
        margin-top: 100px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        justify-content: center;
        //align-items: center;
    }
    .Card{
       display: flex;
       flex-direction: column;
       row-gap: 20px;
       max-width: 100%;
       min-height: 30vh;
    }
    .Title{
        cursor: default;
        color: #c0c0c0;
}
    .pokemon{
        max-width: 50%;
        max-height: 50%;
        margin: 0 auto;
}

    .Description{
        text-align: center;
}
    .SpaceTap{
        display: flex;
        align-self: center;
        width: 95%;
        height: 450px;
        border-radius: 20px;
        background-color: #d4d473 ;//#975c5c; // #024442; //#024442;//#244420;
        
}
    .Circle{
        display: block;
        //valores abaixo default para modificar em js
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;       
        background-color: black;
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
    @media(max-width: 1000px){
        .Container{
            display: flex;
            flex-direction: column;
            justify-items: center;
            row-gap: 100px;
        }
}
`;