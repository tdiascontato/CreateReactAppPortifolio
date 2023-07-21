import {styled} from "styled-components";

export const StyleRepository = styled.div`
    h1{
        text-align: center;
        color: #c0c0c0;
        font-size: 40px;
        font-weight: 400;
    }
    .Container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        gap: 10px;
        margin:50px;
        text-align: center;
    }
    .Card{
       display: flex;
       flex-direction: column;
        row-gap: 20px;
        width: 200px;
    }
    .Title{
        cursor: default;
        color: black;
}

    .ImageMovie{
        width: 50%;
        height: 50%;
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