import { styled } from "styled-components";
export const StylePokedex = styled.div`
    .Container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 10px;
        margin: 20px 50px;
    @media(max-width:700px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media(max-width:400px){
        display: grid;
        grid-template-columns: 1fr;
    }

    }
`;

