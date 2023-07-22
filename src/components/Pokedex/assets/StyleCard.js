import {styled} from "styled-components";
export const StyleCard = styled.div`
    .Container{
        display: flex;
        flex-direction: column;
        gap: 5px;
        margin: 5px auto;
        background-color: ${ props => console.log(props) };
    }
    .Title{
        font-size: 30px;
        font-family: 'VT323', monospace;
    }
`;
