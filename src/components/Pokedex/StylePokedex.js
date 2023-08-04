import { styled } from "styled-components";
export const StylePokedex = styled.div`
    .Container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
        margin: 20px 50px;
    @media(max-width:800px){
        display: grid;
        grid-template-columns: 1fr;
    }

    }
`;

