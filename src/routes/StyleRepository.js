import {styled} from "styled-components";

export const StyleRepository = styled.div`
    h1{
        text-align: center;
        color: #c0c0c0;
    }
    .Container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        place-items: center;
        gap: 10px;;
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
    
    &:hover{
        color: #c0c0c0;
    }
}
    .ImageMovie{
        width: 50%;
        height: 50%;
        margin: 0 auto;
}
    .Description{
        text-align: justify;
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